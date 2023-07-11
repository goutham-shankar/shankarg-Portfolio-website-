module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#444945',
    
      fontFamily: {
        Rampart: ["Cedarville Cursive", "cursive"],
        Mono: ["Spline Sans Mono", "monospace"],
      },
    },
    },
  },
  plugins: [

  ],
}
