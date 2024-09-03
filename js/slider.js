import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

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

const closeButton = document.querySelector('.show-up-sustainability-galery__close')
const sustainabilityGaleryImg = document.querySelectorAll('.sustainability-galery__img-container')
const showUpSustainabilityGalery = document.querySelector('.show-up-sustainability-galery')
const SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE = 'show-up-sustainability-galery--active'
let swiperGalery

sustainabilityGaleryImg.forEach((card) => {
  card.addEventListener('click', function (event) {
    event.stopPropagation()
    const cardNumber = event.target?.dataset?.slider
    if (cardNumber) {
      setIsScroling(false)
      const currIndex = Number(cardNumber)
      showUpSustainabilityGalery.classList.add(SHOW_UP_SUSTAINABILITY_GALERY_ACTIVE)
      swiperGalery = new Swiper('.swiper.sustainability-slider__swiper', {
        // Optional parameters
        direction: 'horizontal',
        initialSlide: currIndex - 1,
        //   rewind: true,
        //   loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.sustainability-slider__arrow--right',
          prevEl: '.sustainability-slider__arrow--left',
        },
      })
    }
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
