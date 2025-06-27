/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // สำหรับ kpl.gov.la
      {
        protocol: 'https',
        hostname: 'kpl.gov.la',
        port: '',
        pathname: '/**',
      },
      // สำหรับ Google Images
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      // เพิ่ม domain อื่นๆ ตามต้องการ
    ],
  },
}

module.exports = nextConfig