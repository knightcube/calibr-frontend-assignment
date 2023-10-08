import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#4CAF4F",
        silver: "#F5F7FA",
        dark_gray: "#263238",
      },
      textColor: {
        primary: "#18191F",
        secondary: "#ffed4a",
        danger: "#e3342f",
        neutral_dark_gray:"#4D4D4D",
        neutral_gray:"#717171"
      },
    },
  },
  plugins: [],
};
export default config;
