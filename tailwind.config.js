// tailwind.config.js
module.exports = {
  content: [
    "./**/*.html", // নিশ্চিত করুন এই পাথটি আপনার HTML ফাইলকে ধরছে
    // অন্যান্য ফাইলের পাথ
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily:{
        Outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"]
      }
    },
  },
  plugins: [],
}