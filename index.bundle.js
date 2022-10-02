/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = (content) => {
    const body = document.createElement('div');
    body.classList.add('body', 'temp-border');

    const welcomeHead = document.createElement('div');
    welcomeHead.classList.add('welcome', 'headline');
    welcomeHead.textContent = 'Welcome to Va-11 hall-a';

    const img = document.createElement('img');
    setAttributes(img, {'src': '../src/assets/img/bar.webp', 'alt': 'vallhalla from outside', 'class': 'body-img'});

    const welcomeText = document.createElement('div');
    welcomeText.classList.add('welcome', 'text');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = 'On a small road just seconds away from the main street, somewhere near the slums, you can find the Hall A of the BTC-certified bar coded VA-11...';
    p2.textContent = "...but that's a mouthful, so we just call it Valhalla.";
    p3.textContent = 'A small oasis in the middle of the concrete desert. A fountain of spirits waiting for tired souls.';

    const recommendedContainer = document.createElement('div');
    recommendedContainer.classList.add('recommended-drinks-container');
    const recommended = document.createElement('div');
    const recommended2 = document.createElement('div');
    recommended.classList.add('recommended-drinks')
    recommended2.classList.add('recommended-drinks', 'second');

    recommendedContainer.append(recommended, recommended2);
    welcomeText.append(p1, p2, p3);
    body.append(welcomeHead, img, welcomeText, recommendedContainer);
    content.appendChild(body);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
console.log(`I think it worked!`);


// import './style.css';

function setAttributes(element, attrs) {
    for (let key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
}

const content = document.getElementById('content');

const header = (() => {
    const header = document.createElement('div');
    header.classList.add('header', 'temp-border');

    const logo = document.createElement('img');
    setAttributes(logo, {'src': '../src/assets/img/logo.png', 'alt': 'vallhalla logo', 'class': 'logo temp-border'});
    
    const tab = document.createElement('div');
    tab.classList.add('tab', 'temp-border');   
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    homeBtn.classList.add('home', 'btn');
    menuBtn.classList.add('menu', 'btn');
    aboutBtn.classList.add('about', 'btn');
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    aboutBtn.textContent = 'About';
    homeBtn.addEventListener('click', () => home());
    menuBtn.addEventListener('click', () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content));
    tab.append(homeBtn, menuBtn, aboutBtn);
    header.append(logo, tab);
    content.appendChild(header);    
})();

const home = () => {
    const body = document.createElement('div');
    body.classList.add('body', 'temp-border');

    const welcomeHead = document.createElement('div');
    welcomeHead.classList.add('welcome', 'headline');
    welcomeHead.textContent = 'Welcome to Va-11 hall-a';

    const img = document.createElement('img');
    setAttributes(img, {'src': '../src/assets/img/bar.webp', 'alt': 'vallhalla from outside', 'class': 'body-img'});

    const welcomeText = document.createElement('div');
    welcomeText.classList.add('welcome', 'text');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = 'On a small road just seconds away from the main street, somewhere near the slums, you can find the Hall A of the BTC-certified bar coded VA-11...';
    p2.textContent = "...but that's a mouthful, so we just call it Valhalla.";
    p3.textContent = 'A small oasis in the middle of the concrete desert. A fountain of spirits waiting for tired souls.';

    const recommendedContainer = document.createElement('div');
    recommendedContainer.classList.add('recommended-drinks-container');
    const recommended = document.createElement('div');
    const recommended2 = document.createElement('div');
    recommended.classList.add('recommended-drinks')
    recommended2.classList.add('recommended-drinks', 'second');

    recommendedContainer.append(recommended, recommended2);
    welcomeText.append(p1, p2, p3);
    body.append(welcomeHead, img, welcomeText, recommendedContainer);
    content.appendChild(body);
};

// home();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwRkFBMEY7O0FBRWxIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDO0FBR2xCOzs7Ozs7O1VDcENGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsMEZBQTBGO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9EQUFJO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwRkFBMEY7O0FBRWxIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScsICd0ZW1wLWJvcmRlcicpO1xuXG4gICAgY29uc3Qgd2VsY29tZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lSGVhZC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJywgJ2hlYWRsaW5lJyk7XG4gICAgd2VsY29tZUhlYWQudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBWYS0xMSBoYWxsLWEnO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0QXR0cmlidXRlcyhpbWcsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvaW1nL2Jhci53ZWJwJywgJ2FsdCc6ICd2YWxsaGFsbGEgZnJvbSBvdXRzaWRlJywgJ2NsYXNzJzogJ2JvZHktaW1nJ30pO1xuXG4gICAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJywgJ3RleHQnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdPbiBhIHNtYWxsIHJvYWQganVzdCBzZWNvbmRzIGF3YXkgZnJvbSB0aGUgbWFpbiBzdHJlZXQsIHNvbWV3aGVyZSBuZWFyIHRoZSBzbHVtcywgeW91IGNhbiBmaW5kIHRoZSBIYWxsIEEgb2YgdGhlIEJUQy1jZXJ0aWZpZWQgYmFyIGNvZGVkIFZBLTExLi4uJztcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiLi4uYnV0IHRoYXQncyBhIG1vdXRoZnVsLCBzbyB3ZSBqdXN0IGNhbGwgaXQgVmFsaGFsbGEuXCI7XG4gICAgcDMudGV4dENvbnRlbnQgPSAnQSBzbWFsbCBvYXNpcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBjb25jcmV0ZSBkZXNlcnQuIEEgZm91bnRhaW4gb2Ygc3Bpcml0cyB3YWl0aW5nIGZvciB0aXJlZCBzb3Vscy4nO1xuXG4gICAgY29uc3QgcmVjb21tZW5kZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNvbW1lbmRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcmVjb21tZW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZWNvbW1lbmRlZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNvbW1lbmRlZC5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MnKVxuICAgIHJlY29tbWVuZGVkMi5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MnLCAnc2Vjb25kJyk7XG5cbiAgICByZWNvbW1lbmRlZENvbnRhaW5lci5hcHBlbmQocmVjb21tZW5kZWQsIHJlY29tbWVuZGVkMik7XG4gICAgd2VsY29tZVRleHQuYXBwZW5kKHAxLCBwMiwgcDMpO1xuICAgIGJvZHkuYXBwZW5kKHdlbGNvbWVIZWFkLCBpbWcsIHdlbGNvbWVUZXh0LCByZWNvbW1lbmRlZENvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG5leHBvcnQge1xuICAgIFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coYEkgdGhpbmsgaXQgd29ya2VkIWApO1xuXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cnMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInLCAndGVtcC1ib3JkZXInKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxvZ28sIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nJywgJ2FsdCc6ICd2YWxsaGFsbGEgbG9nbycsICdjbGFzcyc6ICdsb2dvIHRlbXAtYm9yZGVyJ30pO1xuICAgIFxuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInLCAndGVtcC1ib3JkZXInKTsgICBcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdob21lJywgJ2J0bicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudScsICdidG4nKTtcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdidG4nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBob21lKCkpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZW51KGNvbnRlbnQpKTtcbiAgICB0YWIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGFib3V0QnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kKGxvZ28sIHRhYik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpOyAgICBcbn0pKCk7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScsICd0ZW1wLWJvcmRlcicpO1xuXG4gICAgY29uc3Qgd2VsY29tZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lSGVhZC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJywgJ2hlYWRsaW5lJyk7XG4gICAgd2VsY29tZUhlYWQudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBWYS0xMSBoYWxsLWEnO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0QXR0cmlidXRlcyhpbWcsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvaW1nL2Jhci53ZWJwJywgJ2FsdCc6ICd2YWxsaGFsbGEgZnJvbSBvdXRzaWRlJywgJ2NsYXNzJzogJ2JvZHktaW1nJ30pO1xuXG4gICAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJywgJ3RleHQnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdPbiBhIHNtYWxsIHJvYWQganVzdCBzZWNvbmRzIGF3YXkgZnJvbSB0aGUgbWFpbiBzdHJlZXQsIHNvbWV3aGVyZSBuZWFyIHRoZSBzbHVtcywgeW91IGNhbiBmaW5kIHRoZSBIYWxsIEEgb2YgdGhlIEJUQy1jZXJ0aWZpZWQgYmFyIGNvZGVkIFZBLTExLi4uJztcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiLi4uYnV0IHRoYXQncyBhIG1vdXRoZnVsLCBzbyB3ZSBqdXN0IGNhbGwgaXQgVmFsaGFsbGEuXCI7XG4gICAgcDMudGV4dENvbnRlbnQgPSAnQSBzbWFsbCBvYXNpcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBjb25jcmV0ZSBkZXNlcnQuIEEgZm91bnRhaW4gb2Ygc3Bpcml0cyB3YWl0aW5nIGZvciB0aXJlZCBzb3Vscy4nO1xuXG4gICAgY29uc3QgcmVjb21tZW5kZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNvbW1lbmRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcmVjb21tZW5kZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZWNvbW1lbmRlZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNvbW1lbmRlZC5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MnKVxuICAgIHJlY29tbWVuZGVkMi5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRlZC1kcmlua3MnLCAnc2Vjb25kJyk7XG5cbiAgICByZWNvbW1lbmRlZENvbnRhaW5lci5hcHBlbmQocmVjb21tZW5kZWQsIHJlY29tbWVuZGVkMik7XG4gICAgd2VsY29tZVRleHQuYXBwZW5kKHAxLCBwMiwgcDMpO1xuICAgIGJvZHkuYXBwZW5kKHdlbGNvbWVIZWFkLCBpbWcsIHdlbGNvbWVUZXh0LCByZWNvbW1lbmRlZENvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbi8vIGhvbWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9