gsap.registerPlugin(ScrollTrigger)

function initHeaderTilt() {
    document.querySelector('main').addEventListener('mousemove', moveImages)
}

function moveImages(e) {
    const { offsetX, offsetY, target } = e
    const { clientWidth, clientHeight } = target

    // console.log(clientWidth, clientHeight);
    const xPos = offsetX / clientWidth - 0.5
    const yPos = offsetY / clientHeight - 0.5
    const leftImage = gsap.utils.toArray('.hg__left .hg__image')
    const rightImage = gsap.utils.toArray('.hg__right .hg__image')
    const perspective = document.querySelector('.product__img__perspective img')
    const front = document.querySelector('.product__img__FrontView img')
    const hgLeftL = document.querySelector('.hg__left .hg__image--l img')
    const hgLeftM = document.querySelector('.hg__left .hg__image--m img')
    const hgLeftS = document.querySelector('.hg__left .hg__image--s img')
    const hgRightL = document.querySelector('.hg__right .hg__image--l img')
    const hgRightM = document.querySelector('.hg__right .hg__image--m img')
    const hgRightS = document.querySelector('.hg__right .hg__image--s img')
    const header = document.querySelector('header')

    // console.log(target)
    // console.log(target)
    if (target !== header) {
        header.style.backgroundColor = '#F4F4F4'

        leftImage.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                ease: 'Power3.out'
            })
        })

        rightImage.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                ease: 'Power3.out'
            })
        })
    } else {
        if (xPos < 0) {
            perspective.src = 'img/SUUNTO-3-SLATE-GREY-COPPER-Perspective-View.png'
            front.src = 'img/SUUNTO-3-GRANITE-RED-Front-View.png'
            hgLeftL.src = 'img/suunto3_on-wrist_weekly_training_plan.jpg'
            hgLeftM.src = 'img/suunto3_social3.jpg'
            hgLeftS.src = 'img/suunto3_work_meeting5.jpg'
            hgRightL.src = 'img/suunto3_on-wrist_watchface_coffee3.jpg'
            hgRightM.src = 'img/suunto3_work_meeting4.jpg'
            hgRightS.src = 'img/suunto3_social9.jpg'
            header.style.backgroundColor = '#FBECEC'
        } else {
            perspective.src = 'img/SUUNTO-3-SLATE-GREY-Perspective-View.png'
            front.src = 'img/SUUNTO-3-MOSS-GREY-Front-View.png'
            hgLeftL.src = 'img/suunto3_swim4_4x5.jpg'
            hgLeftM.src = 'img/suunto3_commute5.jpg'
            hgLeftS.src = 'img/suunto3_commute2.jpg'
            hgRightL.src = 'img/suunto3_run5.jpg'
            hgRightM.src = 'img/suunto3_run3.jpg'
            hgRightS.src = 'img/suunto3_run4.jpg'
            header.style.backgroundColor = '#F4F4F4'
        }

        const modifier = index => index * 1.2 + 0.5

        //move 3 left images
        //get 0 0 in the middle screen
        leftImage.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: xPos * 20 * modifier(index),
                y: yPos * 30 * modifier(index),
                rotationX: yPos * 10,
                rotationY: xPos * 40,
                ease: 'Power3.out'
            })
        })

        rightImage.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: xPos * 20 * modifier(index),
                y: -yPos * 30 * modifier(index),
                rotationX: yPos * 10,
                rotationY: xPos * 40,
                ease: 'Power3.out'
            })
        })
    }
}

function init() {
    // start here
    initHeaderTilt()
}

window.addEventListener('load', function () {
    init()
})

const slides = document.querySelectorAll('.swiper-container01 .swiper-slide')

const sliderSelector01 = '.swiper-container01'
const options = {
    // Optional parameters
    direction: 'horizontal',
    init: false,
    loop: true,
    speed: 900,
    grabCursor: true,
    parallax: true,
    autoplay: {
        delay: 5000
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
        slideChangeTransitionStart: function () {
            slides.forEach(slide => {
                slide.classList.remove('active')
            })
            slides[this.realIndex].classList.add('active')
            /* do something */
            // console.log(this.activeIndex)
        }
    }
}
const mySwiper = new Swiper(sliderSelector01, options)

mySwiper.init()

const activeTitle = document.getElementById('activeTitle')
const GotoSportsNeeds = document.getElementById('sports-needs')
const sliderContainer02 = document.querySelector('.swiper-container02')
const sliderSelector02 = '.swiper-container02'
const options2 = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000
    },
    centeredSlides: true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 10, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    pagination: {
        el: null,
        clickable: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // or 'auto'
            spaceBetween: 50
        }
    },
    // Events
    on: {
        transitionStart: function (params) {
            // console.log(this.realIndex);
            if (this.realIndex < 3) {
                activeTitle.textContent = '為您量身訂做的【智能訓練導引】'
            } else {
                activeTitle.textContent = '滿足您全方位的運動需求'
            }
        },
        imagesReady: function () {
            this.el.classList.remove('loading')
        }
    }
}

