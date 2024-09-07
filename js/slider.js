import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

const deepPageSliders = document.querySelectorAll('.deep-page-slider')

deepPageSliders.forEach((wrapper, index) => {
  new Swiper(`.swiper.deep-page-slider__swiper[data-slider='${index + 1}']`, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
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
  slidesPerView: 3,
  spaceBetween: 66,

  // Navigation arrows
  navigation: {
    nextEl: '.company-slider__arrow--right',
    prevEl: '.company-slider__arrow--left',
  },
})

const swiper2 = new Swiper('.swiper.cosmic-careers-slider__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 66,

  // Navigation arrows
  navigation: {
    nextEl: '.cosmic-careers-slider__arrow--right',
    prevEl: '.cosmic-careers-slider__arrow--left',
  },
})

const closeButton = document.querySelector('.show-up-sustainability-galery__close')
const sustainabilityGaleryImg = document.querySelectorAll('.sustainability-galery__img-container')
const showUpSustainabilityGalery = document.querySelector('.show-up-sustainability-galery')
const SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE = 'show-up-sustainability-galery--active'
let swiperGalery

sustainabilityGaleryImg.forEach((card, index) => {
  card.addEventListener('click', function (event) {
    event.stopPropagation()

    setIsScroling(false)
    showUpSustainabilityGalery.classList.add(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)
    swiperGalery = new Swiper('.swiper.sustainability-slider__swiper', {
      // Optional parameters
      direction: 'horizontal',
      initialSlide: index,
      //   rewind: true,
      //   loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.sustainability-slider__arrow--right',
        prevEl: '.sustainability-slider__arrow--left',
      },
    })
  })
})

closeButton.addEventListener('click', function () {
  setIsScroling(true)
  showUpSustainabilityGalery.classList.remove(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)

  if (swiperGalery) {
    swiperGalery.destroy(true, true)
    swiperGalery = null
  }
})
