/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { images: { allowFutureImage: true } },
  images: {
   
        domains: ['upload.wikimedia.org'],
      
    
  },
}
