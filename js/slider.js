import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
  toggleIsBlockBody,
  toggleVisibleHeader,
  toggleVisibleDarkContent,
} from '../js/general.js'

const deepPageSliders = document.querySelectorAll('.deep-page-slider')

function updateNavigation(buttonLeft, buttonRight, swiper) {
  if (!swiper) {
    buttonLeft.classList.add('disabled')
    return null
  }
  // Проверка, если слайдер на первом слайде
  if (swiper?.isBeginning) {
    buttonLeft.classList.add('disabled')
  } else {
    buttonLeft.classList.remove('disabled')
  }

  // Проверка, если слайдер на последнем слайде
  if (swiper?.isEnd) {
    buttonRight.classList.add('disabled')
  } else {
    buttonRight.classList.remove('disabled')
  }
}

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

    on: {
      slideChange: function () {
        const leftButton = wrapper.querySelector(`.deep-page-slider__arrow--left`)
        const righrButton = wrapper.querySelector(`.deep-page-slider__arrow--right`)
        updateNavigation(leftButton, righrButton, wrapper)
      },
      init: function () {
        const leftButton = wrapper.querySelector(`.deep-page-slider__arrow--left`)
        const righrButton = wrapper.querySelector(`.deep-page-slider__arrow--right`)
        updateNavigation(leftButton, righrButton, wrapper)
      },
    },
  })
})

let companySlider = null
companySlider = new Swiper('.swiper.company-slider__swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 66,
    },
  },

  navigation: {
    nextEl: '.company-slider__arrow--right',
    prevEl: '.company-slider__arrow--left',
  },

  on: {
    slideChange: function () {
      const leftButton = document.querySelector('.company-slider__arrow--right')
      const righrButton = document.querySelector('.company-slider__arrow--left')
      updateNavigation(leftButton, righrButton, companySlider)
    },
    init: function () {
      const leftButton = document.querySelector('.company-slider__arrow--right')
      const righrButton = document.querySelector('.company-slider__arrow--left')
      updateNavigation(leftButton, righrButton, companySlider)
    },
  },
})

let cosmicCareersSlider = null
cosmicCareersSlider = new Swiper('.swiper.cosmic-careers-slider__swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  // },

  // direction: 'horizontal',
  //   slidesPerView: 'auto',
  // spaceBetween: 24,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    // когда ширина экрана больше 768px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '.cosmic-careers-slider__arrow--right',
    prevEl: '.cosmic-careers-slider__arrow--left',
  },

  on: {
    slideChange: function () {
      const leftButton = document.querySelector('.cosmic-careers-slider__arrow--right')
      const righrButton = document.querySelector('.cosmic-careers-slider__arrow--left')
      updateNavigation(leftButton, righrButton, cosmicCareersSlider)
    },
    init: function () {
      const leftButton = document.querySelector('.cosmic-careers-slider__arrow--right')
      const righrButton = document.querySelector('.cosmic-careers-slider__arrow--left')
      updateNavigation(leftButton, righrButton, cosmicCareersSlider)
    },
  },
})

//END

const socialsMobile = new Swiper('.swiper.socials-mobile__swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.socials-mobile__arrow--right',
    prevEl: '.socials-mobile__arrow--left',
  },
})

const closeButton = document.querySelector('.show-up-sustainability-galery__close')
const sustainabilityGaleryImg = document.querySelectorAll('.sustainability-galery__img-container')
const showUpSustainabilityGalery = document.querySelector('.show-up-sustainability-galery')
const socialsMobileCards = document.querySelectorAll('.socials-mobile__button')
const SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE = 'show-up-sustainability-galery--active'
let swiperGalery
const overlayBody = document.querySelector('.overlay-body')

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
    toggleVisibleDarkContent(false)
  } else {
    overlayBody.classList.remove('overlay-body--active')
    toggleVisibleDarkContent(true)
  }
}

sustainabilityGaleryImg.forEach((card, index) => {
  card.addEventListener('click', function (event) {
    event.stopPropagation()
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
    toggleIsBlockBody(false)
    setIsScroling(false)
    toggleVisibleHeader(false)
    setStyleOverlayBody(true)
    toggleVisibleHeader(false, false)
    showUpSustainabilityGalery.classList.add(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)
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

const closeButtonCollaboration = document.querySelector('.collaborators-galery__close')
const collaboratorsGaleryImg = document.querySelectorAll('.socials__card')
const collaboratorsMobileGaleryImg = document.querySelectorAll('.socials__mobile')
const showUpCollaborationGalery = document.querySelector('.collaborators-galery')
const SHOW_UP_COLLABORATION_GALERY_ACTIVE = 'collaborators-galery--active'
let swiperGaleryCollaborations
const overlayBodyCollaborations = document.querySelector('.overlay-body')

collaboratorsGaleryImg.forEach((card, index) => {
  card.addEventListener('click', function (event) {
    event.stopPropagation()
    swiperGaleryCollaborations = new Swiper('.swiper.collaborators-slider__swiper', {
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
        nextEl: '.collaborators-slider__arrow--right',
        prevEl: '.collaborators-slider__arrow--left',
      },
    })
    toggleIsBlockBody(false)
    setIsScroling(false)
    toggleVisibleHeader(false)
    setStyleOverlayBody(true)
    toggleVisibleHeader(false, false)
    showUpCollaborationGalery.classList.add(SHOW_UP_COLLABORATION_GALERY_ACTIVE)
  })
})

socialsMobileCards.forEach((card, index) => {
  card.addEventListener('click', function (event) {
    event.preventDefault()
    event.stopPropagation()
    swiperGaleryCollaborations = new Swiper('.swiper.collaborators-slider__swiper', {
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
        nextEl: '.collaborators-slider__arrow--right',
        prevEl: '.collaborators-slider__arrow--left',
      },
    })
    toggleIsBlockBody(false)
    setIsScroling(false)
    toggleVisibleHeader(false)
    setStyleOverlayBody(true)
    toggleVisibleHeader(false, false)
    showUpCollaborationGalery.classList.add(SHOW_UP_COLLABORATION_GALERY_ACTIVE)
  })
})

function closeShowUpCollaborationGalery() {
  setIsScroling(true)
  toggleVisibleHeader(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true)
  setStyleOverlayBody(false)
  showUpCollaborationGalery.classList.remove(SHOW_UP_COLLABORATION_GALERY_ACTIVE)
  if (swiperGaleryCollaborations) {
    swiperGaleryCollaborations.destroy(true, true)
    swiperGaleryCollaborations = null
  }
}
closeButtonCollaboration.addEventListener('click', closeShowUpCollaborationGalery)
