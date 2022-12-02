/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
  },
  content: ["components/**/*.vue", "pages/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [],
};
