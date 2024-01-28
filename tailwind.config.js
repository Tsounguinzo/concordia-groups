/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Work Sans','ui-sans-serif', 'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji']
    },
    extend: {
      backgroundColor: {
        'primary': 'gray-950',
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
