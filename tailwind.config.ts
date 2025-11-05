import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gd-warm': '#FAF8F5',
        'gd-gray': '#6E6E6E',
        'gd-red': '#FF0009',
        'gd-blue': '#34369E',
      },
      fontFamily: {
        serif: ['var(--font-crimson)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'sunrise': 'sunrise 2.5s ease-out forwards',
        'draw-grey': 'drawGrey 20s ease-out forwards',
        'draw-g-inner': 'drawGinner 5s ease-in-out forwards',
        'draw-g-outer': 'drawGouter 6s ease-in-out forwards',
        'draw-d': 'drawD 6s ease-in-out forwards',
      },
      keyframes: {
        sunrise: {
          '0%': { opacity: '0', filter: 'brightness(0.8)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.1)' },
          '100%': { opacity: '1', filter: 'brightness(1)' },
        },
        drawGrey: {
          'to': { strokeDashoffset: '0' },
        },
        drawGinner: {
          'to': { strokeDashoffset: '0' },
        },
        drawGouter: {
          'to': { strokeDashoffset: '0' },
        },
        drawD: {
          'to': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config