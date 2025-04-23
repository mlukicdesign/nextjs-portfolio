const { theme } = require('@sanity/demo/tailwind')
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './intro-template/**/*.{js,ts,jsx,tsx}',
    ],
    extract,
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize,
    // Overriding fontFamily to use @next/font loaded families
    extend: {
      fontFamily: {
        arbeit: ['Arbeit', 'sans-serif'],
      },
      fontSize: {
        // Scales between 1rem (16px) and 4rem (64px) based on viewport width
      },
      colors: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        void: '#010C13',
        'neutral-grey': '#F0F9FF',
        'ion-200': '#a4e3fe',
        'ion-400': '#1ABCFE',
        'ion-500': '#0084be',
        'ion-950': '#06304B',
        'ion-900': '#094D7',
        'ion-800': '#035C89',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    fluid,
  ],
}
