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
  togleMainScroll,
  toggleVisibleDarkContent,
  toggleVisibleHeader,
  updateSustainabilityGaleryImg,
} from '../js/general.js'

const substrateBody = document.querySelector('.substrate-body')
const pages = document.querySelectorAll('.page')
const numOfPages = pages.length
const rotater = document.querySelector('.rotater')
const pageOne = document.querySelector('.page-1')
const nextPageButton = document.querySelectorAll('.next-page-button')
const PAGE_MOVING_UP = 'page--moving-up'
const PAGE_MOVING_DOWN = 'page--moving-down'
const DIRECTION_UP = 'direction-up'
const DIRECTION_DOWN = 'direction-down'
const SUBSTARATE_BODY_TO_BOTTOM = 'substrate-body--to-bottom'
const SUBSTARATE_BODY_TO_TOP = 'substrate-body--to-top'
const SUBSTARATE_BODY_ACTIVE = 'substrate-body--active'
const header = document.querySelector('.header')

//infoButton START
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover)
})
//infoButton END

//showUpCosmicCareers START
const showUpCosmicCareers = document.querySelector('.show-up-cosmic-careers')
const SHOW_UP_COSMIC_CAREERS_MOVING_UP = 'show-up-cosmic-careers--moving-up'

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
const SUSTABILITY_GALERY_CARD_HIDDEN = 'sustainability-galery__card--hidden'
const SUSTABILITY_GALERY_CARD_VISIBLE = 'sustainability-galery__card--visible'

// sustainabilityGalery.addEventListener('mouseenter', (event) => togleMainScroll(false))
// sustainabilityGalery.addEventListener('mouseleave', (event) => togleMainScroll(true))
sustainabilityGaleryButton.addEventListener('click', function () {
  sustainabilityGaleryCards.forEach((card) => {
    card.classList.remove(SUSTABILITY_GALERY_CARD_HIDDEN)
    updateSustainabilityGaleryImg()
    setTimeout(() => {
      card.classList.add(SUSTABILITY_GALERY_CARD_VISIBLE)
    }, 100)
  })
  this.style.display = 'none'
})

//sustainabilityGalery END

//socials  START
const socials = document.querySelector('.socials')

// socials.addEventListener('mouseenter', (event) => togleMainScroll(false))
// socials.addEventListener('mouseleave', (event) => togleMainScroll(true))
//socials  END

function setDelayCards() {
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

  //socials  START
  const socialsCards = socials.querySelectorAll('.socials__card')
  socialsCards.forEach((card, index) => {
    const delay = 1 + 0.1 * index
    card.style.transitionDelay = `${delay}s`
  })
  //socials  END
}

let counterSustainabilityGaleryCard = 0

function setDelaySustainabilityGaleryCard() {
  sustainabilityGaleryCards.forEach((card) => {
    if (card.classList.contains(SUSTABILITY_GALERY_CARD_HIDDEN)) {
      const delay = 0.2 * counterSustainabilityGaleryCard
      card.style.transitionDelay = `${delay}s`
      counterSustainabilityGaleryCard++
    }
  })
}

function startGalerry(count) {
  sustainabilityGaleryCards.forEach((card, index) => {
    if (index < count) {
      card.classList.add('sustainability-galery__card--visible')
    } else {
      card.classList.add('sustainability-galery__card--hidden')
    }
    // if (!card.classList.contains('sustainability-galery__card--hidden')) {
    //   card.classList.add('sustainability-galery__card--visible')
    // }
  })
  setDelaySustainabilityGaleryCard()
}

//Navigation Main START
const navigationClose = document.querySelector('#navigationClose')
const navigationOpen = document.querySelector('#navigationOpen')
const navigation = document.querySelector('.navigation')
const navigationItems = document.querySelectorAll('.navigation__item')

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

