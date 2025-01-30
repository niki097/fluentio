/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: {
          light: "#B7A6F8",
          DEFAULT: "#6548ee",
          dark: "#4A30B0",
        },
        DarkBlue: "#16075D",
        LightBlue: "#9DD9DE",
        SkyBlueL: "#D4FDE5",
        LightYellow: "#FAF687",
        Yellow: "#FFE380",
        Pink: "#FCD1DE",

      },
      boxShadow: {
        custom: '6px 6px 0px 0px #16075D', // Custom shadow
      }
    }
  },
  plugins: [],
};
