import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

const homeArrowOne = document.querySelector('#homeArrowOne')
const homeArrowTwo = document.querySelector('#homeArrowTwo')
const homeShowUpOne = document.querySelector('#homeShowUpOne')
const homeShowUpTwo = document.querySelector('#homeShowUpTwo')
const homeShowUpOneClose = document.querySelector('#homeShowUpOneClose')
const homeShowUpTwoClose = document.querySelector('#homeShowUpTwoClose')

const showUpHomeButtons = document.querySelectorAll('.home-page__arrow')
const showUpHomeWrapper = document.querySelectorAll('.show-up-home')
const overlayBody = document.querySelector('.overlay-body')

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
  } else {
    overlayBody.classList.remove('overlay-body--active')
  }
}

homeArrowOne.addEventListener('click', () => {
  setIsScroling(false)
  setStyleOverlayBody(true)
  homeShowUpTwo.classList.remove('show-up-home--active')
  homeShowUpOne.classList.add('show-up-home--active')
})

homeArrowTwo.addEventListener('click', () => {
  setIsScroling(false)
  setStyleOverlayBody(true)
  homeShowUpOne.classList.remove('show-up-home--active')
  homeShowUpTwo.classList.add('show-up-home--active')
})

homeShowUpOneClose.addEventListener('click', () => {
  homeShowUpOne.classList.remove('show-up-home--active')
  setStyleOverlayBody(false)
  setIsScroling(true)
})

homeShowUpTwoClose.addEventListener('click', () => {
  homeShowUpTwo.classList.remove('show-up-home--active')
  setStyleOverlayBody(false)
  setIsScroling(true)
})

// showUpHomeButtons.forEach((button) => {
//   button.addEventListener('click', function (event) {
//     const currDataset = event.target?.dataset?.showHome
//     if(currDataset) {

//     }
//   })
// })
