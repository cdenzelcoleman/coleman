module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '300px',
      'tablet': '768px',
      'desktop': '1500px'
    },
    extend: {
      fontFamily: {
        'clash-grotesk': ['Clash Grotesk Bold', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif']
      },
      fontSize: {
        '12xl': '20rem',
        '10xl': '12rem',
        '14xl': '25rem',
        '13xl': '21rem',
        '11xl': '18rem',
        '15xl': '16rem'
      },
      colors: {
        'font-color': 'var(--font-color)',
        'bg-color': 'var(--background-color)'
      }
    }
  },
  plugins: [],
}