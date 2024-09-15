import {
  afterPreloaderAT,
  getCurrentPage,
  setCurrentPage,
  getIsScroling,
  setIsScroling,
  setTypeDevice,
  getIsMobileDevice,
  desktopSize,
  toggleIsBlockBody,
} from '../js/general.js'

const substrateBody = document.querySelector('.substrate-body')
const preloader = document.querySelector('.preloader')
const pages = document.querySelectorAll('.page')
const numOfPages = pages.length
const rotater = document.querySelector('.rotater')
const preloaderOverlay = document.querySelector('.preloader__overlay')
const pageOne = document.querySelector('.page-1')
const paginationBlock = document.querySelector('.pagination')
const nextPageButton = document.querySelectorAll('.next-page-button')
const PAGE_MOVING_UP = 'page--moving-up'
const PAGE_MOVING_DOWN = 'page--moving-down'
const DIRECTION_UP = 'direction-up'
const DIRECTION_DOWN = 'direction-down'
const SUBSTARATE_BODY_TO_BOTTOM = 'substrate-body--to-bottom'
const SUBSTARATE_BODY_TO_TOP = 'substrate-body--to-top'
const SUBSTARATE_BODY_ACTIVE = 'substrate-body--active'
const header = document.querySelector('.header')

//scroll main START
function togleMainScroll(state) {
  // console.log(event.target)
  if (state) {
    let isReturn = false
    const showUpSustainabilityGalery = document.querySelector('.show-up-sustainability-galery')
    const SHOW_UP_SUSTAINABILITY_GALERY = 'show-up-sustainability-galery--active'
    const SHOW_UP_SOCIALS_ACTIVE = 'show-up-socials--active'
    const showUpSocials = document.querySelectorAll('.show-up-socials')
    isReturn = false
    showUpSocials.forEach((item) => {
      if (item.classList.contains(SHOW_UP_SOCIALS_ACTIVE)) {
        isReturn = true
      }
    })
    if (showUpSustainabilityGalery.classList.contains(SHOW_UP_SUSTAINABILITY_GALERY)) {
      isReturn = true
    }
    if (isReturn) return null
    console.log('THIS')
    setIsScroling(true)
  } else {
    setIsScroling(false)
  }
}
//scroll main END

//infoButton start
const infoButton = document.querySelector('.info-button__img')
const infoTooltip = document.querySelector('.info-tooltip')
const infoTooltipContainer = document.querySelector('.info-tooltip__container')
const INFO_TOOLTIP_ACTIVE = 'info-tooltip--active'

document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover)
})

//showUpCosmicCareers START
const showUpCosmicCareers = document.querySelector('.show-up-cosmic-careers')
const SHOW_UP_COSMIC_CAREERS_ACTIVE = 'show-up-cosmic-careers--active'
const SHOW_UP_COSMIC_CAREERS_MOVING_UP = 'show-up-cosmic-careers--moving-up'
const NUMBER_PAGE_COSMIC_CARRER = 15

showUpCosmicCareers.addEventListener('click', function (event) {
  showUpCosmicCareers.classList.toggle(SHOW_UP_COSMIC_CAREERS_MOVING_UP)
})
//showUpCosmicCareers END

//substrateFirstWomen START
const substrateFirstWomen = document.querySelector('.substrate-first-woman')
const SUBSTRATE_FIRST_WOMAN_ACTIVE = 'substrate-first-woman--active'
const NUMBER_SUBSTRATE_FIRST_WOMAN = 16

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

sustainabilityGalery.addEventListener('mouseenter', (event) => togleMainScroll(false))
sustainabilityGalery.addEventListener('mouseleave', (event) => togleMainScroll(true))
sustainabilityGaleryButton.addEventListener('click', function () {
  sustainabilityGaleryCards.forEach((card) => {
    card.classList.remove(SUSTABILITY_GALERY_CARD_NONE)
  })
  this.style.display = 'none'
})
//sustainabilityGalery END

//socials  START
const socials = document.querySelector('.socials')
const socialsCards = socials.querySelectorAll('.socials__card')

socialsCards.forEach((card, index) => {
  const delay = 1 + 0.1 * index
  card.style.transitionDelay = `${delay}s`
})

