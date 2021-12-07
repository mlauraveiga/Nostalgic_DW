gsap.to("#lobo_fala1", {
  scrollTrigger: {
    trigger: "#lobo_fala1",
    start: "top 45%",
    /*  markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 0,
  ease: "back",
});
gsap.to("#capuchinho_fala1", {
  scrollTrigger: {
    trigger: "#lobo_fala1",
    start: "top 40%",
    /*   markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 100,
  ease: "back",
});

gsap.to("#capuchinho_fala1", {
  scrollTrigger: {
    trigger: "#capuchinho_fala1",
    start: "top 25%",
    /*  markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 0,
  ease: "back",
});

gsap.to("#lobo_fala2", {
  scrollTrigger: {
    trigger: "#capuchinho_fala1",
    start: "top 30%",
    /*  markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 100,
  ease: "back",
});

gsap.to("#lobo_fala2", {
  scrollTrigger: {
    trigger: "#lobo_fala2",
    start: "top 10%",
    /* markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 0,
  ease: "back",
});

gsap.to("#capuchinho_fala2", {
  scrollTrigger: {
    trigger: "#lobo_fala2",
    start: "top 10%",
    /*  markers:true,*/
    scrub: 1,
  },
  duration: 1.5,
  opacity: 100,
  ease: "back",
});

gsap.to(".bloco1_container", {
  scrollTrigger: {
    trigger: ".bloco1_container",
    start: "top 30%",
    /*  markers:true,*/
    pin: true,
    scrub: 1,
  },
});
