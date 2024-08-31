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
const PAGE_MOVING_UP = 'page--moving-up'
const PAGE_MOVING_DOWN = 'page--moving-down'
const DIRECTION_UP = 'direction-up'
const DIRECTION_DOWN = 'direction-down'

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
  const currPageModal = getCurrentPage()
  setTimeout(() => {
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
  }, 100)
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
const startPreloader = () => {
  preloaderOverlay.addEventListener('animationend', function () {
    preloader.classList.add('inactive')
  })
  preloader.addEventListener('transitionend', function () {
    preloader.classList.add('hidden')
    setTimeout(afterPreloader, afterPreloaderAT)
  })
}

function afterPreloader() {
  pageOne.classList.add('page--active')
  substrateBody.classList.add('substrate-body--active')
  paginationBlock.classList.add('pagination--active')

  document.addEventListener('wheel', scrollHandler)
  document.addEventListener('keydown', keydownHandler)
}

rotater.addEventListener('transitionend', function (e) {
  setIsScroling(true)
})

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  startPreloader()
})
