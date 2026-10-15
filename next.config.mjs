/** @type {import("next").NextConfig} */
const nextConfig = {
  // Framer serves images from its CDN; allow them until you localise the assets.
  images: { remotePatterns: [{ protocol: "https", hostname: "framerusercontent.com" }] },
  async rewrites() {
    return [
      {
        source: "/:path*/assets/:asset*",
        destination: "/assets/:asset*",
      },
    ]
  },
}

export default nextConfig
