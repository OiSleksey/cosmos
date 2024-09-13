import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
  toggleIsBlockBody,
  toggleVisibleHeader,
} from '../js/general.js'

const deepPageSliders = document.querySelectorAll('.deep-page-slider')

deepPageSliders.forEach((wrapper, index) => {
  new Swiper(`.swiper.deep-page-slider__swiper[data-slider='${index + 1}']`, {
    direction: 'horizontal',
    slidesPerView: 'auto',
    // spaceBetween: 24,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // когда ширина экрана меньше или равна 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // когда ширина экрана больше 768px
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    // spaceBetween: 'auto',
    navigation: {
      nextEl: `.deep-page-slider__arrow--right[data-slider='${index + 1}']`,
      prevEl: `.deep-page-slider__arrow--left[data-slider='${index + 1}']`,
    },
  })
})

const swiper = new Swiper('.swiper.company-slider__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 66,
  slidesPerView: 'auto',
  // slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // когда ширина экрана меньше или равна 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // когда ширина экрана больше 768px
    1024: {
      slidesPerView: 3,
      spaceBetween: 66,
    },
  },
  // spaceBetween: 'auto',

  // Navigation arrows
  navigation: {
    nextEl: '.company-slider__arrow--right',
    prevEl: '.company-slider__arrow--left',
  },
})

const swiper2 = new Swiper('.swiper.cosmic-careers-slider__swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  // slidesPerView: 3,
  // spaceBetween: 66,
  slidesPerView: 'auto',
  // slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // когда ширина экрана меньше или равна 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // когда ширина экрана больше 768px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.cosmic-careers-slider__arrow--right',
    prevEl: '.cosmic-careers-slider__arrow--left',
  },
})

const swiper3 = new Swiper('.swiper.socials-mobile__swiper', {
  // Optional parameters
  direction: 'horizontal',

  // slidesPerView: 3,
  // spaceBetween: 66,
  slidesPerView: 'auto',
  spaceBetween: 24,
  // slidesPerView: 4,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  //   // когда ширина экрана меньше или равна 768px
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  //   // когда ширина экрана больше 768px
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.socials-mobile__arrow--right',
    prevEl: '.socials-mobile__arrow--left',
  },
})

const closeButton = document.querySelector('.show-up-sustainability-galery__close')
const sustainabilityGaleryImg = document.querySelectorAll('.sustainability-galery__img-container')
const showUpSustainabilityGalery = document.querySelector('.show-up-sustainability-galery')
const SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE = 'show-up-sustainability-galery--active'
let swiperGalery
const overlayBody = document.querySelector('.overlay-body')

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
  } else {
    overlayBody.classList.remove('overlay-body--active')
  }
}

sustainabilityGaleryImg.forEach((card, index) => {
  card.addEventListener('click', function (event) {
    event.stopPropagation()
    toggleIsBlockBody(false)
    setIsScroling(false)
    toggleVisibleHeader(false)
    setStyleOverlayBody(true)
    toggleVisibleHeader(false, false)
    showUpSustainabilityGalery.classList.add(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)
    swiperGalery = new Swiper('.swiper.sustainability-slider__swiper', {
      // Optional parameters
      direction: 'horizontal',
      initialSlide: index,
      //   rewind: true,
      //   loop: true,
      centeredSlides: true,
      spaceBetween: 66,
      slidesPerView: 1,
      zoom: true,
      // Navigation arrows
      navigation: {
        nextEl: '.sustainability-slider__arrow--right',
        prevEl: '.sustainability-slider__arrow--left',
      },
    })
  })
})

function closeShowUpSustainabilityGalery() {
  setIsScroling(true)
  toggleVisibleHeader(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true)
  setStyleOverlayBody(false)
  showUpSustainabilityGalery.classList.remove(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)

  if (swiperGalery) {
    swiperGalery.destroy(true, true)
    swiperGalery = null
  }
}

closeButton.addEventListener('click', closeShowUpSustainabilityGalery)
