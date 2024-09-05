// const circleLoader = document.querySelector('#white')
// const loadingOverlay = document.querySelector('.loading-overlay')
// const STROKE_DASHARRAY = '1685, 1660'
// const STROKE_DASHOFFSET_START = 1910
// const STROKE_DASHOFFSET_FINISH = 3350
// const START_LOAD = 0
// const FINISH_LOAD = 100
// const DOM_SPEED = 40
// const LOAD_SPEED = 20
// const loadingText = document.querySelector('.loading-overlay__text')
// const coefficientDasharray = (STROKE_DASHOFFSET_FINISH - STROKE_DASHOFFSET_START) / FINISH_LOAD

// circleLoader.style.strokeDasharray = STROKE_DASHARRAY
// circleLoader.style.strokeDashoffset = STROKE_DASHOFFSET_START

// let counterText = START_LOAD
// let loaderInterval = null
// let couterSVG = STROKE_DASHOFFSET_START

// function startAnimation(speed) {
//   clearInterval(loaderInterval)
//   loaderInterval = setInterval(() => {
//     counterText++
//     couterSVG = couterSVG + coefficientDasharray
//     circleLoader.style.strokeDashoffset = couterSVG + ''
//     loadingText.innerHTML = counterText + '%'
//     if (counterText >= FINISH_LOAD) {
//       console.log(counterText)
//       clearInterval(loaderInterval)
//     }
//   }, speed)
// }

// startAnimation(500)

// window.addEventListener('DOMContentLoaded', async () => {
//   startAnimation(DOM_SPEED)
// })

// window.addEventListener('load', async () => {
//   startAnimation(LOAD_SPEED)
// })
