/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.html",
    "./*.js",              // রুট ফোল্ডারের সকল JS ফাইল (landing_page.js সহ)
    "./src/**/*.js"        // ভবিষ্যতে src ফোল্ডারে কোনো JS ফাইল রাখলে সেটির জন্য
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}