/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 🎨 Single source of truth for the brand gradient.
      // Change these three colors and the whole app re-themes:
      // brand name, hero heading highlight, and primary buttons.
      colors: {
        brand: {
          from: "#f97316", // orange
          via: "#ec4899",  // pink
          to: "#8b5cf6",   // violet
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};