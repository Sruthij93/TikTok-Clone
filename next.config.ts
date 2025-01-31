import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // need image-js to work with canvas
  webpack: (config, { isServer }) => {
    // add a rule to handle the canvas.node binary module
    config.module.rules.push({
      test: /\.node$/,
      use: "raw-loader",
    });

    // Exclude canvas from being processed by Next.js in the browser
    if (!isServer) config.externals.push("canvas");
    return config;
  },
};

export default nextConfig;
