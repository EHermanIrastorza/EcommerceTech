import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cobalt-blue": "#0047AB",
        "vibrant-orange": "#FF4500",
        "dark-gray": "#333333",
        "metallic-silver": "#A9A9A9",
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        angular: ['"Titillium Web"', "sans-serif"],
      },
    },
  },
};
export default config;
