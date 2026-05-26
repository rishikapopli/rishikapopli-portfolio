/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          50:  '#fff5f8',
          100: '#fce8f0',
          200: '#f9d8e3',
          300: '#f3b8cc',
          400: '#ed93b1',
          500: '#e8799a',
          600: '#d4537e',
          700: '#c45778',
          800: '#9e3a5a',
          900: '#7a2843',
        },
        lavender: {
          50:  '#f5f0fd',
          100: '#ede0f5',
          200: '#dccfef',
          300: '#c9b8e8',
          400: '#b09bd8',
          500: '#9b82cc',
          600: '#8568bb',
          700: '#6f51a3',
          800: '#5a3e85',
          900: '#3e2868',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fff5f8 0%, #f5edf8 50%, #fce8f0 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))',
        'section-gradient': 'linear-gradient(180deg, #fdf7f9 0%, #f5edf8 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(200,100,140,0.12)',
        'glass-hover': '0 20px 60px rgba(180,80,120,0.22)',
        'pink': '0 4px 20px rgba(196,87,120,0.35)',
        'pink-hover': '0 8px 30px rgba(196,87,120,0.5)',
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        morph: {
          '0%,100%': { borderRadius: '42% 58% 60% 40% / 50% 44% 56% 50%' },
          '33%':     { borderRadius: '55% 45% 42% 58% / 44% 60% 40% 56%' },
          '66%':     { borderRadius: '47% 53% 56% 44% / 60% 40% 60% 40%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
