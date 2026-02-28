/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#b5306e',
          dark:    '#922558',
          mid:     '#c94080',
          light:   '#d96090',
          pale:    '#f5d0e4',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInToast: {
          '0%':   { opacity: '0', transform: 'translateX(-50%) translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.3s ease forwards',
        'toast-in':   'slideInToast 0.3s ease forwards',
      },
      boxShadow: {
        'pink-md': '0 4px 18px rgba(181,48,110,0.35)',
        'pink-lg': '0 8px 28px rgba(181,48,110,0.40)',
        'pink-xl': '0 6px 24px rgba(181,48,110,0.45)',
      },
    },
  },
  plugins: [],
}
