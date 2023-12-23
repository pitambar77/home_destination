/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineClamp:{
        10:"10",
        12:"12",
      }
    },
    fontFamily:{
      signature:["Great Vibes"],
    }
  },
  plugins: [ require("@tailwindcss/line-clamp")],
  variants: {
    extend:['hover']
  },
}


