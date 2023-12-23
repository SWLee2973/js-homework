const swiper = new Swiper('.swiper', {
  loop: true,
  effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 1000,
    reverseDirection: true,
  },
  parallax: true,
  speed: 2000,
  mousewheel: {
    forceToAxis: true,
  }
});



