import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import { withRemoteComponents } from "remote-components/next/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withRemoteComponents(withMicrofrontends(nextConfig));
