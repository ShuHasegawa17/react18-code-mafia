/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //trueにするとconsole.logが2重で出力される
  trailingSlash: true,
  images: {
    loader: 'custom',
  },
};

module.exports = nextConfig;
