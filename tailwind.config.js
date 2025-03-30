module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'clash-grotesk-bold': ['Clash Grotesk Bold', 'sans-serif'],
          'clash-grotesk-regular': ['Clash Grotesk Regular', 'sans-serif'],
          'clash-grotesk-medium': ['Clash Grotesk Medium', 'sans-serif'],
          'clash-grotesk-light': ['Clash Grotesk Light', 'sans-serif'],
          'urbanist': ['Urbanist', 'sans-serif']
        },
        colors: {
          background: 'var(--background-color)',
          font: 'var(--font-color)'
        }
      },
    },
    plugins: [],
  }