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
    },
  },
  plugins: [],
};

module.exports = {
  daisyui: {
    themes: [
      {
        dabubble: {
          "primary": "#444DF2",
          "secondary": "#535AF1",
          "accent": "#797EF3",
          "neutral": "#ffffff",
          "base-100": "#ECEEFE",
          "success": "#92C83E",
          "error": "#ED1E79"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
}
export default config;
