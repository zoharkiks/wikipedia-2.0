/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Use custom colors
    // colors: {
    //   'white': '#ffffff',
    //   'black':'#000000',
    // },
    extend: {
      fontFamily: {
        calibri: ["Calibri-Regular", "sans"],
        calibriBold: ["Calibri-Bold", "sans"],
        linux: ["Linux-Regular", "sans"],
        linuxSemibold: ["Linux-Semibold", "sans"],
        linuxBold: ["Linux-Bold", "sans"],
     
       
      },
    },
  },
  plugins: [],
}
