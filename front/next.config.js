/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, //warnings из-за сторонних библиотек
	poweredByHeader: false, //скрываем, что сделано на Next.js
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
}

module.exports = nextConfig
