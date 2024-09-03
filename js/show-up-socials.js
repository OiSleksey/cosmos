import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

const socialsButtons = document.querySelectorAll('.socials__button')
const showUpSocials = document.querySelectorAll('.show-up-socials')
const SHOW_UP_SOCIALS_ACTIVE = 'show-up-socials--active'
const header = document.querySelector('.header')

//show-up-socials
header.addEventListener('click', function () {
  showUpSocials.forEach((social) => {
    if (social.classList.contains(SHOW_UP_SOCIALS_ACTIVE)) {
      social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
      setIsScroling(true)
    }
  })
})
//show-up-socials

function setEventCloseButton(social) {
  const closeButton = social.querySelector('.show-up-socials__close')
  closeButton.addEventListener('click', function (event) {
    social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
    setIsScroling(true)
  })
}

function setStateShowUp(showUpCurrent) {
  showUpSocials.forEach((social) => {
    const socialCurr = social?.dataset?.showUp
    if (socialCurr) {
      setIsScroling(false)
      if (socialCurr === showUpCurrent) {
        social.classList.add(SHOW_UP_SOCIALS_ACTIVE)
        setEventCloseButton(social)
      } else {
        social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
      }
    }
  })
}

socialsButtons.forEach((button) => {
  button.addEventListener('click', function (event) {
    const showUpCurrent = event.target?.dataset?.showUp
    if (showUpCurrent) {
      setStateShowUp(showUpCurrent)
    }
  })
})
