const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.tsx',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle TypeScript files
        exclude: /node_modules/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader', // for Tailwind or other PostCSS configurations
    'resolve-url-loader', // Ensure this is used before sass-loader for relative paths
    'sass-loader' // Compiles Sass to CSS
  ],
        include: path.resolve(__dirname, 'src'), // Ensure this includes the correct paths
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })], // Use tsconfig paths
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
};
