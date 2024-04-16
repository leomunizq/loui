/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary: {
          DEFAULT: '#FF9C01',
          100: '#FF9001',
          200: '#FF8E01'
        },
        black: {
          DEFAULT: '#000',
          100: '#1E1E2D',
          200: '#232533'
        },
        gray: {
          100: '#CDCDE0'
        }
      },
      fontFamily: {
        ithin: ['Inter_100Thin', 'sans-serif'],
        iextralight: ['Inter_200ExtraLight', 'sans-serif'],
        ilight: ['Inter_300Light', 'sans-serif'],
        iregular: ['Inter_400Regular', 'sans-serif'],
        imedium: ['Inter_500Medium', 'sans-serif'],
        isemibold: ['Inter_600SemiBold', 'sans-serif'],
        ibold: ['Inter_700Bold', 'sans-serif'],
        iextrabold: ['Inter_800ExtraBold', 'sans-serif'],
        iblack: ['Inter_900Black', 'sans-serif']
      }
    }
  },
  plugins: []
}
