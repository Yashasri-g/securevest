import React from 'react';

/** Quiet animated backdrop: two slow-drifting colour washes and a whisper of grain. */
export default function PillarsBackdrop() {
  return (
    <div className="pb-root" aria-hidden="true">
      <span className="pb-blob pb-blob-gold" />
      <span className="pb-blob pb-blob-cyan" />
      <span className="pb-grain" />
    </div>
  );
}
