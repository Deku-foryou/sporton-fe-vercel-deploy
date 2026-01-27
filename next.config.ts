import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "be-sporton.agunacourse.com",
      port: "", // Kosongkan saja
      pathname: "/**",
    },
  ],
 },
};

export default nextConfig;
