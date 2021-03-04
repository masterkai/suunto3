gsap.registerPlugin(ScrollTrigger)

function initHeaderTilt() {
    console.log('Hello Suunto3')
    const header = document.querySelector('#header')
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
    spaceBetween: 50,
    autoplay: {
        delay: 5000
    },
    centeredSlides: true,
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
            slidesPerView: 1, // or 'auto'
            spaceBetween: 50
        }
    },
    // Events
    on: {
        transitionStart: function (params) {
            // console.log(this.realIndex);
            if ($(window).width() < 768 && this.realIndex < 3) {
                activeTitle.innerText = `為您量身訂做的
                【智能訓練導引】
                `
            } else if ($(window).width() > 768 && this.realIndex < 3) {
                activeTitle.innerText = `為您量身訂做的【智能訓練導引】`
            } else {
                activeTitle.innerText = '滿足您全方位的運動需求'
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
                    img: 'img/features_activity_tracker.png',
                    id: 0
                },
                {
                    name: 'iconfont icon_adaptive_training_guidance',
                    feature: '智能導引訓練',
                    img: 'img/features_adaptive_training_guidance.png',
                    id: 1
                },
                {
                    name: 'iconfont icon_fitness_level',
                    feature: '體適能水準',
                    img: 'img/features_fitness_level.png',
                    id: 2
                },
                {
                    name: 'iconfont icon_stress',
                    feature: '疲勞壓力與恢復狀態',
                    img: 'img/features_stress.png',
                    id: 3
                },
                {
                    name: 'iconfont icon_sleep',
                    feature: '睡眠品質監測',
                    img: 'img/features_sleep.png',
                    id: 4
                },
                {
                    name: 'iconfont icon_wireless_mobile_connection',
                    feature: '連接手機GPS',
                    img: 'img/features_wireless_mobile_connection.png',
                    id: 5
                },
                {
                    name: 'iconfont icon_wrist_based_heart_rate',
                    feature: '腕式光學心率',
                    img: 'img/features_wrist_based_heart_rate.png',
                    id: 6
                },
                {
                    name: 'iconfont icon_water_resistant_30m',
                    feature: '水下30米防水等級',
                    img: 'img/features_water_resistant_30m.png',
                    id: 7
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

        changeFeature(id) {
            // console.log(id)
            const featuresArray = document.querySelectorAll('.features .flexContainer .watch')
            const featuresBtnArray = document.querySelectorAll('.features .flexContainer--feature .feature')
            console.log(featuresBtnArray)
            featuresArray.forEach(item => item.classList.remove('active'))
            featuresArray.forEach(item => (item.style.visibility = 'hidden'))
            featuresArray.forEach(item => (item.style.animationName = 'none'))
            featuresBtnArray.forEach(item => item.classList.remove('active'))
            featuresArray[id].classList.add('active')
            featuresBtnArray[id].classList.add('active')
            featuresArray[id].style.visibility = 'visible'
            featuresArray[id].style.animationName = 'fadeIn'
        },
        toOriginal() {
            this.imgSRC = this.original
        }
    },
    mounted() {
        const featuresBtnArray = document.querySelectorAll('.features .flexContainer--feature .feature')
        featuresBtnArray[0].classList.add('active')
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

        features.to('.slide .slide-right', 2, { display: 'none', opacity: 0 }, 0).to(`${featuresId} .slide-right`, 1, { display: 'block', opacity: 1 }, 1)

        var featuresScene = new ScrollMagic.Scene({
            triggerHook: 0.15,
            triggerElement: featuresId,
            offset: -$(featuresId).height() / 4,
            duration: $(featuresId).height() / 4
        })
            .setTween(features)
            // .addIndicators({
            //   indent: 0,
            // })
            .addTo(controller)
    })

    var leaveFeaturesInfo = gsap.timeline({
        repeat: 0
    })

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
/* no use
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
*/
