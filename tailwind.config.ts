import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b0f19",
          emerald: "#059669",
          amber: "#d97706",
          card: "#f8fafc",
          border: "#e2e8f0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
