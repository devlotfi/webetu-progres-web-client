const { nextui, darkLayout } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            secondary: {
              50: '#d9f9ff',
              100: '#abe7ff',
              200: '#7bd6ff',
              300: '#49c5ff',
              400: '#1ab4fe',
              500: '#019be5',
              600: '#0078b3',
              700: '#005681',
              800: '#003550',
              900: '#001320',
              DEFAULT: '#01a8f8',
            },
            primary: {
              50: '#dcfffa',
              100: '#afffef',
              200: '#80fee5',
              300: '#52feda',
              400: '#2dfcd0',
              500: '#1ee3b6',
              600: '#0fb18e',
              700: '#017f65',
              800: '#004c3d',
              900: '#001b14',
              DEFAULT: '#019577',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            content1: '#313134',
            background: {
              DEFAULT: '#313134',
            },
            secondary: {
              50: '#d9f9ff',
              100: '#abe7ff',
              200: '#7bd6ff',
              300: '#49c5ff',
              400: '#1ab4fe',
              500: '#019be5',
              600: '#0078b3',
              700: '#005681',
              800: '#003550',
              900: '#001320',
              DEFAULT: '#01a8f8',
            },
            primary: {
              50: '#dcfffa',
              100: '#afffef',
              200: '#80fee5',
              300: '#52feda',
              400: '#2dfcd0',
              500: '#1ee3b6',
              600: '#0fb18e',
              700: '#017f65',
              800: '#004c3d',
              900: '#001b14',
              DEFAULT: '#019577',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
};
