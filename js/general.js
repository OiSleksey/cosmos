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

//scroll main START
export function togleMainScroll(state) {
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
    setIsScroling(true)
  } else {
    setIsScroling(false)
  }
}
//scroll main END

const headerContainer = document.querySelector('.header__container')
const HIDDEN_HEADER = 'header__container--hidden'
const closeHeaderButton = document.querySelector('.header__close')
const NO_SCROLL = 'no-scroll'
const HEADER_CLOSE_ACTIVE = 'header__close--active'

export function toggleIsBlockBody(state) {
  if (!getIsMobileDevice()) return null
  if (!state) {
    document.body.classList.add(NO_SCROLL)
  } else {
    document.body.classList.remove(NO_SCROLL)
  }
}

export function toggleVisibleHeader(state, displayClose) {
  if (!getIsMobileDevice()) return null
  if (!state) {
    headerContainer.classList.add(HIDDEN_HEADER)
    if (displayClose) {
      closeHeaderButton.classList.add(HEADER_CLOSE_ACTIVE)
    }
  } else {
    headerContainer.classList.remove(HIDDEN_HEADER)
    if (displayClose) {
      closeHeaderButton.classList.remove(HEADER_CLOSE_ACTIVE)
    }
  }
}

export function toggleVisibleDarkContent(state) {
  if (!getIsMobileDevice()) return null

  const darkPageContainer = document.querySelectorAll('.dark-page__container')
  const deepPageContents = document.querySelectorAll('.deep-page__content')
  const substrateFirstWomanMobile = document.querySelector('.substrate-first-woman-mobile')
  darkPageContainer.forEach((content) => {
    if (state) {
      content.classList.remove('dark-page__container--hidden')
    } else {
      content.classList.add('dark-page__container--hidden')
    }
  })
  deepPageContents.forEach((content) => {
    if (state) {
      content.classList.remove('deep-page__content--hidden')
    } else {
      content.classList.add('deep-page__content--hidden')
    }
  })

  if (state) {
    substrateFirstWomanMobile.classList.remove('substrate-first-woman-mobile--hidden')
  } else {
    substrateFirstWomanMobile.classList.add('substrate-first-woman-mobile--hidden')
  }
}

export function updateSustainabilityGaleryImg() {
  const sustainabilityGalery = document.querySelector('.sustainability-galery')
  const imgContainer = sustainabilityGalery.querySelectorAll(
    '.sustainability-galery__img-container',
  )
  imgContainer.forEach((slide) => {
    const width = slide.clientWidth
    slide.style.height = `${width / 1.5}px`
  })
}
