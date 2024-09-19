/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  
  theme: {
    extend: {
      animation:{
      "loop-scroll": "loop-scroll 30s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from: {transform:" translateX(0)"},
          to: {transform:" translateX(-100%)"},

        },
      },
      colors:{
        primary: '#262641',
        accent: '#5D5FEF',
        highlight: '#FAF6FF',
        background: '#F8FAFC',
        stroke: '#E2E3E6',
        icons: '#98A0AB',
        white: '#FFFFFF',

      }
    },
    maxWidth: {
      'custom': '1030px', 
    },
    fontFamily: {
      clash: ['ClashDisplay', 'sans-serif'],
      epilogue: ['Epilogue'],
      Manbold: ['Manbold'],
      Manregular: ['Manregular']
    },
  },
  plugins: [],
}

