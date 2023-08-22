/** @type {import('next').NextConfig} */
const nextConfig = {}
require('dotenv').config();


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    env: {
        MAIN_API_URL: process.env.MAIN_API_URL,
        LOGIN_API_URL: process.env.LOGIN_API_URL,
        REGISTER_API_URL: process.env.REGISTER_API_URL,
        CHANGE_PASS_API_URL: process.env.CHANGE_PASS_API_URL,
    },
    nextConfig
}