const mySwiper2 = new Swiper(sliderSelector02, options2)

mySwiper2.init()
GotoSportsNeeds.addEventListener('click', () => {
    // console.log('goto mySwiper2')
    mySwiper2.slideTo('5', 1000, false)
})
const app = Vue.createApp({
    data() {
        return {
            icons: [
                {
                    name: 'iconfont icon_activity_tracker',
                    feature: '全天候活動監測',
                    img: 'img/features_activity_tracker.png'
                },
                {
                    name: 'iconfont icon_adaptive_training_guidance',
                    feature: '智能導引訓練',
                    img: 'img/features_adaptive_training_guidance.png'
                },
                {
                    name: 'iconfont icon_fitness_level',
                    feature: '體適能水準',
                    img: 'img/features_fitness_level.png'
                },
                {
                    name: 'iconfont icon_stress',
                    feature: '疲勞壓力與恢復狀態',
                    img: 'img/features_stress.png'
                },
                {
                    name: 'iconfont icon_sleep',
                    feature: '睡眠品質監測',
                    img: 'img/features_sleep.png'
                },
                {
                    name: 'iconfont icon_wireless_mobile_connection',
                    feature: '連接手機GPS',
                    img: 'img/features_wireless_mobile_connection.png'
                },
                {
                    name: 'iconfont icon_wrist_based_heart_rate',
                    feature: '腕式光學心率',
                    img: 'img/features_wrist_based_heart_rate.png'
                },
                {
                    name: 'iconfont icon_water_resistant_30m',
                    feature: '水下30米防水等級',
                    img: 'img/features_water_resistant_30m.png'
                }
            ],
            original: 'img/SUUNTO-3-SLATE-GREY-COPPER-Front-View.png',
            imgSRC: 'img/SUUNTO-3-SLATE-GREY-COPPER-Front-View.png'
        }
    },
    methods: {
        initFeatures() {
            const features = gsap.utils.toArray('.flexContainer--feature .feature')
            const featuresReverse = gsap.utils.toArray('.flexContainer--feature .feature').reverse()

            function featuresAnimation(direction) {
                console.log(direction)
                const scrollingDown = direction === 1
                const buttons = scrollingDown ? features : featuresReverse
                return gsap.to(buttons, {
                    duration: 0.3,
                    stagger: 0.05,
                    autoAlpha: () => (scrollingDown ? 1 : 0),
                    y: () => (scrollingDown ? 0 : 80),
                    ease: 'Power4.out'
                })
            }
            ScrollTrigger.create({
                trigger: '#features',
                start: '100px 200px',
                end: '10% 300px',
                onEnter: ({ direction }) => featuresAnimation(direction),
                onLeaveBack: ({ direction }) => featuresAnimation(direction),
                markers: false
            })
        },

        changeFeature(img) {
            this.imgSRC = img
        },
        toOriginal() {
            this.imgSRC = this.original
        }
    },
    mounted() {
        console.log(`mounted !`)
        this.initFeatures()
    }
})

app.mount('#features')

