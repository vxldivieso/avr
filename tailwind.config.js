/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        textContrast: "var(--textContrast)",
        background: "var(--background)",
        backgroundCards: "var(--backgroundCards)",
        backgroundCardLight: "var(--backgroundCardLight)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        shadowBox: "var(--shadowBox)",
      },
      boxShadow: {
        hover: "var(--hover)",
      },
      animation: {
        "zoom-in": "zoomIn 0.4s ease-in", // Personaliza la animación "zoomIn" con efecto "ease-in"
        "zoom-out": "zoomOut 0.4s ease-out", // Personaliza la animación "zoomOut" con efecto "ease-out"
      },
      screen: {
        xs: "300px",
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      // Habilitar las variantes de formulario
      formField: ["responsive"],
    },
  },
};
