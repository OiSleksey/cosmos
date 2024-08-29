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
})

navigationClose.addEventListener('click', () => {
  setIsScroling(true)
  navigation.classList.remove('navigation--active')
})
//navigation
