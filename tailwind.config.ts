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
        background: '#F8F0DE',
        primary: '#522413',
        secondary: '#F4E7BB',
        accent: '#0C8500',
        'dark-green': '#749A46',
        'light-green': '#A4CE5E',
      },
    },
  },
  plugins: [],
} satisfies Config
