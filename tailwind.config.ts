import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080b14",
        secondary: "#0d1220",
        card: "#0f1628",
        accent: "#6c63ff",
        "accent-light": "#a78bfa",
        "accent-cyan": "#22d3ee",
        "accent-green": "#10b981",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeInUp 0.7s ease forwards",
        "slide-left": "slideInLeft 0.7s ease forwards",
        "slide-right": "slideInRight 0.7s ease forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
