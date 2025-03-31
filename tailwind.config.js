// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    corePlugins: {
      preflight: true, // Keep enabled for proper base styles
    },
    theme: {
      extend: {
        fontFamily: {
          'clash-grotesk-bold': ['Clash Grotesk Bold'],
          'clash-grotesk-regular': ['Clash Grotesk Regular'],
          'urbanist': ['Urbanist', 'sans-serif']
        },
        colors: {
          background: 'rgb(var(--background-color))',
          font: 'rgb(var(--font-color))'
        }
      },
    },
    plugins: [],
  }