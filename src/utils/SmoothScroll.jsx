const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: true,
  wheelMultiplier: 1.2,
  touchMultiplier: 2,
  normalizeWheel: true,
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
