'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Pillar {
  num: string;
  title: string;
  desc: string;
  bg: string;
  colors: [number, number, number][];
  speed: number;
  icon: React.ReactNode;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const PILLARS: Pillar[] = [
  {
    num: '01',
    title: 'Tailored Strategies, Not Cookie-Cutter Formulas',
    desc: 'Every recommendation is built from scratch around your specific cash flow, tax bracket, and family legacy timeline.',
    bg: '#0d172c',
    colors: [[216, 183, 115], [197, 160, 89], [125, 211, 252]],
    speed: 1,
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Objective Fiduciary Perspective',
    desc: 'We work exclusively for your household, recommending top-tier insurance carriers and low-drag investment vehicles without sales pressure.',
    bg: '#0d172c',
    colors: [[216, 183, 115], [197, 160, 89], [125, 211, 252]],
    speed: 1.15,
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Accessible, Transparent Guidance',
    desc: 'No convoluted financial jargon. We communicate every step clearly so you are completely confident in every decision.',
    bg: '#0d172c',
    colors: [[216, 183, 115], [197, 160, 89], [125, 211, 252]],
    speed: 0.9,
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      </svg>
    ),
  },
];

/**
 * Always-on dot-matrix canvas: a grid of dots that twinkle and ripple outward from
 * the card centre. On first view a reveal wave expands from the middle.
 */
function DotMatrix({ colors, speed }: { colors: [number, number, number][]; speed: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const GAP = 7;
    const SIZE = 2;
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let seeds: Float32Array = new Float32Array(0);
    let colorIdx: Uint8Array = new Uint8Array(0);
    let raf = 0;
    let visible = false;
    let startedAt = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP);
      rows = Math.ceil(h / GAP);
      seeds = new Float32Array(cols * rows);
      colorIdx = new Uint8Array(cols * rows);
      for (let i = 0; i < seeds.length; i++) {
        seeds[i] = Math.random();
        colorIdx[i] = Math.random() < 0.12 ? colors.length - 1 : Math.floor(Math.random() * (colors.length - 1));
      }
    };

    const BUCKETS = 6;
    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      if (startedAt < 0) startedAt = now;
      const t = (now - startedAt) / 1000;
      const reveal = reduceMotion ? 10 : t * 420; // px radius of the reveal wave
      const cx = w / 2;
      const cy = h / 2;
      const maxD = Math.hypot(cx, cy);

      ctx.clearRect(0, 0, w, h);
      for (let ci = 0; ci < colors.length; ci++) {
        const [r, g, b] = colors[ci];
        for (let bk = 1; bk <= BUCKETS; bk++) {
          ctx.fillStyle = `rgba(${r},${g},${b},${(bk / BUCKETS) * 0.9})`;
          ctx.beginPath();
          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              const i = y * cols + x;
              if (colorIdx[i] !== ci) continue;
              const px = x * GAP;
              const py = y * GAP;
              const d = Math.hypot(px - cx, py - cy);
              if (d > reveal) continue;
              const ripple = reduceMotion ? 0.5 : 0.5 + 0.5 * Math.sin(d * 0.035 - t * 1.6 * speed);
              const twinkle = reduceMotion
                ? 0.6
                : 0.5 + 0.5 * Math.sin(t * (1.2 + seeds[i] * 2.4) * speed + seeds[i] * 40);
              const edge = 0.25 + 0.75 * (d / maxD); // brighter toward the card edges
              const fadeIn = Math.min(1, (reveal - d) / 80);
              const a = (0.15 + 0.85 * ripple * twinkle) * edge * fadeIn;
              if (Math.min(BUCKETS, Math.max(1, Math.ceil(a * BUCKETS))) === bk && a > 0.04) {
                ctx.rect(px, py, SIZE, SIZE);
              }
            }
          }
          ctx.fill();
        }
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [colors, speed]);

  return <canvas ref={ref} className="pillar-canvas" aria-hidden="true" />;
}

export default function PillarsCanvasCards() {
  return (
    <div className="pillars-cards-grid">
      {PILLARS.map((p, i) => (
        <motion.article
          key={p.num}
          className="pillar-card"
          style={{ background: p.bg }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
        >

          <DotMatrix colors={p.colors} speed={p.speed} />
          <div className="pillar-card-veil" style={{ ['--veil' as string]: p.bg }} aria-hidden="true" />

          <span className="pillar-card-line" aria-hidden="true" />
          <span className="pillar-card-sheen" aria-hidden="true" />

          <div className="pillar-card-body">
            <div className="pillar-card-head" style={{ color: `rgb(${p.colors[0].join(',')})` }}>
              <span className="pillar-card-num">{p.num}</span>
              <span className="pillar-card-icon">{p.icon}</span>
            </div>
            <h3 className="pillar-card-title">{p.title}</h3>
            <p className="pillar-card-desc">{p.desc}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
