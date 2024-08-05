/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#1B4965", // For primary elements like buttons
          secondary: "#62B6CB", // For background and secondary elements
          accent: "#BEE9E8", // Accent color for other elements
          neutral: "#CAE9FF", // Neutral color for text and other elements
          "base-100": "#5FA8D3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
