/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Scans all EJS files in the views folder
    "./public/**/*.js"   // Scans any client-side scripts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}