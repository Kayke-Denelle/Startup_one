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
          4: '#ffffff',
          3: '#203562',
          2: '#1e579c',
          1: '#0098db',
          0: '#201533', 
        },
      }
    },
  },
  plugins: [],
} 