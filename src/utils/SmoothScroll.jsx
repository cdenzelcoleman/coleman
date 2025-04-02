import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.2,  // Added
      touchMultiplier: 2,    // Added
      normalizeWheel: true   // Added
    })

    lenis.on('scroll', ScrollTrigger.update)
    
    // GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll