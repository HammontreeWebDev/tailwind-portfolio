/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 60% — Dominant canvas (dark mode) */
        canvas: {
          DEFAULT: "#0A1416",
          elevated: "#111F22",
          muted: "#1A2E31",
          border: "#243A3D",
        },
        /* 30% — Secondary structure & typography */
        secondary: {
          DEFAULT: "#30B8BF",
          muted: "#8BBEC2",
        },
        /* Brand primaries */
        cyan: {
          DEFAULT: "#00F2FE",
          muted: "rgba(0, 242, 254, 0.15)",
        },
        slate: {
          DEFAULT: "#407C80",
          muted: "rgba(64, 124, 128, 0.4)",
        },
        copper: {
          DEFAULT: "#AA6639",
          muted: "rgba(170, 102, 57, 0.2)",
        },
        /* 10% — Conversion accent (CTAs only) */
        accent: {
          DEFAULT: "#FF6500",
          hover: "#E55A00",
          muted: "rgba(255, 101, 0, 0.12)",
        },
        /* Semantic text */
        ink: {
          DEFAULT: "#F4F7F8",
          muted: "#B8D4D6",
          subtle: "#8BBEC2",
        },
        /* Shorthand functional aliases */
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
      },
      boxShadow: {
        accent: "0 4px 24px rgba(255, 101, 0, 0.25)",
        card: "0 1px 0 rgba(48, 184, 191, 0.08) inset",
      },
    },
  },
  plugins: [],
};
