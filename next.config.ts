import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],

    // нужно, чтобы в каждом scss файле не писать @use 'variables' as *;
    // prependData: `
    //   @use 'variables' as *;
    //   @use 'colors' as *;
    // `,
  },
};

export default nextConfig;
