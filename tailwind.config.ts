import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0fafa",
          100: "#cceaec",
          200: "#99d4d8",
          300: "#66bfc5",
          400: "#33a9b2",
          500: "#01696f",
          600: "#0c4e54",
          700: "#0f3638",
          800: "#0a2426",
          900: "#051213",
        },
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
