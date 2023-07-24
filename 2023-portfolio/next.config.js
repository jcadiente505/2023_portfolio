/** @type {import('next').NextConfig} */
const path = require('path');
 
const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "app/global.scss";`,
  },
};

module.exports = nextConfig;
