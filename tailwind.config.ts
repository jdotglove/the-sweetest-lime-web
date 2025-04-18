import type { Config } from "tailwindcss";

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#A4CE5E',
        secondary: '#749A46',
        accent: '#0C8500',
        'dark-green': '#749A46',
        'light-green': '#A4CE5E',
      },
      animation: {
        'sway-slow': 'sway-slow 8s ease-in-out infinite',
      },
      keyframes: {
        'sway-slow': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