navigation.addEventListener('transitionend', function (event) {
  if (event.target.classList.contains('navigation--active')) {
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

nextPageButton.forEach((button) => {
  button.addEventListener('click', navigateDownMobile)
})

function navigateDownMobile(event) {
  event.preventDefault()

  navigateDown(true)
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
      if (currPageModal <= index + 1) {
        page.classList.add(PAGE_MOVING_UP)
        page.classList.remove(PAGE_MOVING_DOWN)
      } else {
        page.classList.remove(PAGE_MOVING_UP)
        page.classList.add(PAGE_MOVING_DOWN)
      }
    })
  }
}

function setRotater(currPage) {
  togleMainScroll(false)
  // IMPORTANT. This component in the desktop version starts and stops scrolling. START
  rotater.style.transform = 'rotate(' + currPage * 180 + 'deg)'
  // IMPORTANT. This component in the desktop version starts and stops scrolling. END
}

function pagination(direction, page) {
  if (!getIsMobileDevice()) {
    //DESKTOP navigation
    setDirectionForPage(direction)
    setSubstrateBody()

    const currPageModal = getCurrentPage()
    if (currPageModal == NUMBER_SUBSTRATE_FIRST_WOMAN) {
      toggleSubstrateFirstWomen(true)
    } else {
      toggleSubstrateFirstWomen(false)
    }
    toggleEducatorsShow(currPageModal)
    const pageActive = document.querySelectorAll('.page.page--active')
    const nextActivePage = document.querySelector('.page-' + currPageModal)
    pageActive.forEach((page) => page.classList.remove('page--active'))
    nextActivePage.classList.add('page--active')
    // }, 3000)

    if (nextActivePage.classList.contains('deep-page')) {
      header.style.zIndex = 2
    } else {
      header.style.zIndex = 4
    }
    setRotater(currPageModal)
  } else {
    //MOBILE navigation
    const currPageModal = getCurrentPage()
    const nextActivePage = document.querySelector('.page-' + currPageModal)
    const sectionPosition = nextActivePage.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    })
  }
}

function setPositionSubstrateBody(currPage) {
  if (currPage % 2) {
    substrateBody.classList.add('substrate-body--left')
    substrateBody.classList.remove('substrate-body--right')
  } else {
    substrateBody.classList.add('substrate-body--right')
    substrateBody.classList.remove('substrate-body--left')
  }
}

let isScrollUp = false
let isTop = false

function navigateUp() {
  let currPageModal = getCurrentPage()
  if (toggleEducatorsActive(currPageModal, false, 'up')) return null
  if (currPageModal == 1) return
  const currPage = document.querySelector(`.page-${currPageModal}`)
  const scrollTopHeightCurrPage = currPage.scrollTop

  if (isTop) isScrollUp = true
  if (scrollTopHeightCurrPage >= 10) {
    return null
  } else {
    isTop = true
  }

  if (!isScrollUp) {
    return null
  }
  //

  //
  // const currActivePage = document.querySelector('.page-' + currPageModal)
  // currActivePage.scroll({ top: 0 })
  isScrollDown = false
  isBottom = false
  setPositionSubstrateBody(currPageModal)
  if (currPageModal == 16) {
    currPageModal = parseFloat(currPageModal) - 2
  } else {
    currPageModal--
  }

  setCurrentPage(currPageModal)
  pagination(DIRECTION_DOWN)
}
let scrollForEducators = false
const showUpEducators = document.querySelector('.show-up-educators')
showUpEducators.addEventListener('transitionend', function (e) {
  setTimeout(() => {
    togleMainScroll(true)
    scrollForEducators = true
  }, 1000)
})
showUpEducators.addEventListener('click', function (e) {
  toggleEducatorsActive(14, true, 'down')
})

let maxHeightCaptions = 0
const cosmicCareersSliderCaptions = document.querySelectorAll('.cosmic-careers-slider__caption')

cosmicCareersSliderCaptions.forEach((caption) => {
  if (maxHeightCaptions < caption.offsetHeight) {
    maxHeightCaptions = caption.offsetHeight
  }
})

function toggleCosmicCareersSliderHeight(state) {
  if (state) {
    cosmicCareersSliderCaptions.forEach((caption) => {
      caption.style.maxHeight = 0 + 'px'
    })
  } else {
    cosmicCareersSliderCaptions.forEach((caption) => {
      caption.style.maxHeight = maxHeightCaptions + 30 + 'px'
    })
  }
}

