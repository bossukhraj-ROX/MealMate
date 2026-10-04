/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F3',
        'forest': {
          DEFAULT: '#1B3A2F',
          50: '#EAF2ED',
          100: '#C8DAD0',
          200: '#91B5A0',
          300: '#5C8A72',
          400: '#3D6B52',
          500: '#2D5A43',
          600: '#1B3A2F',
          700: '#152E25',
          800: '#0F2218',
          900: '#0A160F',
        },
        'lime-accent': {
          DEFAULT: '#C5D86D',
          light: '#E2EEB8',
          dark: '#A8C24A',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
