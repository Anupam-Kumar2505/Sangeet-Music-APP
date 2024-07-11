/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#F2AA4C", // For primary elements like buttons
          secondary: "#101820", // For background and secondary elements
          accent: "#F2AA4C", // Accent color for other elements
          neutral: "#101820", // Neutral color for text and other elements
          "base-100": "#101820",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
