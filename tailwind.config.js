/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 3s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
