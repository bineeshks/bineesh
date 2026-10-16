import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        foreground: "#F8F8FF",
        navy: "#0A0F1E",
        violet: "#7B5EA7",
        white: "#F8F8FF",
        cyan: "#00D4FF",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
