import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Case-study covers come from the SNS studio site's CMS.
    remotePatterns: [{ protocol: "https", hostname: "www.snsautomation.tech", pathname: "/cms-api/media/file/**" }],
  },
};

export default nextConfig;
