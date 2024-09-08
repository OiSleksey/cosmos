export const afterPreloaderAT = 200
let isScrolling = true
let curPage = 1

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

export function setTypeDevice() {
  isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

export function getTypeDevice() {
  return isMobileDevice
}
