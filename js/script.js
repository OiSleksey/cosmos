const circleLoader = document.querySelector('#white')
const loadingOverlay = document.querySelector('#loading-overlay')
const STROKE_DASHARRAY = '1685, 1660'
const STROKE_DASHOFFSET_START = 1910
const STROKE_DASHOFFSET_FINISH = 3350
const START_LOAD = 0
const FINISH_LOAD = 100
const loadingText = document.querySelector('.loading-overlay__text')
// circleLoader.style.strokeDasharray = STROKE_DASHARRAY
// circleLoader.style.strokeDashoffset = STROKE_DASHOFFSET_START

function startAnimation() {
  // Устанавливаем начальные значения
  let couterText = 0
  let couterSVG = STROKE_DASHOFFSET_START
  const coefficientDasharray = (STROKE_DASHOFFSET_FINISH - STROKE_DASHOFFSET_START) / FINISH_LOAD

  setTimeout(() => {
    const loaderInterval = setInterval(() => {
      couterText++
      couterSVG = couterSVG + coefficientDasharray
      circleLoader.style.strokeDashoffset = couterSVG + ''
      loadingText.innerHTML = couterText + '%'
      if (couterText >= FINISH_LOAD) {
        console.log(couterText)
        clearInterval(loaderInterval)
      }
    }, 40)
  }, 2000)
}

// Пример использования функций

// Если хотите обновить параметры анимации, вызовите updateAnimation с новыми значениями
// updateAnimation({
//   strokeDasharray: '1600, 1580',
//   strokeDashoffset: '2500',
//   animationDuration: '3s',
//   animationDelay: '1s'
// });
/* Scroll to top script */
// var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
// var rootElement = document.documentElement;

// function handleScroll() {
// 	// Do something on scroll
//     console.log('scroll')
// 	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
// 	if (rootElement.scrollTop / scrollTotal > 0.15) {
// 		// Show button
// 		scrollToTopBtn.classList.add("showBtn");
// 	} else {
// 		// Hide button
// 		scrollToTopBtn.classList.remove("showBtn");
// 	}
// }

// function scrollToTop() {
// 	// Scroll to top logic
// 	rootElement.scrollTo({
// 		top: 0,
// 		behavior: "smooth"
// 	});
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);
// document.addEventListener("scroll", handleScroll);
const timeStart = Date.now()

window.addEventListener('DOMContentLoaded', async () => {
  return null
  startAnimation()
  const timeDOMLoaded = Date.now()
  const durationDOMLoaded = timeDOMLoaded - timeStart
  console.log('DOMContentLoaded ', durationDOMLoaded)
})

window.addEventListener('load', async () => {
  return null
  const timeDOMLoaded = Date.now()
  const durationLoaded = timeDOMLoaded - timeStart
  console.log('load ', durationLoaded)
  loadingOverlay.style.display = 'none'
})
// const loadingOverlay = document.getElementById('loading-overlay');
// const loadingBar = document.getElementById('loading-bar');
// const loadingText = document.getElementById('loading-text');
// const content = document.getElementById('content');

// function loadResource() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'large-file-url', true);
//     console.log('loadResource')
//     xhr.onprogress = function(event) {
//         if (event.lengthComputable) {
//             const percentComplete = (event.loaded / event.total) * 100;
//             loadingBar.style.width = `${percentComplete}%`;
//             loadingText.textContent = `Loading... ${Math.round(percentComplete)}%`;
//         }
//         console.log('onprogress')
//     };

//     xhr.onload = function() {
//         console.log('onload')
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Загрузка завершена
//             loadingOverlay.style.display = 'none';
//             content.style.display = 'block';
//         } else {
//             console.error('Failed to load resource');
//         }
//     };

//     xhr.onerror = function() {
//         console.log('onerror')
//         console.error('Error occurred during the request');
//     };

//     xhr.send();
// }

// document.addEventListener('DOMContentLoaded', loadResource);
