/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        domains: ['avatars.githubusercontent.com'] // allow fetch the avatar from the github
    },
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
        // Wildcard path matching
        {
          source: '/blog/:slug',
          destination: '/discuss/topics/:slug',
          permanent: true,
        },
      ]
    },
};

export default nextConfig;
