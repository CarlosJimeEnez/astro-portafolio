/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        "primary-gradient": 'var(--primaryGradient)'
       },
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
       }
    },
  },
  plugins: [],

}

