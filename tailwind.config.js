/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.md",
    "./posts/*.md",
  ],
  theme: {
    extend: {
      colors: {
        "briix-primary": "#1F9ED3",
        "briix-black": "#000000",
        "briix-white": "#FFFFFF",
        "briix-body": "#666666",
        "briix-blue-1": "#EAF6FB",
        "briix-blue-3": "#99D2EB",
        "briix-blue-6": "#135F7F",
        "briix-blue-7": "#0C3F54",
        "briix-grey-2": "#E3E3E3",
        "briix-grey-6": "#606060",
        "briix-grey-7": "#262626",
        "briix-black-100": "#333333",
      },
      fontFamily: {
        manrope: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};