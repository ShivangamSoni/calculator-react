/** @type {import('tailwindcss').Config} */
import Themer from 'tailwindcss-themer';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  darkMode: 'class',
  plugins: [
    Themer({
      defaultTheme: {
        extend: {
          fontFamily: {
            default: "'League Spartan', sans-serif",
          },
          colors: {
            main: 'hsl(222, 26%, 31%)',
            keypad: 'hsl(223, 31%, 20%)',
            display: 'hsl(224, 36%, 15%)',
            key: {
              primary: 'hsl(30, 25%, 89%)',
              primaryShadow: 'hsl(28, 16%, 65%)',
              secondary: 'hsl(225, 21%, 49%)',
              secondaryShadow: 'hsl(224, 28%, 35%)',
              accent: 'hsl(6, 63%, 50%)',
              accentShadow: 'hsl(6, 70%, 34%)',
            },
            text: {
              body: 'hsl(0, 100%, 100%)',
              primary: 'hsl(221, 14%, 31%)',
              secondary: 'hsl(0, 100%, 100%)',
            },
          },
        },
      },
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              main: 'hsl(0, 0%, 90%)',
              keypad: 'hsl(0, 5%, 81%)',
              display: 'hsl(0, 0%, 93%)',
              key: {
                primary: 'hsl(45, 7%, 89%)',
                primaryShadow: 'hsl(35, 11%, 61%)',
                secondary: 'hsl(185, 42%, 37%)',
                secondaryShadow: 'hsl(185, 58%, 25%)',
                accent: 'hsl(25, 98%, 40%)',
                accentShadow: 'hsl(25, 99%, 27%)',
              },
              text: {
                body: 'hsl(60, 10%, 19%)',
                primary: 'hsl(60, 10%, 19%)',
                secondary: 'hsl(0, 100%, 100%)',
              },
            },
          },
        },
        {
          name: 'pink',
          extend: {
            colors: {
              main: 'hsl(268, 75%, 9%)',
              keypad: 'hsl(268, 71%, 12%)',
              display: 'hsl(268, 71%, 12%)',
              key: {
                primary: 'hsl(268, 47%, 21%)',
                primaryShadow: 'hsl(290, 70%, 36%)',
                secondary: 'hsl(281, 89%, 26%)',
                secondaryShadow: 'hsl(285, 91%, 52%)',
                accent: 'hsl(176, 100%, 44%)',
                accentShadow: 'hsl(177, 92%, 70%)',
              },
              text: {
                body: 'hsl(52, 100%, 62%)',
                primary: 'hsl(52, 100%, 62%)',
                secondary: 'hsl(198, 20%, 13%)',
              },
            },
          },
        },
      ],
    }),
  ],
};
