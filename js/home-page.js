import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
  toggleIsBlockBody,
  toggleVisibleHeader,
} from '../js/general.js'

const showUpHomeOpenButtons = document.querySelectorAll('.home-page__button')
const showUpSubmitOpenButton = document.querySelector('.submit-open-button')
const showUpHomeWrapper = document.querySelectorAll('.show-up-home')
const showUpSubmitWrapper = document.querySelector('.show-up-submit')
const closeHeaderButton = document.querySelector('.header__close')
const showUpSubmitCloseButton = document.querySelector('.show-up-submit__close')
const SHOW_UP_HOME_ACTIVE = 'show-up-home--active'
const SHOW_UP_SUBMIT_ACTIVE = 'show-up-submit--active'
const overlayBody = document.querySelector('.overlay-body')
const socials = document.querySelector('.socials')
const socialsCards = socials.querySelectorAll('.socials__button')
const showUpSocials = document.querySelectorAll('.show-up-socials')
const socialsMobile = document.querySelector('.socials-mobile')
const socialsMobileCards = document.querySelectorAll('.socials-mobile__button')
const SHOW_UP_SOCIALS_ACTIVE = 'show-up-socials--active'
const header = document.querySelector('.header')

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
  } else {
    overlayBody.classList.remove('overlay-body--active')
  }
}

//show-up-home START
showUpHomeOpenButtons.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    setIsScroling(false)
    setStyleOverlayBody(true)
    showUpHomeWrapper[index].classList.add(SHOW_UP_HOME_ACTIVE)
    toggleIsBlockBody(false)
    toggleVisibleHeader(false, true)
  })
})

document
  .querySelector('.sustainability-slider__img-container')
  .addEventListener('click', function () {})

function closeShoupHome(index, displayClose) {
  setIsScroling(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true, displayClose)
  setStyleOverlayBody(false)
  showUpHomeWrapper[index].classList.remove(SHOW_UP_HOME_ACTIVE)
}

showUpHomeWrapper.forEach(function (wrapper, index) {
  const closeButton = wrapper.querySelector('.show-up-home__close')
  closeButton.addEventListener('click', () => closeShoupHome(index))
  closeHeaderButton.addEventListener('click', () => closeShoupHome(index, true))
})
//show-up-home END

//show-up-submit START
showUpSubmitOpenButton.addEventListener('click', function (event) {
  setIsScroling(false)
  setStyleOverlayBody(true)
  showUpSubmitWrapper.classList.add(SHOW_UP_SUBMIT_ACTIVE)
  toggleIsBlockBody(false)
  toggleVisibleHeader(false, true)
})

function closeShoupSubmit(displayClose) {
  setIsScroling(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true, displayClose)
  setStyleOverlayBody(false)
  showUpSubmitWrapper.classList.remove(SHOW_UP_SUBMIT_ACTIVE)
}

showUpSubmitCloseButton.addEventListener('click', () => closeShoupSubmit())
closeHeaderButton.addEventListener('click', () => closeShoupSubmit(true))
//show-up-submit END

//show-up-socials START
socialsCards.forEach((button, index) => {
  button.addEventListener('click', function (event) {
    event.preventDefault()
    setIsScroling(false)
    setStyleOverlayBody(true)
    showUpSocials[index].classList.add(SHOW_UP_SOCIALS_ACTIVE)
    toggleIsBlockBody(false)
    toggleVisibleHeader(false, false)
  })
})

socialsMobileCards.forEach((button, index) => {
  button.addEventListener('click', function (event) {
    event.preventDefault()
    setIsScroling(false)
    setStyleOverlayBody(true)
    showUpSocials[index].classList.add(SHOW_UP_SOCIALS_ACTIVE)
    toggleIsBlockBody(false)
    toggleVisibleHeader(false, false)
  })
})

function closeShoupSocials(index, displayClose) {
  setIsScroling(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true, displayClose)
  setStyleOverlayBody(false)
  showUpSocials[index].classList.remove(SHOW_UP_SOCIALS_ACTIVE)
}

showUpSocials.forEach(function (wrapper, index) {
  const closeButton = wrapper.querySelector('.show-up-socials__close')
  closeButton.addEventListener('click', () => closeShoupSocials(index))
})

//show-up-socials END
