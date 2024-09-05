// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
};