$(function () {
    $('.venobox').venobox()
    /**stiky nav */
    const nav = document.querySelector('#nav')
    const suuntoApp = document.querySelector('#app')
    const topofNav = nav.offsetTop
    function fixNav() {
        if (window.scrollY >= topofNav) {
            suuntoApp.style.paddingTop = nav.offsetHeight + 'px'
            suuntoApp.classList.add('fixed-nav')
        } else {
            suuntoApp.style.paddingTop = 0
            suuntoApp.classList.remove('fixed-nav')
        }
    }

    window.addEventListener('scroll', fixNav)

    /**end of sticky nav */

    /**  smooth scroll  **/
    $("nav ul li a[href^='#']").on('click', function (e) {
        // prevent default anchor click behavior
        e.preventDefault()

        // store hash
        var hash = this.hash

        // animate
        $('html, body').animate(
            {
                scrollTop: $(this.hash).offset().top - 50
            },
            700,
            function () {
                // when done, add hash to url
                // (default click behaviour)
                window.location.hash = hash
            }
        )
    })

    /**scrollspy */
    $('#nav').scrollspy({ offset: -75 })

    var windowWidth = $(window).width()
    var windowHeight = $(window).height()

    //WOW
    new WOW().init()

    var controller = new ScrollMagic.Controller({
        addIndicators: false
    })

    const cornerContainers = document.querySelectorAll('.cornerContainer')
    cornerContainers.forEach(function (item) {
        console.log('this', item.getAttribute('id'))
        const cornerID = '#' + item.getAttribute('id')
        var parallaxTl = gsap.timeline()
        parallaxTl.from(`${cornerID} .corner .venobox span`, 0.4, { scale: 1.2, y: '80%', opacity: 0, ease: Power0.easeNone }, 1).from(`${cornerID} .corner img`, 2, { y: '-50%', ease: Power0.easeNone }, 0)

        var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: cornerID,
            triggerHook: 1,
            offset: '-50%',
            duration: '100%'
        })
            .setTween(parallaxTl)
            // .addIndicators({
            //   name: cornerID,
            //   indent: 0,
            // })
            .addTo(controller)
    })

    $('#product-common-1 .slide').each(function () {
        var featuresId = '#' + $(this).attr('id')
        var featuresFirstId = '#' + $('#product-common-1 #slideContainer>.slide:first-child()').attr('id')
        var features = gsap.timeline({
            repeat: 0
        })

        if ($(window).width() >= 1024) {
            features.to('.slide .slide-right', 2, { display: 'none', opacity: 0 }, 0).to(`${featuresId} .slide-right`, 1, { display: 'block', opacity: 1 }, 1)

            var featuresScene = new ScrollMagic.Scene({
                triggerHook: 0.5,
                triggerElement: featuresId,
                offset: -$(featuresId).height() / 4,
                duration: $(featuresId).height() / 4
            })
                .setTween(features)
                // .addIndicators({
                //   indent: 0,
                // })
                .addTo(controller)
        } else {
            features.to('.slide .slide-right, .slide .slide-left', 1, { display: 'none', opacity: 0, ease: 'Power4.inOut' }, 1).to(`${featuresId} .slide-right, ${featuresId} .slide-left`, 1, { display: 'block', opacity: 1, ease: 'Power4.inOut' }, 1)

            var featuresScene = new ScrollMagic.Scene({
                triggerElement: featuresId,
                offset: -$(featuresId).height() / 3,
                duration: $(featuresId).height()
            })
                .setTween(features)
                // .addIndicators({
                //   indent: 40,
                // })
                .addTo(controller)
        }
    })

    var leaveFeaturesInfo = gsap.timeline({
        repeat: 0
    })

    if (windowWidth >= 1024) {
        leaveFeaturesInfo.to('.slide .slide-right, .slide .slide-left ', 1, {
            top: '-100vh'
        })

        var leaveFeaturesInfoScene = new ScrollMagic.Scene({
            triggerElement: '#sleep',
            duration: $('#sleep').height() * 2.2
        })
            .setTween(leaveFeaturesInfo)
            // .addIndicators({
            //   name: 'leaveFeaturesInfoScene',
            //   indent: 40,
            // })
            .triggerHook('onLeave')
            .addTo(controller)
    } else {
        console.log('we are less than 1024')
        leaveFeaturesInfo.to('#product-common-1 #slideContainer .slide .slide-wrapper>* ', 1, { opacity: 0 })

        var leaveFeaturesInfoScene = new ScrollMagic.Scene({
            triggerElement: '#sleep',
            duration: ($(window).height() / 3) * 3
        })
            .setTween(leaveFeaturesInfo)
            .triggerHook('onLeave')
            .addTo(controller)
    }

    $('#GOTOP').click(function () {
        jQuery('html,body').animate(
            {
                scrollTop: 0
            },
            400
        )
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('#GOTOP').fadeIn(300).addClass('active')
        } else {
            $('#GOTOP').stop().fadeOut(300).removeClass('active')
        }
    })
})

const mq = window.matchMedia('(max-width: 768px)')

mq.addListener(handleWidthChange)
handleWidthChange(mq)
function handleWidthChange(mq) {
    if (mq.matches) {
        zdepthChange()
        console.log('we are on')
    } else {
        console.log('we are not on')
    }
}

function zdepthChange() {
    $(window).scroll(() => {
        var $window = $(window)
        var scroll = $window.scrollTop() + $window.height() + 200
        if (scroll > $('#product-common-1').position().top && scroll < $('.smart-assistant').position().top + 800) {
            // alert('over #product-common-1')
            $('#product-common-1').find('.slide-left').css('z-index', 2)
            $('#product-common-1').find('.slide-right').css('z-index', 1)
        } else {
            $('#product-common-1').find('.slide-left').css('display', 'none')
            $('#product-common-1').find('.slide-right').css('display', 'none')
        }
    })
}
