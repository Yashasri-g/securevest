'use client';

import React, { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

/**
 * Procedural 3D call-centre agent (no image assets). When the CTA scrolls into
 * view he rises behind a desk, then keeps typing on his laptop, talking into the
 * headset mic, nodding and blinking while call rings pulse out of the mic.
 * The whole scene orbits slightly with the cursor so the 3D reads clearly.
 * three.js is imported lazily the first time the stage is near the viewport.
 */
export default function CallingAdvisorStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    const boot = async () => {
      const THREE = await import('three');
      const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');
      if (disposed) return;

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      host.appendChild(renderer.domElement);
      renderer.domElement.setAttribute('aria-hidden', 'true');

      const scene = new THREE.Scene();
      // soft studio light = the "clay render" look
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;
      scene.environmentIntensity = 0.9;

      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 60);
      const camBase = new THREE.Vector3(0, 3.3, 9.6);
      const lookAt = new THREE.Vector3(-0.35, 1.55, 0.2);
      camera.position.copy(camBase);
      camera.lookAt(lookAt);

      const key = new THREE.DirectionalLight(0xfff1dc, 1.6);
      key.position.set(-3, 6, 6);
      scene.add(key);
      const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
      rimLight.position.set(5, 3, -4);
      scene.add(rimLight);

      // ---- materials ------------------------------------------------------
      const std = (color: number, roughness = 0.55, metalness = 0, side: THREE.Side = THREE.FrontSide) =>
        new THREE.MeshStandardMaterial({ color, roughness, metalness, side });
      const skin = std(0xf3b99a, 0.6);
      const shirtMat = std(0xf2a74d, 0.65, 0, THREE.DoubleSide);
      const cream = std(0xfff3df, 0.65, 0, THREE.DoubleSide);
      const hairMat = std(0x8a5638, 0.55);
      const headsetGrey = std(0x565c66, 0.4);
      const cupOrange = std(0xf2a24c, 0.45);
      const dark = std(0x1a1512, 0.4);
      const silver = std(0xc6cad0, 0.3, 0.7);
      const keyMat = std(0x8d939c, 0.5);
      const deskMat = std(0x16233f, 0.5, 0.1);
      const mouthMat = new THREE.MeshBasicMaterial({ color: 0x5b0f1f, side: THREE.DoubleSide });
      const teethMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      const blush = new THREE.MeshBasicMaterial({ color: 0xf08a7a, transparent: true, opacity: 0.3, depthWrite: false });
      const screenGlow = new THREE.MeshBasicMaterial({ color: 0x9fd8ff, side: THREE.DoubleSide });

      const rig = new THREE.Group();
      scene.add(rig);

      const add = (geo: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D = rig) => {
        const m = new THREE.Mesh(geo, mat);
        parent.add(m);
        return m;
      };
      const flat = (pts: [number, number][], mat: THREE.Material, parent: THREE.Object3D, z: number) => {
        const shape = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
        const mesh = add(new THREE.ShapeGeometry(shape), mat, parent);
        mesh.position.z = z;
        return mesh;
      };

      // ---- desk + laptop --------------------------------------------------
      const desk = add(new THREE.BoxGeometry(5, 0.3, 3.2), deskMat);
      desk.position.set(0, 0.28, 1.95);

      const laptop = new THREE.Group();
      laptop.position.set(0, 0.43, 1.25);
      rig.add(laptop);
      add(new THREE.BoxGeometry(1.9, 0.07, 1.3), silver, laptop).position.y = 0.035;
      const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 0.03, 0.1), keyMat, 13 * 5);
      const mtx = new THREE.Matrix4();
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 13; c++) {
          mtx.makeTranslation(-0.78 + c * 0.13, 0.085, -0.5 + r * 0.13);
          keys.setMatrixAt(r * 13 + c, mtx);
        }
      }
      laptop.add(keys);
      add(new THREE.BoxGeometry(0.6, 0.012, 0.3), std(0xaab0b8, 0.4, 0.5), laptop).position.set(0, 0.075, 0.38);
      const lid = new THREE.Group();
      lid.position.set(0, 0.07, 0.65);
      lid.rotation.x = 0.32; // leans away from the agent
      laptop.add(lid);
      add(new THREE.BoxGeometry(1.9, 1.2, 0.05), silver, lid).position.y = 0.6;
      const panel = add(new THREE.PlaneGeometry(1.74, 1.04), screenGlow, lid);
      panel.position.set(0, 0.6, -0.027);
      panel.rotation.y = Math.PI;
      const lidLogo = add(new THREE.CircleGeometry(0.1, 24), std(0x38bdf8, 0.3, 0.2), lid);
      lidLogo.position.set(0, 0.62, 0.027);

      // ---- agent: torso ---------------------------------------------------
      const torso = add(new THREE.CylinderGeometry(0.5, 0.62, 1.6, 44), shirtMat);
      torso.scale.z = 0.72;
      torso.position.y = 0.8;
      const shoulders = add(new THREE.CapsuleGeometry(0.27, 0.8, 10, 24), shirtMat);
      shoulders.rotation.z = Math.PI / 2;
      shoulders.scale.set(1, 1, 0.9);
      shoulders.position.y = 1.43;
      const neck = add(new THREE.CylinderGeometry(0.17, 0.2, 0.4, 24), skin);
      neck.position.y = 1.72;
      const collarRing = add(new THREE.TorusGeometry(0.22, 0.05, 10, 32), cream);
      collarRing.rotation.x = Math.PI / 2;
      collarRing.position.set(0, 1.62, 0.0);
      for (const m of [1, -1]) {
        const w = flat([[0, 1.68], [0.34, 1.74], [0.14, 1.34]], cream, rig, 0.4);
        w.scale.x = m;
      }
      const placket = add(new THREE.BoxGeometry(0.1, 1.15, 0.02), shirtMat);
      placket.position.set(0, 0.95, 0.43);
      for (let i = 0; i < 5; i++) {
        const b = add(new THREE.SphereGeometry(0.03, 10, 8), cream);
        b.position.set(0, 1.35 - i * 0.22, 0.45);
      }

      // ---- head -----------------------------------------------------------
      const head = new THREE.Group();
      head.position.set(0, 2.4, 0.04);
      rig.add(head);
      const skull = add(new THREE.SphereGeometry(0.66, 56, 44), skin, head);
      skull.scale.set(1, 1.04, 1);
      const jaw = add(new THREE.SphereGeometry(0.4, 32, 24), skin, head);
      jaw.scale.set(0.95, 0.8, 0.85);
      jaw.position.set(0, -0.32, 0.12);
      for (const side of [-1, 1]) {
        const cheek = add(new THREE.SphereGeometry(0.12, 16, 12), blush, head);
        cheek.scale.set(1.3, 0.8, 0.3);
        cheek.position.set(side * 0.38, -0.16, 0.52);
        const ear = add(new THREE.SphereGeometry(0.1, 20, 14), skin, head);
        ear.scale.set(0.5, 1, 0.8);
        ear.position.set(side * 0.64, -0.04, -0.02);
      }
      const nose = add(new THREE.SphereGeometry(0.085, 20, 16), skin, head);
      nose.scale.set(1, 0.9, 1.1);
      nose.position.set(0, -0.08, 0.68);

      // hair: tilted cap, fringe and side tufts
      const hair = add(new THREE.SphereGeometry(0.7, 48, 32, 0, Math.PI * 2, 0, 1.5), hairMat, head);
      hair.scale.set(1.04, 1.06, 1.04);
      hair.rotation.x = -0.4;
      hair.position.set(0, 0.04, -0.04);
      const fringe = add(new THREE.SphereGeometry(0.3, 28, 18), hairMat, head);
      fringe.scale.set(1.9, 0.62, 0.9);
      fringe.rotation.z = 0.2;
      fringe.position.set(-0.1, 0.54, 0.34);
      for (const side of [-1, 1]) {
        const tuft = add(new THREE.SphereGeometry(0.27, 24, 18), hairMat, head);
        tuft.scale.set(0.8, 1.15, 1);
        tuft.position.set(side * 0.58, 0.08, -0.12);
      }

      // eyes, brows
      const eyeParts: { m: THREE.Mesh; sy: number }[] = [];
      for (const side of [-1, 1]) {
        const e = add(new THREE.SphereGeometry(0.075, 20, 14), dark, head);
        e.scale.set(0.8, 1.35, 0.5);
        e.position.set(side * 0.23, 0.09, 0.62);
        const g = add(new THREE.SphereGeometry(0.02, 10, 10), teethMat, head);
        g.position.set(side * 0.23 + 0.015, 0.14, 0.655);
        eyeParts.push({ m: e, sy: e.scale.y }, { m: g, sy: g.scale.y });
        const brow = add(new THREE.CapsuleGeometry(0.018, 0.16, 6, 10), dark, head);
        brow.rotation.z = Math.PI / 2 - side * 0.2;
        brow.position.set(side * 0.24, 0.27, 0.6);
      }

      // open smile
      const mouth = new THREE.Group();
      mouth.position.set(0, -0.26, 0.625);
      head.add(mouth);
      const bowl = new THREE.Shape();
      bowl.moveTo(-0.15, 0);
      bowl.lineTo(0.15, 0);
      bowl.bezierCurveTo(0.15, -0.22, -0.15, -0.22, -0.15, 0);
      add(new THREE.ShapeGeometry(bowl), mouthMat, mouth);
      const teeth = add(new THREE.PlaneGeometry(0.25, 0.045), teethMat, mouth);
      teeth.position.set(0, -0.025, 0.002);

      // headset (grey band, orange cups, boom mic on the near side)
      const band = add(new THREE.TorusGeometry(0.78, 0.04, 12, 56, Math.PI), headsetGrey, head);
      band.position.set(0, 0.0, -0.03);
      for (const side of [-1, 1]) {
        const cup = add(new THREE.CylinderGeometry(0.25, 0.25, 0.16, 36), cupOrange, head);
        cup.rotation.z = Math.PI / 2;
        cup.position.set(side * 0.78, -0.03, -0.02);
        const rim = add(new THREE.TorusGeometry(0.25, 0.04, 12, 36), headsetGrey, head);
        rim.rotation.y = Math.PI / 2;
        rim.position.set(side * 0.86, -0.03, -0.02);
        const hinge = add(new THREE.CylinderGeometry(0.05, 0.05, 0.12, 12), headsetGrey, head);
        hinge.position.set(side * 0.78, 0.22, -0.02);
      }
      const boom = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.84, -0.12, 0.12),
        new THREE.Vector3(0.74, -0.46, 0.42),
        new THREE.Vector3(0.46, -0.56, 0.66),
        new THREE.Vector3(0.2, -0.42, 0.72),
      ]);
      add(new THREE.TubeGeometry(boom, 24, 0.022, 8, false), headsetGrey, head);
      const micTip = add(new THREE.SphereGeometry(0.06, 16, 12), dark, head);
      micTip.scale.set(1.2, 0.8, 1);
      micTip.position.copy(boom.getPoint(1));

      // ---- arms: 3D two-bone IK + typing hands ---------------------------
      const L1 = 0.82;
      const L2 = 0.78;
      const ARM_R = 0.15;
      const FORE_R = 0.115;
      const unitCyl = new THREE.CylinderGeometry(1, 1, 1, 18);
      const unitSphere = new THREE.SphereGeometry(1, 20, 14);

      const makeLimb = () => ({
        sleeve: add(unitCyl, shirtMat),
        band: add(unitCyl, cream),
        upperSkin: add(unitCyl, skin),
        fore: add(unitCyl, skin),
        elbow: add(unitSphere, skin),
        sleeveCap: add(unitSphere, shirtMat),
      });
      const yAxis = new THREE.Vector3(0, 1, 0);
      const place = (m: THREE.Mesh, a: THREE.Vector3, b: THREE.Vector3, radius: number) => {
        const dir = new THREE.Vector3().subVectors(b, a);
        const len = dir.length();
        m.position.copy(a).addScaledVector(dir, 0.5);
        m.quaternion.setFromUnitVectors(yAxis, dir.normalize());
        m.scale.set(radius, len, radius);
      };
      const solveElbow = (S: THREE.Vector3, T: THREE.Vector3, pole: THREE.Vector3) => {
        const u = new THREE.Vector3().subVectors(T, S);
        const d = Math.min(Math.max(u.length(), 0.3), L1 + L2 - 0.002);
        u.normalize();
        const x = (L1 * L1 - L2 * L2 + d * d) / (2 * d);
        const h = Math.sqrt(Math.max(L1 * L1 - x * x, 0));
        const perp = pole.clone().addScaledVector(u, -pole.dot(u)).normalize();
        return S.clone().addScaledVector(u, x).addScaledVector(perp, h);
      };

      const makeHand = (side: number) => {
        const g = new THREE.Group();
        const palm = add(unitSphere, skin, g);
        palm.scale.set(0.14, 0.06, 0.15);
        const fingers: THREE.Group[] = [];
        for (let i = 0; i < 4; i++) {
          const f = new THREE.Group();
          f.position.set(-0.075 + i * 0.05, 0.0, 0.1);
          const seg = add(new THREE.CapsuleGeometry(0.026, 0.16, 6, 10), skin, f);
          seg.rotation.x = Math.PI / 2;
          seg.position.z = 0.1;
          g.add(f);
          fingers.push(f);
        }
        const thumb = add(new THREE.CapsuleGeometry(0.03, 0.1, 6, 10), skin, g);
        thumb.rotation.set(Math.PI / 2, 0, 0.6 * side);
        thumb.position.set(-0.13 * side, 0, 0.04);
        rig.add(g);
        return { g, fingers };
      };

      const limbs = [makeLimb(), makeLimb()];
      const hands = [makeHand(1), makeHand(-1)];
      const shoulderPos = [new THREE.Vector3(0.66, 1.43, 0), new THREE.Vector3(-0.66, 1.43, 0)];
      const poles = [new THREE.Vector3(0.7, -0.9, -0.25), new THREE.Vector3(-0.7, -0.9, -0.25)];
      const tmpA = new THREE.Vector3();
      const tmpB = new THREE.Vector3();

      const updateArm = (i: number, wrist: THREE.Vector3) => {
        const S = shoulderPos[i];
        const E = solveElbow(S, wrist, poles[i]);
        const p = limbs[i];
        // short orange sleeve on the first 55% of the upper arm, cream band, skin below
        const sleeveEnd = tmpA.copy(S).lerp(E, 0.55).clone();
        const bandEnd = tmpB.copy(S).lerp(E, 0.62).clone();
        place(p.sleeve, S, sleeveEnd, ARM_R + 0.03);
        place(p.band, sleeveEnd, bandEnd, ARM_R + 0.034);
        place(p.upperSkin, bandEnd, E, ARM_R - 0.005);
        place(p.fore, E, wrist, FORE_R);
        p.elbow.position.copy(E);
        p.elbow.scale.setScalar(ARM_R - 0.005);
        p.sleeveCap.position.copy(S);
        p.sleeveCap.scale.setScalar(ARM_R + 0.05);
      };

      // ---- sound rings from the mic (billboarded) ------------------------
      const ringGeo = new THREE.RingGeometry(0.46, 0.5, 64);
      const rings = [0, 1, 2].map((i) => {
        const mat = new THREE.MeshBasicMaterial({
          color: i === 1 ? 0xc5a059 : 0x38bdf8,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(ringGeo, mat);
        scene.add(mesh);
        return mesh;
      });
      const micWorld = new THREE.Vector3();

      // ---- sizing ---------------------------------------------------------
      const resize = () => {
        const w = host.clientWidth;
        const h = host.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camBase.z = Math.max(9.6, 9.6 * (0.95 / camera.aspect));
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      // ---- pointer orbit --------------------------------------------------
      const pointer = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      // ---- visibility-driven rise ----------------------------------------
      let visible = false;
      let riseStart = -1;
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible && riseStart < 0) riseStart = performance.now();
        },
        { threshold: 0.35 }
      );
      io.observe(host);

      const easeOutBack = (t: number) => {
        const c1 = 1.7;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
      };

      const wristA = new THREE.Vector3();
      const wristB = new THREE.Vector3();
      const wrists = [wristA, wristB];
      const wristBack = new THREE.Vector3();
      let yaw = -1.05;
      let raf = 0;
      let revealed = false;

      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (!visible) return;

        const t = now / 1000;
        const riseT = reduceMotion ? 1 : Math.min(Math.max((now - riseStart) / 1500, 0), 1);
        if (riseT >= 1 && !revealed) {
          revealed = true;
          setReady(true);
        }
        rig.position.y = -4.6 * (1 - (reduceMotion ? 1 : easeOutBack(riseT)));

        // gentle orbit toward the cursor
        const targetYaw = -1.05 + pointer.x * 0.45;
        yaw += (targetYaw - yaw) * 0.06;
        rig.rotation.y = yaw + Math.sin(t * 0.5) * 0.04;
        camera.position.set(camBase.x, camBase.y - pointer.y * 0.7, camBase.z);
        camera.lookAt(lookAt);

        // talking head: turns toward the viewer, nods, tilts
        const talk = reduceMotion ? 0 : Math.max(0, Math.sin(t * 8.4)) * (0.5 + 0.5 * Math.sin(t * 1.8));
        head.rotation.y = 0.38 + Math.sin(t * 0.7) * 0.12;
        head.rotation.x = 0.1 + Math.sin(t * 5) * 0.03 * talk;
        head.rotation.z = Math.sin(t * 1.1) * 0.04;
        mouth.scale.set(1 + talk * 0.05, 0.5 + talk * 0.5, 1);
        const blink = reduceMotion ? 1 : Math.sin(t * 0.9) > 0.985 ? 0.08 : 1;
        for (const e of eyeParts) e.m.scale.y = e.sy * blink;

        // breathing
        const breathe = 1 + Math.sin(t * 1.6) * 0.008;
        torso.scale.set(breathe, 1, 0.72 * breathe);

        // typing: hands jitter over the keys, fingers tap out of phase
        const type = reduceMotion ? 0 : t * 11;
        wristA.set(0.3 + Math.sin(type * 0.31) * 0.05, 0.66, 0.92 + Math.sin(type * 0.5) * 0.05);
        wristB.set(-0.3 + Math.sin(type * 0.27 + 2) * 0.05, 0.66, 0.92 + Math.sin(type * 0.43 + 1) * 0.05);
        for (let i = 0; i < 2; i++) {
          const w = wrists[i];
          updateArm(i, wristBack.copy(w).setZ(w.z - 0.1));
          hands[i].g.position.copy(w);
          hands[i].fingers.forEach((f, k) => {
            const tap = reduceMotion ? 0 : Math.max(0, Math.sin(type * (1.1 + k * 0.23) + i * 2 + k * 1.7));
            f.rotation.x = 0.28 + tap * 0.3;
          });
        }

        // call rings pulsing from the mic
        micTip.getWorldPosition(micWorld);
        rings.forEach((ring, i) => {
          const p = reduceMotion ? 0.4 : (t * 0.6 + i / rings.length) % 1;
          ring.position.copy(micWorld);
          ring.quaternion.copy(camera.quaternion);
          ring.scale.setScalar(0.2 + p * 1.7);
          (ring.material as THREE.MeshBasicMaterial).opacity = (1 - p) * 0.6 * Math.min(1, riseT * 2);
        });

        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          const mesh = o as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
          if (Array.isArray(m)) m.forEach((x) => x.dispose());
          else m?.dispose();
        });
        envTex.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    // only pull in three.js once the stage is close to the viewport
    const preload = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preload.disconnect();
          boot().catch(() => {});
        }
      },
      { rootMargin: '400px 0px' }
    );
    preload.observe(host);

    return () => {
      disposed = true;
      preload.disconnect();
      cleanup?.();
    };
  }, []);

  return (
    <div className="call-stage" data-ready={ready}>
      <div className="call-stage-aura" aria-hidden="true" />
      <div className="call-stage-canvas" ref={hostRef} />
      <div className="call-stage-chip" aria-hidden="true">
        <span className="call-stage-dot" />
        Advisor on the line
      </div>
    </div>
  );
}
