/** @type {import('tailwindcss').Config} */
import Themer from 'tailwindcss-themer';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    Themer({
      defaultTheme: {},
      themes: [
        {
          name: 'light',
        },
        {
          name: 'pink',
        },
      ],
    }),
  ],
};
