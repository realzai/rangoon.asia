import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f3eee2',
          light: '#f7f2e6',
          dark: '#e8e1cf',
        },
        ink: {
          DEFAULT: '#0e0d0b',
          soft: '#1a1814',
          faded: '#534b3c',
        },
      },
      fontFamily: {
        blackletter: ['var(--font-blackletter)', 'serif'],
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        smallcaps: ['var(--font-smallcaps)', 'serif'],
      },
      letterspacing: {
        widest: '0.4em',
      },
      maxWidth: {
        broadsheet: '78rem',
      },
    },
  },
  plugins: [],
}
export default config
