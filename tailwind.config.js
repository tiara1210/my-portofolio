/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0f172a',
        'bg-darker': '#020617',
        'orange': '#ff7a00',
        'orange-light': '#ff9a3c',
        'red': '#ff4d4f',
        'red-light': '#ff7a7f',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

