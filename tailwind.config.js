/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f5f3',
          100: '#e9e7e2',
          200: '#d4d0c8',
          300: '#b5afa3',
          400: '#8f887a',
          500: '#6f6a5e',
          600: '#524e45',
          700: '#3a3730',
          800: '#26241f',
          900: '#191814',
          950: '#0f0e0b',
        },
        iris: {
          50: '#f6f3ff',
          100: '#ede8ff',
          200: '#dcd2ff',
          300: '#c4b1ff',
          400: '#a885f7',
          500: '#9457e8',
          600: '#8139d4',
          700: '#6d2cb4',
          800: '#5a2792',
          900: '#4b2477',
          950: '#2c1361',
        },
        cream: '#f7f5f1',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.9s ease forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};
