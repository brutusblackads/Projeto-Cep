/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        cola: {
          red: '#E41D2D',
          dark: '#B5121B',
          deeper: '#8F0D16',
          light: '#FFF1F2',
          blush: '#FFE4E6',
          white: '#FFFFFF',
          canvas: '#FFF9F7',
          text: '#3B1014',
          muted: '#80565A',
          line: '#F3C9CC',
        },
      },
    },
  },
  plugins: [],
}