socials.addEventListener('mouseenter', (event) => togleMainScroll(false))
socials.addEventListener('mouseleave', (event) => togleMainScroll(true))
//socials  END

//deep-page-slider  START
const deepPageSliders = document.querySelectorAll('.deep-page-slider')
deepPageSliders.forEach((deepPage) => {
  const deepPageSliderSlides = deepPage.querySelectorAll('.swiper-slide')
  deepPageSliderSlides.forEach((card, index) => {
    const delay = 0.8 + 0.05 * index
    card.style.transitionDelay = `${delay}s`
  })
})
//deep-page-slider  END

//cosmic-careers-slider  START
const cosmicCareersSlider = document.querySelector('.cosmic-careers-slider')
const deepPageSliderSlides = cosmicCareersSlider.querySelectorAll('.swiper-slide')
deepPageSliderSlides.forEach((card, index) => {
  const delay = 0.8 + 0.05 * index
  card.style.transitionDelay = `${delay}s`
})
//cosmic-careers-slider  END

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
    togleMainScroll(false)
    toggleIsBlockBody(false)
    navigation.classList.add('navigation--active')
    navigation.style.zIndex = 9
  } else {
    togleMainScroll(true)
    toggleIsBlockBody(true)
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
    // console.log('transitionend')
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
    console.log(direction, 'navigationItemClick')
    setCurrentPage(clickNumberPage)
    pagination(direction)
    toggleNavigation(false)
  }
}

navigationItems.forEach((item) => {
  item.addEventListener('click', navigationItemClick)
})
//Navigation Main END

nextPageButton.forEach((button) => {
  button.addEventListener('click', navigateDownMobile)
})

function navigateDownMobile(event) {
  event.preventDefault()
  navigateDown(event)
}

function setDirectionForPage(direction) {
  const currPageModal = getCurrentPage()
  if (direction === DIRECTION_DOWN) {
    pages.forEach((page, index) => {
      if (currPageModal >= index + 1) {
        page.classList.add(PAGE_MOVING_DOWN)
        page.classList.remove(PAGE_MOVING_UP)
      } else {
        page.classList.remove(PAGE_MOVING_DOWN)
        page.classList.add(PAGE_MOVING_UP)
      }
    })
  } else {
    pages.forEach((page, index) => {
      if (index === 11) {
        // console.log('if')
      }
      if (currPageModal <= index + 1) {
        if (index === 11) {
          // console.log('if ', currPageModal)
        }
        page.classList.add(PAGE_MOVING_UP)
        page.classList.remove(PAGE_MOVING_DOWN)
      } else {
        if (index === 11) {
          // console.log('else ', currPageModal)
        }
        page.classList.remove(PAGE_MOVING_UP)
        page.classList.add(PAGE_MOVING_DOWN)
      }
    })
  }
}

function pagination(direction, page) {
  if (!getIsMobileDevice()) {
    //DESKTOP navigation
    setDirectionForPage(direction)
    setIsScroling(false)
    setSubstrateBody()

    const currPageModal = getCurrentPage()
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
    if (nextActivePage.classList.contains('deep-page')) {
      header.style.zIndex = 2
    } else {
      header.style.zIndex = 4
    }
    rotater.style.transform = 'rotate(' + (currPageModal - 1) * 180 + 'deg)'
  } else {
    //MOBILE navigation
    console.log(getCurrentPage())
    const currPageModal = getCurrentPage()
    const nextActivePage = document.querySelector('.page-' + currPageModal)
    const sectionPosition = nextActivePage.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    })
  }
}

function navigateUp() {
  let currPageModal = getCurrentPage()
  if (currPageModal == 1) return
  currPageModal--
  setCurrentPage(currPageModal)
  pagination(DIRECTION_DOWN)
}

function navigateDown(event) {
  // event.preventDefault()
  if (getIsMobileDevice()) {
    const pageElement = event.target.closest('.page')
    if (pageElement) {
      const classes = pageElement.className.split(' ')
      const pageClass = classes.find((cls) => cls.startsWith('page-'))
      const pageNumber = pageClass ? pageClass.split('-')[1] : null
      if (pageNumber) setCurrentPage(pageNumber)
    }
  }

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
    navigateDown(e)
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
    navigateDown(e)
  }
}

