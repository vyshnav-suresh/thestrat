/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        customRed: '#FF0000', // Example: Define a custom color named 'customRed'
        customBlue: '#0000FF', // Example: Define a custom color named 'customBlue'
        // You can add as many custom colors as needed
        main_dark:'#030F30',
        secondary_dark:'#2C7873',
      },
      fontFamily: {
        'NunitoSans-Light': ['NunitoSans-Light'],
        'NunitoSans-Bold': ['NunitoSans-Bold'],
        'NunitoSans-Regular': ['NunitoSans-Regular'],
        'NunitoSans-Medium': ['NunitoSans-Medium'],
      },
    },
  },
  plugins: [],
}
