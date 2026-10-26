'use client';

import React from 'react';
import { motion } from 'framer-motion';

/** Fade-and-rise once when scrolled into view. */
export default function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Horizontal start offset in px; negative enters from the left, positive from the right. */
  x?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y: x ? 0 : 28 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
