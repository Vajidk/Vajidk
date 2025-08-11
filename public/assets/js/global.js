document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navWrap = document.querySelector(".nav-wrap");
    const body = document.querySelector("body");
  
    if (hamburger && navWrap) {
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        navWrap.classList.toggle("open");
        body.classList.toggle("noScroll");
      });
    }
});
  
var swiper = new Swiper(".slider-ourexperties", {
slidesPerView: 1,
spaceBetween: 0,
pagination: false,
lazy: true,
speed: 1000,
navigation: {
    nextEl: ".oe-slider-btn-next",
    prevEl: ".oe-slider-btn-prev",
},
breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1440: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    },
});

gsap.registerPlugin(ScrollTrigger);
const split = new SplitType(".wefocus p", { types: "words" });
gsap.timeline({
  scrollTrigger: {
    trigger: ".reliableEfficient",
    start: "top -10%",
    end: "+=50%",
    scrub: 0.5
  }
})
.set(split.words, { opacity: 0.5 })
.to(split.words, {
  opacity: 1,
  textShadow: "0 0 30px rgba(104, 115, 232, 1), 0 0 10px rgba(104, 115, 232, 1), 0 0 20px rgba(104, 115, 232, 1)",
  duration: 0.3,
  stagger: 0.2,
  ease: "power1.out"
});

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".scroll-video");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.5 // play when at least 50% of video is visible
    });

    videos.forEach(video => observer.observe(video));
});

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("show", window.scrollY > 100);
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add active to clicked tab
        tab.classList.add("active");
  
        // Hide all panels
        panels.forEach(panel => panel.classList.remove("active"));
        // Show the correct panel
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });
  });


var buttonHover = new Audio();
buttonHover.src = "assets/audio/hover_sound_effect.wav";