function toggleEducatorsActive(currPage, state, direction) {
  if (currPage == 14) {
    togleMainScroll(false)
    if (direction === 'up') {
      if (showUpEducators.classList.contains('show-up-educators--active')) {
        showUpEducators.classList.remove('show-up-educators--active')
        toggleCosmicCareersSliderHeight(false)
        scrollForEducators = true
      } else {
        scrollForEducators = false
      }
    } else {
      if (showUpEducators.classList.contains('show-up-educators--active')) {
        showUpEducators.classList.remove('show-up-educators--active')
        toggleCosmicCareersSliderHeight(false)
        scrollForEducators = false
      } else {
        showUpEducators.classList.add('show-up-educators--active')
        toggleCosmicCareersSliderHeight(true)
        scrollForEducators = true
      }
    }
    return scrollForEducators
  }

  return false
}

function toggleEducatorsShow(currPage, state) {
  const showUpEducators = document.querySelector('.show-up-educators')
  if (currPage == 14) {
    showUpEducators.classList.add('show-up-educators--show')
  } else {
    showUpEducators.classList.remove('show-up-educators--show')
  }
}

let isScrollDown = false
let isBottom = false

function navigateDown(isButtonClick) {
  let currPageModal = getCurrentPage()
  if (currPageModal == numOfPages) return
  if (!getIsMobileDevice()) {
    const currPage = document.querySelector(`.page-${currPageModal}`)
    const offsetHeightCurrPage = currPage.offsetHeight
    const scrollHeightCurrPage = currPage.scrollHeight
    const scrollTopHeightCurrPage = currPage.scrollTop

    if (!isButtonClick) {
      if (isBottom) isScrollDown = true
      if (scrollHeightCurrPage - offsetHeightCurrPage - scrollTopHeightCurrPage >= 10) {
        isScrollDown = false
        toggleEducatorsActive(currPageModal, true, 'down')
        return null
      } else {
        isBottom = true
      }

      if (!isScrollDown) {
        return null
      }
    }
    if (toggleEducatorsActive(currPageModal, false, 'down')) return null
    const currActivePage = document.querySelector('.page-' + currPageModal)
    // currActivePage.scroll({ top: 0 })
  }
  isScrollDown = false
  isBottom = false
  setPositionSubstrateBody(currPageModal)
  if (currPageModal == 14) {
    currPageModal = parseFloat(currPageModal) + 2
  } else {
    currPageModal++
  }

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

const getNumberPage = (classes) => {
  const pageClass = Array.from(classes).find((item) => item.startsWith('page-'))
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

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currObservePage = getNumberPage(entry.target.classList)
      setCurrentPage(currObservePage - 1)
      const nextPage = document.querySelector(`.page-${currObservePage}`)
      if (nextPage) {
        nextPage.classList.add('page--mobile-active')
      }
    }
  })
}

//Mobile Scroll Swipe START
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
      navigateDown()
    }
  }
}
//Mobile Scroll Swipe END

function afterPreloader() {
  if (!getIsMobileDevice()) {
    //DESKTOP
    setRotater(getCurrentPage())
    setSubstrateBody()
    document.addEventListener('wheel', scrollHandler)
    document.addEventListener('keydown', keydownHandler)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
    pages.forEach((page, index) => {
      page.style.overflowY = 'auto'
    })
  } else {
    //MOBILE
    setSubstrateBody()
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 })
    pages.forEach((page, index) => {
      observer.observe(page, index)
    })
  }

  pageOne.classList.add('page--active')
  // pageOne.style.overflowY = 'auto'
  substrateBody.classList.add(SUBSTARATE_BODY_ACTIVE)
}

