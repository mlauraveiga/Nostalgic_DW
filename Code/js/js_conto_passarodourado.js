gsap.registerPlugin(ScrollTrigger);

// Cover
gsap.to("section.cover-container", {
  scrollTrigger: {
    trigger: ".content",
    start: "top bottom",
    end: "=66%",
    // markers: true,
    scrub: true,
  },
  yPercent: -50,
  ease: "none",
});
/*-----------------------------------*/
/*--------------BLOCK 2--------------*/
/*-----------------------------------*/

ScrollTrigger.create({
  trigger: ".block2_container",
  start: "top 15%",
  end: "bottom bottom",
  scrub: true,
  pin: true,
  //markers: true,
});

gsap.to("#jexp1", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".block2_container",
    start: "top 15%",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    markers: true,
  },
});

gsap.to("#jexp2", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".block2_container",
    start: "top 15%",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    //markers: true,
  },
});
/*-----------------------------------*/
/*-----------------------------------*/
/*-----------------------------------*/

/*-----------------------------------*/
/*--------------BLOCK 4--------------*/
/*-----------------------------------*/

var image = document.getElementById("img4");

gsap.to(".div_img4", {
  x: image.width,
  duration: 8,
  scrollTrigger: {
    trigger: ".block4_container",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    // markers: true,
    pin: true,
  },
});

/*-----------------------------------*/
/*--------------BLOCK 5--------------*/
/*-----------------------------------*/

ScrollTrigger.create({
  trigger: ".block5_container",
  start: "top 10%",
  end: "bottom bottom",
  scrub: true,
  pin: true,
  //markers: true,
});

gsap.to("#exp1", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".block5_container",
    start: "top 20%",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    //markers: true,
  },
});

gsap.to("#exp2", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".block5_container",
    start: "top 20%",
    end: "bottom bottom",
    scrub: true,
    pin: true,
    //markers: true,
  },
});
/*-----------------------------------*/
/*-----------------------------------*/
/*-----------------------------------*/

/*-----------------------------------*/
/*--------------BLOCK 8--------------*/
/*-----------------------------------*/

var image = document.getElementById("img8");

gsap.to(".div_img8", {
  x: image.width,
  duration: 8,
  scrollTrigger: {
    trigger: ".block8_container",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    //markers: true,
    pin: true,
  },
});

/*--------------------------------------
-----------------BLOCO 11---------------
---------------------------------------
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".block11_container",
      start: "top 50%",
      end: "bottom",
      scrub: true,
      markers: true,
      pin: true,
    },
  })
  .from("#img_saddle", { y: innerHeight * -1.5 });**/
