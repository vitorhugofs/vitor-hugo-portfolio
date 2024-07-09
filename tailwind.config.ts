import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "bg-white": "#f1f1f1",
      white: "#C5C6C7",
      black: "#0B0C10",
      gray: "#B3B3B3",
      default: "#222629",
      "default-dark": "",
      primary: "#86C232",
      secondary: "#62892F",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
