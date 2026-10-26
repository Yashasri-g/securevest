import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', '.next-build/**', 'node_modules/**'],
  },
  {
    // next.config sets images.unoptimized, so <img> is deliberate (logos, static JPGs, SVG-like art).
    rules: { '@next/next/no-img-element': 'off' },
  },
  {
    // Vendored, animation-heavy UI primitives. They work as shipped; keep the strict React-compiler
    // rules visible as warnings instead of blocking CI.
    files: ['src/components/ui/**'],
    rules: {
      'react-hooks/refs': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
  },
];

export default config;
