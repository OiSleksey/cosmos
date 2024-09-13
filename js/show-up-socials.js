// import {
//   afterPreloaderAT,
//   getCurrentPage,
//   setCurrentPage,
//   getIsScroling,
//   setIsScroling,
//   toggleIsBlockBody,
//   toggleVisibleHeader,
// } from '../js/general.js'

// const socials = document.querySelector('.socials')
// const socialsCards = socials.querySelectorAll('.socials__card')
// const showUpSocials = document.querySelectorAll('.show-up-socials')
// const socialsMobile = document.querySelector('.socials-mobile')
// const socialsMobileCards = socialsMobile.querySelectorAll('.swiper-slide')
// const SHOW_UP_SOCIALS_ACTIVE = 'show-up-socials--active'
// const header = document.querySelector('.header')

// //show-up-socials
// header.addEventListener('click', function () {
//   showUpSocials.forEach((social) => {
//     if (social.classList.contains(SHOW_UP_SOCIALS_ACTIVE)) {
//       social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
//       setIsScroling(true)
//       toggleIsBlockBody(false)
//       toggleVisibleHeader(false)
//     }
//   })
// })
// //show-up-socials

// function setEventCloseButton(social) {
//   const closeButton = social.querySelector('.show-up-socials__close')
//   closeButton.addEventListener('click', function (event) {
//     social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
//     setIsScroling(true)
//     toggleIsBlockBody(true)
//     toggleVisibleHeader(true)
//   })
// }

// function setStateShowUp(showUpCurrent) {
//   showUpSocials.forEach((social, index) => {
//     const socialCurr = social?.dataset?.showUp
//     if (socialCurr) {
//       setIsScroling(false)
//       toggleIsBlockBody(false)
//       toggleVisibleHeader(false)
//       if (index === showUpCurrent) {
//         social.classList.add(SHOW_UP_SOCIALS_ACTIVE)
//         setEventCloseButton(social)
//       } else {
//         social.classList.remove(SHOW_UP_SOCIALS_ACTIVE)
//       }
//     }
//   })
// }

// socialsCards.forEach((button, index) => {
//   button.addEventListener('click', function (event) {
//     // const showUpCurrent = event.target?.dataset?.showUp
//     // if (showUpCurrent) {
//     setStateShowUp(index)
//     // }
//   })
// })
// socialsMobileCards.forEach((button, index) => {
//   button.addEventListener('click', function (event) {
//     // const showUpCurrent = event.target?.dataset?.showUp
//     // if (showUpCurrent) {
//     setStateShowUp(index)
//     // }
//   })
// })
