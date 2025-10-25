/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#bb86fc',
        'brand-primary-dark': '#9965d4',
        'brand-bg': '#0a0a0f',
        'brand-text': '#f5f5f5',
        'brand-text-secondary': '#a7a9a9',
        'brand-surface': '#1e1e1e',
        'brand-border': '#3a3a3a',
      },
      animation: {
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
