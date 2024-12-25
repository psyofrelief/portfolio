import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        outline: "var(--outline)",
        primary: "var(--primary)",
        popover: "var(--popover)",
      },
      screens: {
        "2xs": "343px",
        xs: "360px",
        cus: "480px",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinInfinite: "rotate 2s linear infinite",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "2rem", // 32px
        xl: "2.5rem", // 40px
        "2xl": "3rem", // 48px
        "3xl": "5rem", // 80px
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        xxl: "80px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      minHeight: {
        "screen-minus-navbar": "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
