/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F1',
        sage: {
          DEFAULT: '#E9EFE5',
          50: '#F2F6F0',
          100: '#E9EFE5',
          200: '#D9E3D3',
          300: '#C5D3BC',
        },
        'forest': {
          DEFAULT: '#173F32',
          50: '#EAF2ED',
          100: '#C8DAD0',
          200: '#91B5A0',
          300: '#5C8A72',
          400: '#3D6B52',
          500: '#2D5A43',
          600: '#173F32',
          700: '#122F25',
          800: '#0F2218',
          900: '#0A160F',
        },
        charcoal: {
          DEFAULT: '#202520',
          light: '#363936',
        },
        'grey-green': {
          DEFAULT: '#68736A',
          light: '#8A938B',
          dark: '#525A53',
        },
        'border-warm': '#E3E5DC',
        'lime-accent': {
          DEFAULT: '#A8C75A',
          light: '#C9DC93',
          dark: '#8FAE3E',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
