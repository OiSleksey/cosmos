const preloader = document.querySelector('.preloader')
const afterPreloaderAT = 200
let scrolling = false
let curPage = 1
const pages = document.querySelectorAll('.page')
const numOfPages = pages.length
const rotater = document.querySelector('.rotater')
const preloaderOverlay = document.querySelector('.preloader__overlay')
const pageOne = document.querySelector('.page-1')
const paginationBlock = document.querySelector('.pagination')

document.addEventListener('DOMContentLoaded', function () {
  preloaderOverlay.addEventListener('animationend', function () {
    preloader.classList.add('inactive')
  })

  function afterPreloader() {
    pageOne.classList.add('active')
    paginationBlock.classList.add('active')

    document.addEventListener('wheel', scrollHandler)
    document.addEventListener('keydown', keydownHandler)
  }

  preloader.addEventListener('transitionend', function () {
    preloader.classList.add('hidden')

    setTimeout(afterPreloader, afterPreloaderAT)
  })

  function pagination(page) {
    if (page) curPage = page

    scrolling = true
    const pageActive = document.querySelectorAll('.page.active')
    pageActive.forEach((page) => page.classList.remove('active'))
    document.querySelector('.page-' + curPage).classList.add('active')
    document
      .querySelectorAll('.pagination__item.active')
      .forEach((item) => item.classList.remove('active'))
    document.querySelector('.pagination__item[data-page="' + curPage + '"]').classList.add('active')
    rotater.style.transform = 'rotate(' + (curPage - 1) * 180 + 'deg)'
  }

  function navigateUp() {
    if (curPage === 1) return
    curPage--
    pagination()
  }

  function navigateDown() {
    if (curPage === numOfPages) return
    curPage++
    pagination()
  }

  function scrollHandler(e) {
    if (scrolling) return
    if (e.deltaY < 0) {
      navigateUp()
    } else {
      navigateDown()
    }
  }

  function keydownHandler(e) {
    if (scrolling) return
    if (e.key === 'ArrowUp') {
      navigateUp()
    } else if (e.key === 'ArrowDown') {
      navigateDown()
    }
  }

  function paginationClickHandler(e) {
    if (scrolling) return
    const item = e.target.closest('.pagination__item:not(.active)')
    if (item) {
      const page = item.getAttribute('data-page')
      pagination(page)
    }
  }

  document.addEventListener('click', paginationClickHandler)

  function paginationArrowHandler(e) {
    if (scrolling) return
    if (e.target.classList.contains('js-up')) {
      navigateUp()
    } else {
      navigateDown()
    }
  }

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('pagination__arrow')) {
      paginationArrowHandler(e)
    }
  })

  rotater.addEventListener('transitionend', function (e) {
    console.log(e)
    scrolling = false
  })
})
