import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
} from '../js/general.js'

const substrateBody = document.querySelector('.substrate-body')
const preloader = document.querySelector('.preloader')
const pages = document.querySelectorAll('.page')
const numOfPages = pages.length
const rotater = document.querySelector('.rotater')
const preloaderOverlay = document.querySelector('.preloader__overlay')
const pageOne = document.querySelector('.page-1')
const paginationBlock = document.querySelector('.pagination')
const deepPageButtons = document.querySelectorAll('.deep-page__button')
const PAGE_MOVING_UP = 'page--moving-up'
const PAGE_MOVING_DOWN = 'page--moving-down'
const DIRECTION_UP = 'direction-up'
const DIRECTION_DOWN = 'direction-down'
const SUBSTARATE_BODY_TO_BOTTOM = 'substrate-body--to-bottom'
const SUBSTARATE_BODY_TO_TOP = 'substrate-body--to-top'
const SUBSTARATE_BODY_ACTIVE = 'substrate-body--active'

//scroll main START
function togleMainScroll(event, state) {
  // console.log(event.target)
  if (state) {
    setIsScroling(true)
  } else {
    setIsScroling(false)
  }
}
//scroll main END

//infoButton start
const infoButton = document.querySelector('.info-button__img')
const infoTooltip = document.querySelector('.info-tooltip')
const INFO_TOOLTIP_ACTIVE = 'info-tooltip--active'

function toggleInfoTooltip(state) {
  if (state) {
    infoTooltip.classList.add(INFO_TOOLTIP_ACTIVE)
  } else {
    infoTooltip.classList.remove(INFO_TOOLTIP_ACTIVE)
  }
}

infoButton.addEventListener('mouseenter', () => toggleInfoTooltip(true))
infoButton.addEventListener('mouseleave', () => toggleInfoTooltip(false))
//infoButton end

//showUpCosmicCareers START
const showUpCosmicCareers = document.querySelector('.show-up-cosmic-careers')
const SHOW_UP_COSMIC_CAREERS_ACTIVE = 'show-up-cosmic-careers--active'
const SHOW_UP_COSMIC_CAREERS_MOVING_UP = 'show-up-cosmic-careers--moving-up'
const NUMBER_PAGE_COSMIC_CARRER = 15

showUpCosmicCareers.addEventListener('click', function (event) {
  console.log(event.target)
  showUpCosmicCareers.classList.toggle(SHOW_UP_COSMIC_CAREERS_MOVING_UP)
})

function toggleActiveShowUpCosmicCareers(state) {
  if (state) {
    showUpCosmicCareers.classList.add(SHOW_UP_COSMIC_CAREERS_ACTIVE)
  } else {
    showUpCosmicCareers.classList.remove(SHOW_UP_COSMIC_CAREERS_ACTIVE)
    showUpCosmicCareers.classList.remove(SHOW_UP_COSMIC_CAREERS_MOVING_UP)
  }
}
//showUpCosmicCareers END

//substrateFirstWomen START
const substrateFirstWomen = document.querySelector('.substrate-first-women')
const SUBSTRATE_FIRST_WOMAN_ACTIVE = 'substrate-first-women--active'
const NUMBER_SUBSTRATE_FIRST_WOMAN = 17

function toggleSubstrateFirstWomen(state) {
  if (state) {
    substrateFirstWomen.classList.add(SUBSTRATE_FIRST_WOMAN_ACTIVE)
  } else {
    substrateFirstWomen.classList.remove(SUBSTRATE_FIRST_WOMAN_ACTIVE)
  }
}
//substrateFirstWomen END

//sustainabilityGalery START
const sustainabilityGalery = document.querySelector('.sustainability-galery')
const sustainabilityGaleryButton = document.querySelector('#sustainabilityGaleryButton')
const sustainabilityGaleryCards = document.querySelectorAll('.sustainability-galery__card')
const SUSTABILITY_GALERY_CARD_NONE = 'sustainability-galery__card--none'

sustainabilityGalery.addEventListener('mouseenter', (event) => togleMainScroll(event, false))
sustainabilityGalery.addEventListener('mouseleave', (event) => togleMainScroll(event, true))
sustainabilityGaleryButton.addEventListener('click', function () {
  sustainabilityGaleryCards.forEach((card) => {
    card.classList.remove(SUSTABILITY_GALERY_CARD_NONE)
  })
  this.style.display = 'none'
})
//sustainabilityGalery END

//socials  START
const socials = document.querySelector('.socials')

socials.addEventListener('mouseenter', (event) => togleMainScroll(event, false))
socials.addEventListener('mouseleave', (event) => togleMainScroll(event, true))
//socials  END

