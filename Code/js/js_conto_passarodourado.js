// Cover
gsap.to("section.cover-container", {
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

// Bloco 3 vídeo
var video = document.getElementById("video");
var video_duration;

//------------------------------------------------------ Adicionar blocos consoante tempo do vídeo
function tempo() {
  // Quando tiver os dados do vídeo, corre as funções
  video.onloadedmetadata = function () {
    // Duração do vídeo
    video_duration = Math.round(video.duration);

    // Função que cria novo bloco (section)
    function addSection(seg) {
      var newSection = document.createElement("section");
      newSection.setAttribute("id", "bloco" + seg);
      newSection.setAttribute("class", "blocos");

      var scrollContainer = document.getElementById("scroll-container");
      scrollContainer.appendChild(newSection);
    }

    // Criar elementos HTML (x segundos = x blocos(section))
    for (let i = 0; i < video_duration; i++) {
      addSection(i);
    }

    // Chamar scrollTrigger
    scrollTrigger();
  };
}

//------------------------------------------------------ ScrollTrigger
function scrollTrigger() {
  // -------------------------- Video
  video.pause();
  video.currentTime = 0;

  // Alterar tempo do vídeo com scroll
  // Cada bloco (section) representa um segundo
  let sections = gsap.utils.toArray(".blocos");

  ScrollTrigger.create({
    trigger: "#videobox",
    start: "top top",
    end: "bottom bottom",
    //markers: true,
    pin: "#background-container",
  });

  ScrollTrigger.create({
    trigger: "#videobox",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    pin: "",
  });

  sections.forEach((step, i) => {
    gsap.fromTo(
      video,
      { currentTime: i },
      {
        scrollTrigger: {
          trigger: step,
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "start pause resume pause",
        },
        currentTime: i + 1,
        duration: 2,
        ease: "none",
      }
    );
  });
}

// Chamar função tempo
tempo();
