/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "orange-button": "#ff561e",
        gray: {
          50: "#f8f8f8",
          100: "#efefef",
          200: "#cccccc",
          300: "#b6b6b6",
          400: "#d9d9d9",
          500: "#7d7d7d",
          600: "#686465",
          700: "#4d4948",
          800: "#323232",
          900: "#1c1c1c",
        },
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: "auto",
      },
    },
    boxShadow: {
      navbar:
        "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
      card: "0px 14px 20px 0px rgba(0, 0, 0, 0.05)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1103px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1720px",
      // => @media (min-width: 1536px) { ... }

      "4xl": "1856px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
    },
  },
  plugins: [],
};
