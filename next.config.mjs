import path from 'path';

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    config.experiments = { 
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true
    }
    if (!isServer) {
      config.output.environment = { ...config.output.environment, asyncFunction: true };
      // config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    }
    // if (isServer) {
    //   config.output.webassemblyModuleFilename =
    //     './../static/wasm/[modulehash].wasm';
    // } else {
    //   config.output.webassemblyModuleFilename =ff
    //     'static/wasm/[modulehash].wasm';
    // }
    return config
    },
    outputFileTracing: true,
};

export default nextConfig;