//Navigation Main START
const navigationClose = document.querySelector('#navigationClose')
const navigationOpen = document.querySelector('#navigationOpen')
const navigation = document.querySelector('.navigation')
const navigationItems = document.querySelectorAll('.navigation__item')

// function showNavigation() {
//   setIsScroling(false)
//   navigation.classList.add('navigation--active')
//   navigation.style.zIndex = 9
// }
function toggleNavigation(state) {
  if (state) {
    setIsScroling(false)
    navigation.classList.add('navigation--active')
    navigation.style.zIndex = 9
  } else {
    setIsScroling(true)
    navigation.classList.remove('navigation--active')
  }
}

navigationOpen.addEventListener('click', () => toggleNavigation(true))
navigationClose.addEventListener('click', () => toggleNavigation(false))

// function hideNavigation() {
//   setIsScroling(true)
//   navigation.classList.remove('navigation--active')
// }

navigation.addEventListener('transitionend', function (event) {
  if (event.target.classList.contains('navigation--active')) {
    console.log('transitionend')
  } else {
    setTimeout(() => {
      event.target.style.zIndex = 0
    }, 300)
  }
})

function navigationItemClick(event) {
  const clickNumberPage = event.target.getAttribute('data-page')
  if (clickNumberPage) {
    const direction = getCurrentPage() < clickNumberPage ? DIRECTION_UP : DIRECTION_DOWN
    setCurrentPage(clickNumberPage)
    pagination(direction)
    toggleNavigation(false)
  }
}

navigationItems.forEach((item) => {
  item.addEventListener('click', navigationItemClick)
})
//Navigation Main END

deepPageButtons.forEach((button) => {
  button.addEventListener('click', navigateDown)
})

function setDirectionForPage(direction) {
  const currPageModal = getCurrentPage()
  if (direction === DIRECTION_DOWN) {
    pages.forEach((page, index) => {
      if (currPageModal == index + 1 || currPageModal == index + 2) {
        page.classList.add(PAGE_MOVING_DOWN)
        page.classList.remove(PAGE_MOVING_UP)
      } else {
        page.classList.remove(PAGE_MOVING_DOWN)
        page.classList.add(PAGE_MOVING_UP)
      }
    })
  } else {
    pages.forEach((page, index) => {
      if (currPageModal == index || currPageModal == index + 1) {
        page.classList.add(PAGE_MOVING_UP)
        page.classList.remove(PAGE_MOVING_DOWN)
      } else {
        page.classList.remove(PAGE_MOVING_UP)
        page.classList.add(PAGE_MOVING_DOWN)
      }
    })
  }
}

function pagination(direction, page) {
  setDirectionForPage(direction)
  setIsScroling(false)
  setSubstrateBody()
  const currPageModal = getCurrentPage()
  setTimeout(() => {
    // if (currPageModal == NUMBER_PAGE_COSMIC_CARRER) {
    //   toggleActiveShowUpCosmicCareers(true)
    // } else {
    //   toggleActiveShowUpCosmicCareers(false)
    // }
    if (currPageModal == NUMBER_SUBSTRATE_FIRST_WOMAN) {
      toggleSubstrateFirstWomen(true)
    } else {
      toggleSubstrateFirstWomen(false)
    }
    const pageActive = document.querySelectorAll('.page.page--active')
    const nextActivePage = document.querySelector('.page-' + currPageModal)
    pageActive.forEach((page) => page.classList.remove('page--active'))
    nextActivePage.classList.add('page--active')
    document
      .querySelectorAll('.pagination__item.pagination--active')
      .forEach((item) => item.classList.remove('pagination--active'))
    document
      .querySelector('.pagination__item[data-page="' + currPageModal + '"]')
      .classList.add('pagination--active')
    rotater.style.transform = 'rotate(' + (currPageModal - 1) * 180 + 'deg)'
  }, 300)
}

function navigateUp() {
  let currPageModal = getCurrentPage()
  if (currPageModal == 1) return
  currPageModal--
  setCurrentPage(currPageModal)
  pagination(DIRECTION_DOWN)
}

function navigateDown() {
  let currPageModal = getCurrentPage()
  if (currPageModal == numOfPages) return
  currPageModal++
  setCurrentPage(currPageModal)
  pagination(DIRECTION_UP)
}

function scrollHandler(e) {
  if (!getIsScroling()) return
  if (e.deltaY < 0) {
    navigateUp()
  } else {
    navigateDown()
  }
}

function keydownHandler(e) {
  if (e.getModifierState('Shift') || e.getModifierState('Control') || e.getModifierState('Alt')) {
    return
  }
  if (!getIsScroling()) return
  if (e.key === 'ArrowUp') {
    navigateUp()
  } else if (e.key === 'ArrowDown') {
    navigateDown()
  }
}

