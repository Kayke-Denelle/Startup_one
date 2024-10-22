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
        azul:
        {
          5: '#323353',
          4: '#484a77',
          3: '#4d65b4',
          2: '#4d9be6',
          1: '#8fd3ff',
        },
      }
    },
  },
  plugins: [],
}

