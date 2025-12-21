/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens (match PHP site intent):
        // - Light mode: green/emerald primary
        // - Dark mode: optional, can still use blue accents where needed
        brand: {
          emerald: '#10b981',
          emeraldDark: '#059669',
          emeraldLight: '#34d399',
          blue: '#3b82f6',
          blueDark: '#1d4ed8',
          purple: '#8b5cf6',
        },
      },
    },
  },
  plugins: [],
}

