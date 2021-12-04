// Cover
gsap.to("section.header-container", {
  scrollTrigger: {
    trigger: ".content",
    start: "top bottom",
    end: "=66%",
    markers: true,
    scrub: true,
  },
  yPercent: -50,
  ease: "none",
});