//show-up START
const showUpHomeOpenButtons = document.querySelectorAll('.home-page__button')
const showUpSubmitOpenButton = document.querySelector('.submit-open-button')
const showUpHomeWrapper = document.querySelectorAll('.show-up-home')
const showUpSubmitWrapper = document.querySelector('.show-up-submit')
const closeHeaderButton = document.querySelector('.header__close')
const showUpSubmitCloseButton = document.querySelector('.show-up-submit__close')
const SHOW_UP_HOME_ACTIVE = 'show-up-home--active'
const SHOW_UP_SUBMIT_ACTIVE = 'show-up-submit--active'
const overlayBody = document.querySelector('.overlay-body')
const showUpSocials = document.querySelectorAll('.show-up-socials')
const SHOW_UP_SOCIALS_ACTIVE = 'show-up-socials--active'

const setStyleOverlayBody = (state) => {
  if (state) {
    overlayBody.classList.add('overlay-body--active')
  } else {
    overlayBody.classList.remove('overlay-body--active')
  }
}

function toggleVisibleHomeContent(state) {
  if (!getIsMobileDevice()) return null

  const homePageContent = document.querySelector('.home-page__content')
  if (state) {
    homePageContent.classList.remove('home-page__content--hidden')
  } else {
    homePageContent.classList.add('home-page__content--hidden')
  }
}

showUpHomeOpenButtons.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    setIsScroling(false)
    setStyleOverlayBody(true)
    showUpHomeWrapper[index].classList.add(SHOW_UP_HOME_ACTIVE)
    toggleIsBlockBody(false)
    toggleVisibleHeader(false, true)
    toggleVisibleHomeContent(false)
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
  toggleVisibleHomeContent(true)
}

showUpHomeWrapper.forEach(function (wrapper, index) {
  const closeButton = wrapper.querySelector('.show-up-home__close')
  closeButton.addEventListener('click', () => closeShoupHome(index))
  closeHeaderButton.addEventListener('click', () => closeShoupHome(index, true))
  //show-up-home__button START
  const showUpHomeButton = wrapper.querySelectorAll('.show-up-home__button')
  showUpHomeButton.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault()
      const clickNumberPage = button.dataset?.page
      if (clickNumberPage) {
        closeShoupHome(index, true)
        const direction = getCurrentPage() < clickNumberPage ? DIRECTION_UP : DIRECTION_DOWN
        setCurrentPage(clickNumberPage)
        pagination(direction)
        toggleNavigation(false)
      }
    })
  })
  //show-up-home__button END
})

//show-up-submit START

showUpSubmitOpenButton.addEventListener('click', function (event) {
  setIsScroling(false)
  setStyleOverlayBody(true)
  showUpSubmitWrapper.classList.add(SHOW_UP_SUBMIT_ACTIVE)
  toggleIsBlockBody(false)
  toggleVisibleHeader(false, true)
  toggleVisibleDarkContent(false)
})

function closeShoupSubmit(displayClose) {
  setIsScroling(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true, displayClose)
  setStyleOverlayBody(false)
  showUpSubmitWrapper.classList.remove(SHOW_UP_SUBMIT_ACTIVE)
  toggleVisibleDarkContent(true)
}

showUpSubmitCloseButton.addEventListener('click', () => closeShoupSubmit())
closeHeaderButton.addEventListener('click', () => closeShoupSubmit(true))
//show-up-submit END

function closeShoupSocials(index, displayClose) {
  setIsScroling(true)
  toggleIsBlockBody(true)
  toggleVisibleHeader(true, displayClose)
  setStyleOverlayBody(false)
  showUpSocials[index].classList.remove(SHOW_UP_SOCIALS_ACTIVE)
  toggleVisibleDarkContent(true)
}

showUpSocials.forEach(function (wrapper, index) {
  const closeButton = wrapper.querySelector('.show-up-socials__close')
  closeButton.addEventListener('click', () => closeShoupSocials(index))
})

//show-up-socials END

//show-up END

//Loader START
const circleLoader = document.querySelector('#loadingCircle')
const loadingOverlay = document.querySelector('.loading-overlay')
const STROKE_DASHARRAY = '1685, 1660'
const STROKE_DASHOFFSET_START = 1910
const STROKE_DASHOFFSET_FINISH = 3350
const START_LOAD = 0
const FINISH_LOAD = 100
const DOM_SPEED = 100
const LOAD_SPEED = 20
const loadingText = document.querySelector('.loading-overlay__text')
const coefficientDasharray = (STROKE_DASHOFFSET_FINISH - STROKE_DASHOFFSET_START) / FINISH_LOAD
let counterTextLoading = START_LOAD
let loaderInterval = null
let couterSVGLoading = STROKE_DASHOFFSET_START

