import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SecureVest Solutions',
    short_name: 'SecureVest',
    description: 'Fiduciary financial planning, life insurance and retirement strategies for families.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070e1c',
    theme_color: '#070e1c',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
