import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/wasm/',
            publicPath: '/_next/static/wasm/',
            name: '[contenthash].[ext]',
          },
        },
      ],
    });

    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  outputFileTracing: true,
};

export default nextConfig;
