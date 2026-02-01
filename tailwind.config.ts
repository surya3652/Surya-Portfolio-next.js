import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-color": "#c2001c",
        "dark-gray": "#232323",
        "light-medium-gray": "#e9e9e9",
        "extra-medium-gray": "#999",
      },
      fontFamily: {
        primary: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "335": "20.938rem",
        "150": "9.375rem",
        "70": "4.375rem",
        "50": "3.125rem",
      },
      letterSpacing: {
        "minus-10px": "-10px",
        "minus-5px": "-5px",
        "minus-3px": "-3px",
      },
      spacing: {
        section: "90px",
        "section-tablet": "75px",
        "section-mobile": "50px",
      },
    },
  },
  plugins: [],
};

export default config;
