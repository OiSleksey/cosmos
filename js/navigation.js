import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

//navigation
const navigationClose = document.querySelector('#navigationClose')
const navigationOpen = document.querySelector('#navigationOpen')
const navigation = document.querySelector('.navigation')

navigationOpen.addEventListener('click', () => {
  setIsScroling(false)
  navigation.classList.add('navigation--active')
  navigation.style.zIndex = 9
})

navigationClose.addEventListener('click', () => {
  setIsScroling(true)
  navigation.classList.remove('navigation--active')
})

navigation.addEventListener('transitionend', function (event) {
  if (event.target.classList.contains('navigation--active')) {
    console.log('transitionend')
  } else {
    setTimeout(() => {
      event.target.style.zIndex = 0
    }, 300)
  }
})

//navigation