//Pagination
function paginationClickHandler(e) {
  const item = e.target.closest('.pagination__item:not(.pagination--active)')
  const currPageModal = getCurrentPage()
  if (item) {
    const page = item.getAttribute('data-page')
    if (page) {
      const direction = currPageModal < page ? DIRECTION_UP : DIRECTION_DOWN
      setCurrentPage(page)
      pagination(direction)
    }
  }
}

function paginationArrowHandler(e) {
  if (e.target.classList.contains('js-up')) {
    navigateUp()
  } else {
    navigateDown()
  }
}

const paginationClick = (event) => {
  if (!getIsScroling()) return
  if (event.target.classList.contains('pagination__arrow')) {
    return paginationArrowHandler(event)
  }
  if (event.target.closest('.pagination__item:not(.pagination--active)')) {
    paginationClickHandler(event)
  }
}

paginationBlock.addEventListener('click', paginationClick)

//Preloader
// const startPreloader = () => {
//   preloaderOverlay.addEventListener('animationend', function () {
//     preloader.classList.add('inactive')
//   })
//   preloader.addEventListener('transitionend', function () {
//     preloader.classList.add('hidden')
//     setTimeout(afterPreloader, afterPreloaderAT)
//   })
// }

function setSubstrateBody() {
  const currentPageTag = document.querySelector(`.page-${getCurrentPage()}`)
  if (currentPageTag.classList.contains('substrate-bottom')) {
    substrateBody.classList.add(SUBSTARATE_BODY_TO_BOTTOM)
    substrateBody.classList.remove(SUBSTARATE_BODY_TO_TOP)
  } else if (currentPageTag.classList.contains('substrate-top')) {
    substrateBody.classList.add(SUBSTARATE_BODY_TO_TOP)
    substrateBody.classList.remove(SUBSTARATE_BODY_TO_BOTTOM)
  } else {
    substrateBody.classList.remove(SUBSTARATE_BODY_TO_BOTTOM)
    substrateBody.classList.remove(SUBSTARATE_BODY_TO_TOP)
  }
}

function afterPreloader() {
  pageOne.classList.add('page--active')
  setSubstrateBody()
  substrateBody.classList.add(SUBSTARATE_BODY_ACTIVE)
  paginationBlock.classList.add('pagination--active')

  document.addEventListener('wheel', scrollHandler)
  document.addEventListener('keydown', keydownHandler)
}

rotater.addEventListener('transitionend', function (e) {
  setIsScroling(true)
})

//DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function () {
//   startPreloader()
// })

//Loader START
const circleLoader = document.querySelector('#white')
const loadingOverlay = document.querySelector('.loading-overlay')
const loadingOverlayContainer = document.querySelector('.loading-overlay__')
const STROKE_DASHARRAY = '1685, 1660'
const STROKE_DASHOFFSET_START = 1910
const STROKE_DASHOFFSET_FINISH = 3350
const START_LOAD = 0
const FINISH_LOAD = 100
const DOM_SPEED = 40
const LOAD_SPEED = 20
const loadingText = document.querySelector('.loading-overlay__text')
const coefficientDasharray = (STROKE_DASHOFFSET_FINISH - STROKE_DASHOFFSET_START) / FINISH_LOAD

circleLoader.style.strokeDasharray = STROKE_DASHARRAY
circleLoader.style.strokeDashoffset = STROKE_DASHOFFSET_START

let counterText = START_LOAD
let loaderInterval = null
let couterSVG = STROKE_DASHOFFSET_START

function startAnimation(speed) {
  clearInterval(loaderInterval)
  loaderInterval = setInterval(() => {
    counterText++
    couterSVG = couterSVG + coefficientDasharray
    circleLoader.style.strokeDashoffset = couterSVG + ''
    loadingText.innerHTML = counterText + '%'
    if (counterText >= FINISH_LOAD) {
      console.log(counterText)
      clearInterval(loaderInterval)
      loadingOverlay.classList.add('inactive')
      setTimeout(() => {
        loadingOverlay.classList.add('hidden')
        setTimeout(afterPreloader, afterPreloaderAT)
      }, 100)
    }
  }, speed)
}

startAnimation(500)

const startPreloader = () => {
  loadingOverlayContainer.addEventListener('animationend', function () {
    loadingOverlay.classList.add('inactive')
  })
  loadingOverlay.addEventListener('transitionend', function () {
    loadingOverlay.classList.add('hidden')
    setTimeout(afterPreloader, afterPreloaderAT)
  })
}

window.addEventListener('DOMContentLoaded', async () => {
  startAnimation(DOM_SPEED)
})

window.addEventListener('load', async () => {
  startAnimation(LOAD_SPEED)
})
//Loader END