circleLoader.style.strokeDasharray = STROKE_DASHARRAY
circleLoader.style.strokeDashoffset = STROKE_DASHOFFSET_START

let isEndLoad = false
let timeoutEndAnimation = null
function setCancelLoad() {
  if (!isEndLoad) {
    clearInterval(timeoutEndAnimation)
    timeoutEndAnimation = setTimeout(() => {
      setCancelLoad()
    }, 500)
  } else {
    loadingOverlay.classList.add('inactive')
    setTimeout(() => {
      loadingOverlay.classList.add('hidden')
      setTimeout(afterPreloader, afterPreloaderAT)
      toggleIsBlockBody(true)
      setDirectionForPage(DIRECTION_UP)
    }, 100)
  }
}

function startAnimation(speed) {
  clearInterval(loaderInterval)
  loaderInterval = setInterval(() => {
    counterTextLoading++
    couterSVGLoading = couterSVGLoading + coefficientDasharray
    circleLoader.style.strokeDashoffset = couterSVGLoading + ''
    loadingText.innerHTML = counterTextLoading + '%'
    if (counterTextLoading >= FINISH_LOAD) {
      clearInterval(loaderInterval)
      setCancelLoad()
    }
  }, speed)
}

startAnimation(500)

function scrollToTop() {
  window.scrollTo({
    top: 0,
  })
}

scrollToTop()

function setOverflowPages() {
  const currPage = getCurrentPage()
  pages.forEach((page, index) => {
    if (currPage == index + 1) {
      page.style.overflowY = 'auto'
    } else {
      page.style.overflowY = 'hidden'
    }
  })
}
// let timeOutPageTransition
// const animationElements = document.querySelectorAll('.animation-element')
// function setEventTransitinPages() {
//   animationElements.forEach((element, index) => {
//     element.addEventListener('transitionend', function (event) {
//       event.stopPropagation()
//       clearInterval(timeOutPageTransition)
//       timeOutPageTransition = setTimeout(() => {
//         setOverflowPages()
//       }, 200)
//     })
//   })
// }

let isCurrentMobileDevice = true
window.addEventListener('DOMContentLoaded', async () => {
  setTypeDevice(window.innerWidth)
  startAnimation(DOM_SPEED)
  if (getIsMobileDevice()) {
    isCurrentMobileDevice = true
    startGalerry(4)
  } else {
    isCurrentMobileDevice = false
    startGalerry(8)
  }
})

window.addEventListener('load', async () => {
  startAnimation(LOAD_SPEED)
  isEndLoad = true
  if (!getIsMobileDevice()) {
    setDelayCards()
    setOverflowPages()
  } else {
  }

  updateSustainabilityGaleryImg()

  // setEventTransitinPages()
  // heightPageContent()
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

// IMPORTANT. This component in the desktop version starts and stops scrolling. START
rotater.addEventListener('transitionend', function (e) {
  if (!getIsMobileDevice()) {
    // console.log('transition')
    setOverflowPages()
    togleMainScroll(true)
  }
})
// IMPORTANT. This component in the desktop version starts and stops scrolling. END
const pageContent = document.querySelectorAll('.page__content')
function heightPageContent() {
  pageContent.forEach((content, index) => {
    const parentPage = content.closest('.page')
    const computedStyles = window.getComputedStyle(parentPage)
    const paddingTop = parseFloat(computedStyles.paddingTop)
    const paddingBottom = parseFloat(computedStyles.paddingBottom)

    const heightPage = parentPage.offsetHeight
    const maxHeightContent = heightPage - paddingTop - paddingBottom
    console.log(heightPage)
    console.log(maxHeightContent)
    // content.style.maxHeight = maxHeightContent + 'px'
  })
}