//Pagination START
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
    navigateDown(e)
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

//Pagination END

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

const pagesHeightForMobile = []
const getNumberPage = (classes) => {
  const pageClass = Array.from(classes).find((cls) => cls.startsWith('page-'))
  if (pageClass) {
    const pageNumber = pageClass.match(/page-(\d+)/)
    if (pageNumber) {
      pageNumber[1]
      return pageNumber[1]
    }
    return null
  }
  return null
}
const handleIntersection = (entries, index, tett) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currObservePage = getNumberPage(entry.target.classList)
      console.log(currObservePage)
      const nextPage = document.querySelector(`.page-${currObservePage}`)
      if (nextPage) {
        nextPage.classList.add('page--mobile-active')
      }
      // if (currObservePage === null) return null
      // if (currObservePage == 1 || currObservePage == 2) {
      //   const heightPage = pagesHeightForMobile[0] + pagesHeightForMobile[1]
      // }
    }
  })
}

//Mobile Sctoll Swipe START
let startX
let startY

function handleTouchStart(event) {
  const touch = event.touches[0]
  startX = touch.clientX
  startY = touch.clientY
}

function handleTouchEnd(event) {
  if (!getIsScroling()) return
  const touch = event.changedTouches[0]
  const endX = touch.clientX
  const endY = touch.clientY
  const diffX = endX - startX
  const diffY = endY - startY
  if (Math.abs(diffY) > Math.abs(diffX)) {
    if (diffY > 0) {
      navigateUp()
    } else {
      navigateDown(event)
    }
  }
}
//Mobile Sctoll Swipe END

function afterPreloader() {
  if (!getIsMobileDevice()) {
    setSubstrateBody()
    document.addEventListener('wheel', scrollHandler)
    document.addEventListener('keydown', keydownHandler)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
  } else {
    setSubstrateBody()
    const pages = document.querySelectorAll('.page')
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 })
    pages.forEach((page, index) => {
      pagesHeightForMobile.push(page.clientHeight)
    })
    pages.forEach((page, index) => {
      observer.observe(page, index)
    })

    // const pagpagesTes = document.querySelector('.pages')
    // document.addEventListener('scroll', function (event) {
    //   console.log('index', event)
    // })
  }

  pageOne.classList.add('page--active')
  substrateBody.classList.add(SUBSTARATE_BODY_ACTIVE)
  paginationBlock.classList.add('pagination--active')
}

rotater.addEventListener('transitionend', function (e) {
  if (!getIsMobileDevice()) {
    togleMainScroll(true)
  }
})

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
      clearInterval(loaderInterval)
      loadingOverlay.classList.add('inactive')
      setTimeout(() => {
        loadingOverlay.classList.add('hidden')
        setTimeout(afterPreloader, afterPreloaderAT)
        toggleIsBlockBody(true)
        setDirectionForPage(DIRECTION_UP)
      }, 100)
    }
  }, speed)
}

startAnimation(500)

// const startPreloader = () => {
//   loadingOverlayContainer.addEventListener('animationend', function () {
//     loadingOverlay.classList.add('inactive')
//   })
//   loadingOverlay.addEventListener('transitionend', function () {
//     loadingOverlay.classList.add('hidden')
//     setTimeout(afterPreloader, afterPreloaderAT)
//   })
// }
let isCurrentMobileDevice = true
window.addEventListener('DOMContentLoaded', async () => {
  setTypeDevice(window.innerWidth)
  startAnimation(DOM_SPEED)
  if (getIsMobileDevice()) {
    isCurrentMobileDevice = true
  } else {
    isCurrentMobileDevice = false
  }
})

window.addEventListener('load', async () => {
  startAnimation(LOAD_SPEED)
})
//Loader END

window.addEventListener('resize', function (event) {
  const width = window.innerWidth
  if (width < desktopSize) {
    if (!isCurrentMobileDevice) {
      setTypeDevice(width)
      isCurrentMobileDevice = true
      window.location.reload()
    }
  } else {
    if (isCurrentMobileDevice) {
      setTypeDevice(width)
      isCurrentMobileDevice = false
      window.location.reload()
    }
  }
})
