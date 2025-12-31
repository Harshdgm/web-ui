/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // important for the toggle
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundLight: "var(--backgroundLight)",
        border: "var(--border)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};



// import type { Config } from "tailwindcss";

// const config: Config = {
//   theme: {
//     extend: {
//       colors: {
//         bestbg: "#FCF8F8";
//         border: "#eeeef0",
//         primary: "#ff5141",
//         blue: "#0d2541",
//         grayBg: "#f9f9f9",
//         white: "#ffffff",
//         black: "#000000",
//       },
//       backgroundImage: {
//         "gradient-blue": "linear-gradient(90deg, #0d2541 0%, #39679d 100%)",
//       },
//     },
//   },
// };

// export default config;
