/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maschat22.storage.iran.liara.space',
      },
    ],
    loader: "default",
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
//   images: {
//     domains: ["maschat22.storage.iran.liara.space"], // Add the domain for remote images
//     loader: "default",
//   },
// };

// export default nextConfig;
