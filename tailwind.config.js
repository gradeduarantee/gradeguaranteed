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
        navy: {
          50:  '#f0f4fa',
          100: '#dce6f4',
          200: '#b8cce9',
          300: '#8aadd9',
          400: '#5c8dc9',
          500: '#3870b8',
          600: '#2657a0',
          700: '#1d4282',
          800: '#132d60',
          900: '#0D2545',
          950: '#081529',
        },
        gold: {
          50:  '#fdf9ed',
          100: '#faf0d0',
          200: '#f5dfa3',
          300: '#efc96e',
          400: '#e8b441',
          500: '#C9A84C',
          600: '#b8901f',
          700: '#9a701a',
          800: '#7d581b',
          900: '#68491b',
          950: '#3d2909',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D2545 0%, #1a3d6e 60%, #0f3060 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #e8c96a 50%, #C9A84C 100%)',
        'navy-gold': 'linear-gradient(135deg, #0D2545 0%, #132d60 100%)',
      },
    },
  },
  plugins: [],
}
