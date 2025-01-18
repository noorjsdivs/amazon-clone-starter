import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Switzer, system-ui, sans-serif",
      },
      colors: {
        amazonBlue: "#131921",
        amazonLight: "#232F3E",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
        amazonYellow: "#fcd814",
        amazonYellowDark: "#f7ca00",
        amazonOrange: "#fba41c",
        amazonOrangeDark: "#fa8900",
        amazonGreen: "#7fda69",
        footerBg: "#232f3d",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
