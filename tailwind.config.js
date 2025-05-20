/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'zinc-950': '#0a0a0a',
        'zinc-900': '#18181b',
        'zinc-800': '#27272a',
        'zinc-700': '#3f3f46',
        'zinc-600': '#52525b',
        'zinc-500': '#71717a',
        'zinc-400': '#a1a1aa',
        emerald: {
          400: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};