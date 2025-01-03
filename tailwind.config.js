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
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      // sans: 'var(--font-sans)',
    },
    extend: {
      colors: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    fluid,
  ],
}
