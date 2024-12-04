/** @type {import('tailwindcss').Config} */
module.exports =
{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:
  {

    extend: 
    {
      fontFamily:
      {
        "title": ['Geist Mono', 'sans-serif']
      },
      screens:
      {
        'mp': '1200px',
      },
      colors: 
      {
        cor:
        {
          4: '#fcf5f4',
          3: '#e26c66',
          2: '#e38782',
          1: '#cb3c35',
          0: '#0a0403', 
        },
      }
    },
  },
  plugins: [],
} 