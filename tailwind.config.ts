import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // bookmark
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        fadedSteel: 'hsl(229, 8%, 60%)',
        shadowyNavy: 'hsl(229, 31%, 21%)',
        // shortly
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        // memory-game
        darkBlue: 'hsl(205, 45%, 15%)',
      },
      fontSize: {
        xxxs: '0.5rem',
        xxs: '0.625rem',
      },
      letterSpacing: {
        doubleWide: '.2em',
        tripleWide: '.3em',
        quadrupleWide: '.4em',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient':
          'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
