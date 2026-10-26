/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Lets CI/local checks build without clobbering a running dev server's .next folder.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Old article URLs keep working and pass their ranking to the new slugs.
  async redirects() {
    return [
      { source: '/blog-post', destination: '/why-term-insurance-is-a-must-have-for-every-family', permanent: true },
      { source: '/blog-post1', destination: '/understanding-wills-and-trusts', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
