gsap.registerPlugin(ScrollTrigger);

function initHeaderTilt() {
  document.querySelector("main").addEventListener("mousemove", moveImages);
}

function moveImages(e) {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  // console.log(clientWidth, clientHeight);
  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;
  const leftImage = gsap.utils.toArray(".hg__left .hg__image");
  const rightImage = gsap.utils.toArray(".hg__right .hg__image");
  const perspective = document.querySelector(".product__img__perspective img");
  const front = document.querySelector(".product__img__FrontView img");
  const hgLeftL = document.querySelector(".hg__left .hg__image--l img");
  const hgLeftM = document.querySelector(".hg__left .hg__image--m img");
  const hgLeftS = document.querySelector(".hg__left .hg__image--s img");
  const hgRightL = document.querySelector(".hg__right .hg__image--l img");
  const hgRightM = document.querySelector(".hg__right .hg__image--m img");
  const hgRightS = document.querySelector(".hg__right .hg__image--s img");
  const header = document.querySelector("header");

  // console.log(target)
  // console.log(target)
  if (target !== header) {
    header.style.backgroundColor = "#F4F4F4";

    leftImage.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: "Power3.out",
      });
    });

    rightImage.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: "Power3.out",
      });
    });
  } else {
    if (xPos < 0) {
      perspective.src = "/img/SUUNTO-3-SLATE-GREY-COPPER-Perspective-View.png";
      front.src = "/img/SUUNTO-3-GRANITE-RED-Front-View.png";
      hgLeftL.src = "/img/suunto3_on-wrist_weekly_training_plan.jpg";
      hgLeftM.src = "/img/suunto3_social3.jpg";
      hgLeftS.src = "/img/suunto3_work_meeting5.jpg";
      hgRightL.src = "/img/suunto3_on-wrist_watchface_coffee3.jpg";
      hgRightM.src = "/img/suunto3_work_meeting4.jpg";
      hgRightS.src = "/img/suunto3_social9.jpg";
      header.style.backgroundColor = "#FBECEC";
    } else {
      perspective.src = "/img/SUUNTO-3-SLATE-GREY-Perspective-View.png";
      front.src = "/img/SUUNTO-3-MOSS-GREY-Front-View.png";
      hgLeftL.src = "/img/suunto3_swim4_4x5.jpg";
      hgLeftM.src = "/img/suunto3_commute5.jpg";
      hgLeftS.src = "/img/suunto3_commute2.jpg";
      hgRightL.src = "/img/suunto3_run5.jpg";
      hgRightM.src = "/img/suunto3_run3.jpg";
      hgRightS.src = "/img/suunto3_run4.jpg";
      header.style.backgroundColor = "#F4F4F4";
    }

    const modifier = (index) => index * 1.2 + 0.5;

    //move 3 left images
    //get 0 0 in the middle screen
    leftImage.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: xPos * 20 * modifier(index),
        y: yPos * 30 * modifier(index),
        rotationX: yPos * 10,
        rotationY: xPos * 40,
        ease: "Power3.out",
      });
    });

    rightImage.forEach((image, index) => {
      gsap.to(image, {
        duration: 1.2,
        x: xPos * 20 * modifier(index),
        y: -yPos * 30 * modifier(index),
        rotationX: yPos * 10,
        rotationY: xPos * 40,
        ease: "Power3.out",
      });
    });
  }
}

function init() {
  // start here
  initHeaderTilt();
}

window.addEventListener("load", function () {
  init();
});

const slides = document.querySelectorAll(".swiper-container01 .swiper-slide");

const sliderSelector01 = ".swiper-container01";
const options = {
  // Optional parameters
  direction: "horizontal",
  init: false,
  loop: true,
  speed: 900,
  grabCursor: true,
  parallax: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slides[this.realIndex].classList.add("active");
      /* do something */
      // console.log(this.activeIndex)
    },
  },
};
const mySwiper = new Swiper(sliderSelector01, options);

mySwiper.init();

const activeTitle = document.getElementById("activeTitle");
const sliderContainer02 = document.querySelector(".swiper-container02");
const sliderSelector02 = ".swiper-container02";
const options2 = {
  init: false,
  loop: true,
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,

  centeredSlides: true,
  effect: "coverflow", // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    stretch: 10, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows: true, // Enables slides shadows
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: null,
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // or 'auto'
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
  // Events
  on: {
    transitionStart: function (params) {
      console.log(this.realIndex);
      if (this.realIndex < 3) {
        activeTitle.textContent = "為您量身訂做的【智能訓練導引】";
      } else {
        activeTitle.textContent = "It Works!!:)";
      }
    },
    imagesReady: function () {
      this.el.classList.remove("loading");
    },
  },
};

const mySwiper2 = new Swiper(sliderSelector02, options2);

mySwiper2.init();

const app = Vue.createApp({
  data() {
    return {
      icons: [
        {
          name: "iconfont icon_activity_tracker",
          feature: "全天候活動監測",
          img: "/img/features_activity_tracker.png",
        },
        {
          name: "iconfont icon_adaptive_training_guidance",
          feature: "智能導引訓練",
          img: "/img/features_adaptive_training_guidance.png",
        },
        {
          name: "iconfont icon_fitness_level",
          feature: "體適能水準",
          img: "/img/features_fitness_level.png",
        },
        {
          name: "iconfont icon_sleep",
          feature: "睡眠品質監測",
          img: "/img/features_sleep.png",
        },
        {
          name: "iconfont icon_wireless_mobile_connection",
          feature: "連接手機GPS",
          img: "/img/features_wireless_mobile_connection.png",
        },
        {
          name: "iconfont icon_water_resistant_30m",
          feature: "水下30米防水等級",
          img: "/img/features_water_resistant_30m.png",
        },
        {
          name: "iconfont icon_wrist_based_heart_rate",
          feature: "腕式光學心率",
          img: "/img/features_wrist_based_heart_rate.png",
        },
        {
          name: "iconfont icon_stress",
          feature: "疲勞壓力與恢復狀態",
          img: "/img/features_stress.png",
        },
      ],
      original: "/img/SUUNTO-3-SLATE-GREY-COPPER-Front-View.png",
      imgSRC: "/img/SUUNTO-3-SLATE-GREY-COPPER-Front-View.png",
    };
  },
  methods: {
    changeFeature(img) {
      this.imgSRC = img;
    },
    toOriginal() {
      this.imgSRC = this.original;
    },
  },
});

app.mount("#features");
