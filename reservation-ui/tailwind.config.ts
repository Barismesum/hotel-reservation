import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#3A0CA3",
        hover:"#4361EE4D",
        textColor2:"#2B2B2B",
        circle:"#4361EE",
        bottomBlack:"#0B090A",
        textColor3:"#808080",
        icon:"#3A0CA3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
