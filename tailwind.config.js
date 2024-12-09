// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Ensure these paths match your project
  theme: {
    extend: {
      colors: {
        background: '#F8F0DE',
        primary: '#522413',
        secondary: '#F4E7BB',
        accent: '#47C937',
        'dark-green': '#749A46',
        'light-green': '#A4CE5E',
      },
    },
  },
  plugins: [],
};
