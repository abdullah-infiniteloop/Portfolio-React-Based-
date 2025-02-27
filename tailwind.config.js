/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Use class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1E293B",
        secondary: "#64748B",
        accent: "#F97316",
      },
      fontSize: {
        base: "18px", // Default font size increased
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
      },
    },
  },
  plugins: [],
};
