/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4A73',
        secondary: {
          800: '#FFFFFF',
          900: '#F1F1F1',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')] 
}