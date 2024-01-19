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
        primary: "#3ea6ff",
        background: "#0f0f0f",
        fontColor: "#f1f1f1",
        borderColor: "#717171",
        blurColor: "#717171",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
