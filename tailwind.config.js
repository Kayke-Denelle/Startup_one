/** @type {import('tailwindcss').Config} */
module.exports =
{
  content: ["./src/**/*.{html,js}"],
  theme:
  {
    extend:
    {
      colors: 
      {
        cor:
        {
          4: '#040709',
          3: '#4cb4f6',
          2: '#78c1ef',
          1: '#3698d7',
          0: '#f6fafc',
        },
      }
    },
  },
  plugins: [],
}

