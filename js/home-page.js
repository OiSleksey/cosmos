import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

const showUpHomeOpenButtons = document.querySelectorAll('.home-page__button')
const showUpHomeWrapper = document.querySelectorAll('.show-up-home')
const SHOW_UP_HOME_ACTIVE = 'show-up-home--active'
const overlayBody = document.querySelector('.overlay-body')

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
  } else {
    overlayBody.classList.remove('overlay-body--active')
  }
}

showUpHomeOpenButtons.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    setIsScroling(false)
    setStyleOverlayBody(true)
    showUpHomeWrapper[index].classList.add(SHOW_UP_HOME_ACTIVE)
  })
})

showUpHomeWrapper.forEach(function (wrapper, index) {
  const closeButton = wrapper.querySelector('.show-up-home__close')

  closeButton.addEventListener('click', function (event) {
    setIsScroling(true)
    setStyleOverlayBody(false)
    showUpHomeWrapper[index].classList.remove(SHOW_UP_HOME_ACTIVE)
  })
})
