import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['var(--font-lexend)'],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        customBlack: "#303030",
        blue00: "#357abb",
        blue01: "#2484c6",
        bgColor: "#f5f5f5"
      }
    },
  },
  plugins: [],
};
export default config;
