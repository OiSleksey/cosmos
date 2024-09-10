export const afterPreloaderAT = 200
let isScrolling = true
let curPage = 1
export const desktopSize = 1024

export function getCurrentPage() {
  return curPage
}

export function setCurrentPage(page) {
  curPage = page
}

export function getIsScroling() {
  return isScrolling
}

export function setIsScroling(state) {
  isScrolling = state
}

let isMobileDevice = true

export function setTypeDevice(size) {
  if (size < desktopSize) {
    isMobileDevice = true
  } else {
    isMobileDevice = false
  }

  // isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //   navigator.userAgent,
  // )
}

export function getIsMobileDevice() {
  return isMobileDevice
}

const header = document.querySelector('.header')
const HIDDEN_HEADER = 'header--hidden'
const NO_SCROLL = 'no-scroll'

export function toggleIsBlockBody(state) {
  if (!getIsMobileDevice()) return null
  if (!state) {
    document.body.classList.add(NO_SCROLL)
  } else {
    document.body.classList.remove(NO_SCROLL)
  }
}

export function toggleVisibleHeader(state) {
  if (!getIsMobileDevice()) return null
  if (!state) {
    header.classList.add(HIDDEN_HEADER)
  } else {
    header.classList.remove(HIDDEN_HEADER)
  }
}
