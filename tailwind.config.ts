import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ------- neutral ---------
        "neutral-400": "#595757",
        "neutral-500": "#312d2d",
        "neutral-600": "#100c0c",

        /*------primary---------- */
        "primary-400": "#6AD2FF",
        "primary-500": "#3AB4E8",
        "primary-600": "#259CD0",

        // ------- danger ---------
        "danger-400": "#FF6A6A",
        "danger-500": "#E84F3A",
        "danger-600": "#D02525",

        // ------- accent ---------
        "accent-400": "#F9F9F9",
        "accent-500": "#F2F2F2",
        "accent-600": "#E4E4E4",
      },
      fontFamily: {
        mona: ["var(--font-mona)"],
      },
      keyframes: {
        "bounce-custom": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "bounce-custom": "bounce-custom 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
