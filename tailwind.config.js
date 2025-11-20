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
        '12xl': 'clamp(8rem, 20vw, 20rem)',
        '10xl': 'clamp(6rem, 12vw, 12rem)',
        '14xl': 'clamp(10rem, 25vw, 25rem)',
        '13xl': 'clamp(8rem, 21vw, 21rem)',
        '11xl': 'clamp(7rem, 18vw, 18rem)',
        '15xl': 'clamp(8rem, 16vw, 16rem)',
        'responsive-xl': 'clamp(1.25rem, 4vw, 2rem)',
        'responsive-2xl': 'clamp(1.5rem, 5vw, 2.5rem)',
        'responsive-3xl': 'clamp(1.875rem, 6vw, 3rem)',
        'responsive-4xl': 'clamp(2.25rem, 7vw, 3.5rem)',
        'responsive-5xl': 'clamp(3rem, 8vw, 4rem)',
        'responsive-6xl': 'clamp(3.75rem, 10vw, 5rem)',
        'responsive-7xl': 'clamp(4.5rem, 12vw, 6rem)',
        'responsive-8xl': 'clamp(6rem, 15vw, 8rem)',
        'responsive-9xl': 'clamp(8rem, 18vw, 10rem)'
      },
      colors: {
        'font-color': 'var(--font-color)',
        'bg-color': 'var(--background-color)'
      }
    }
  },
  plugins: [],
}