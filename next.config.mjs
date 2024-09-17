/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_SERVER: process.env.URL_SERVER,
  },
  images: {
    remotePatterns: [
      {
        port: "",
        hostname: "backend-image-upload-59qx.onrender.com",
        pathname: "/uploads/**",
      },
      {
        port: "",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
