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
        "text-subtitle": "var(--text-subtitle)",
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        "primary-gradient-color": "var(--primary-gradient)",
        'shades-secondary': 'var(--shades-secondary)',
        'shades-accent': 'var(--shades-accent)',  
       },
       backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
       },
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
       },
    },
  },
  plugins: [],

}

