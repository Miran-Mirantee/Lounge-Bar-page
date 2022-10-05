/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/setAttrs.js":
/*!*************************!*\
  !*** ./src/setAttrs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setAttributes(element, attrs) {
    for (let key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAttributes);

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
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setAttrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttrs.js */ "./src/setAttrs.js");


const about = (content) => {
    const body = document.createElement('div');
    body.classList.add('body');

    const headline = document.createElement('div');
    headline.classList.add('about', 'headline');
    headline.textContent = 'About VA-11 Hall-A';

    const jillVid = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVid, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'vid'});
    const jillVidSrc = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVidSrc, {'src': '../src/assets/video/glitch-anime.mp4', 'type': 'video/mp4'});
    jillVid.appendChild(jillVidSrc);

    const text1 = document.createElement('div');
    text1.classList.add('about', 'text');
    const text1p1 = document.createElement('p');
    text1p1.textContent = `VA-11 HALL-A: Cyberpunk Bartender Action is a booze em' up about waifus, 
        technology, and post-dystopia life.`;
    const text1p2 = document.createElement('p');
    text1p2.textContent = `In this world, corporations reign supreme, 
        all human life is infected with nanomachines designed to oppress them, 
        and the terrifying White Knights ensure that everyone obeys the laws.`;
    const text1p3 = document.createElement('p');
    text1p3.textContent = `But, this is not about those people.`;
    text1.append(text1p1, text1p2, text1p3);

    const almaVid = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(almaVid, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'vid'});
    const almaVidSrc = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(almaVidSrc, {'src': '../src/assets/video/va11halla-alma.mp4', 'type': 'video/mp4'});
    almaVid.appendChild(almaVidSrc);

    const text2 = document.createElement('div');
    text2.classList.add('about', 'text');
    const text2p1 = document.createElement('p');
    text2p1.textContent = `You are a bartender at VA-11 HALL-A, affectionately nicknamed "Valhalla."
        Although it is just a small bar downtown, 
        it attracts the most fascinating people this side of dystopia.
        Keep your clients lubricated and you will be made privy to the most interesting stories.`;
    text2.append(text2p1);

    const offer = document.createElement('div');
    offer.classList.add('offer');
    const dorothyVid = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'portrait'});
    const dorothyVidSrc = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc, {'src': '../src/assets/video/va11halla-dorothy.mp4', 'type': 'video/mp4'});
    dorothyVid.appendChild(dorothyVidSrc);
    const signUp = document.createElement('div');
    signUp.classList.add('sign-up');
    const plushText = document.createElement('div');
    plushText.classList.add('plush', 'text');
    plushText.textContent = `Sign up now and get FREE Jill plushie!!!`;
    const plushImg = document.createElement('img');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(plushImg, {'src': '../src/assets/img/jill-jill-fumo.gif', 'alt': 'jill plushie', 'class': 'plush-img'});
    const button = document.createElement('button');
    button.classList.add('plush', 'btn');
    button.textContent = `Click here!`;
    signUp.append(plushText, plushImg, button);
    offer.append(dorothyVid, signUp);

    body.append(headline, jillVid, text1, almaVid, text2, offer);
    content.appendChild(body);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUNONUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMsbUVBQW1FO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMscUVBQXFFO0FBQ3BHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxjQUFjLDZEQUE2RDtBQUM1RjtBQUNBLElBQUksd0RBQWEsaUJBQWlCLHdFQUF3RTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWEsWUFBWSwyRkFBMkY7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL3NldEF0dHJzLmpzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRBdHRyaWJ1dGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi9zZXRBdHRycy5qcyc7XG5cbmNvbnN0IGFib3V0ID0gKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ2hlYWRsaW5lJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQWJvdXQgVkEtMTEgSGFsbC1BJztcblxuICAgIGNvbnN0IGppbGxWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoamlsbFZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3ZpZCd9KTtcbiAgICBjb25zdCBqaWxsVmlkU3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgc2V0QXR0cmlidXRlcyhqaWxsVmlkU3JjLCB7J3NyYyc6ICcuLi9zcmMvYXNzZXRzL3ZpZGVvL2dsaXRjaC1hbmltZS5tcDQnLCAndHlwZSc6ICd2aWRlby9tcDQnfSk7XG4gICAgamlsbFZpZC5hcHBlbmRDaGlsZChqaWxsVmlkU3JjKTtcblxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAndGV4dCcpO1xuICAgIGNvbnN0IHRleHQxcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDFwMS50ZXh0Q29udGVudCA9IGBWQS0xMSBIQUxMLUE6IEN5YmVycHVuayBCYXJ0ZW5kZXIgQWN0aW9uIGlzIGEgYm9vemUgZW0nIHVwIGFib3V0IHdhaWZ1cywgXG4gICAgICAgIHRlY2hub2xvZ3ksIGFuZCBwb3N0LWR5c3RvcGlhIGxpZmUuYDtcbiAgICBjb25zdCB0ZXh0MXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxcDIudGV4dENvbnRlbnQgPSBgSW4gdGhpcyB3b3JsZCwgY29ycG9yYXRpb25zIHJlaWduIHN1cHJlbWUsIFxuICAgICAgICBhbGwgaHVtYW4gbGlmZSBpcyBpbmZlY3RlZCB3aXRoIG5hbm9tYWNoaW5lcyBkZXNpZ25lZCB0byBvcHByZXNzIHRoZW0sIFxuICAgICAgICBhbmQgdGhlIHRlcnJpZnlpbmcgV2hpdGUgS25pZ2h0cyBlbnN1cmUgdGhhdCBldmVyeW9uZSBvYmV5cyB0aGUgbGF3cy5gO1xuICAgIGNvbnN0IHRleHQxcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDFwMy50ZXh0Q29udGVudCA9IGBCdXQsIHRoaXMgaXMgbm90IGFib3V0IHRob3NlIHBlb3BsZS5gO1xuICAgIHRleHQxLmFwcGVuZCh0ZXh0MXAxLCB0ZXh0MXAyLCB0ZXh0MXAzKTtcblxuICAgIGNvbnN0IGFsbWFWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoYWxtYVZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3ZpZCd9KTtcbiAgICBjb25zdCBhbG1hVmlkU3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgc2V0QXR0cmlidXRlcyhhbG1hVmlkU3JjLCB7J3NyYyc6ICcuLi9zcmMvYXNzZXRzL3ZpZGVvL3ZhMTFoYWxsYS1hbG1hLm1wNCcsICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcbiAgICBhbG1hVmlkLmFwcGVuZENoaWxkKGFsbWFWaWRTcmMpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICd0ZXh0Jyk7XG4gICAgY29uc3QgdGV4dDJwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MnAxLnRleHRDb250ZW50ID0gYFlvdSBhcmUgYSBiYXJ0ZW5kZXIgYXQgVkEtMTEgSEFMTC1BLCBhZmZlY3Rpb25hdGVseSBuaWNrbmFtZWQgXCJWYWxoYWxsYS5cIlxuICAgICAgICBBbHRob3VnaCBpdCBpcyBqdXN0IGEgc21hbGwgYmFyIGRvd250b3duLCBcbiAgICAgICAgaXQgYXR0cmFjdHMgdGhlIG1vc3QgZmFzY2luYXRpbmcgcGVvcGxlIHRoaXMgc2lkZSBvZiBkeXN0b3BpYS5cbiAgICAgICAgS2VlcCB5b3VyIGNsaWVudHMgbHVicmljYXRlZCBhbmQgeW91IHdpbGwgYmUgbWFkZSBwcml2eSB0byB0aGUgbW9zdCBpbnRlcmVzdGluZyBzdG9yaWVzLmA7XG4gICAgdGV4dDIuYXBwZW5kKHRleHQycDEpO1xuXG4gICAgY29uc3Qgb2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvZmZlci5jbGFzc0xpc3QuYWRkKCdvZmZlcicpO1xuICAgIGNvbnN0IGRvcm90aHlWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3BvcnRyYWl0J30pO1xuICAgIGNvbnN0IGRvcm90aHlWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvdmlkZW8vdmExMWhhbGxhLWRvcm90aHkubXA0JywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGRvcm90aHlWaWQuYXBwZW5kQ2hpbGQoZG9yb3RoeVZpZFNyYyk7XG4gICAgY29uc3Qgc2lnblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lnblVwLmNsYXNzTGlzdC5hZGQoJ3NpZ24tdXAnKTtcbiAgICBjb25zdCBwbHVzaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbHVzaFRleHQuY2xhc3NMaXN0LmFkZCgncGx1c2gnLCAndGV4dCcpO1xuICAgIHBsdXNoVGV4dC50ZXh0Q29udGVudCA9IGBTaWduIHVwIG5vdyBhbmQgZ2V0IEZSRUUgSmlsbCBwbHVzaGllISEhYDtcbiAgICBjb25zdCBwbHVzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNldEF0dHJpYnV0ZXMocGx1c2hJbWcsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvaW1nL2ppbGwtamlsbC1mdW1vLmdpZicsICdhbHQnOiAnamlsbCBwbHVzaGllJywgJ2NsYXNzJzogJ3BsdXNoLWltZyd9KTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGx1c2gnLCAnYnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYENsaWNrIGhlcmUhYDtcbiAgICBzaWduVXAuYXBwZW5kKHBsdXNoVGV4dCwgcGx1c2hJbWcsIGJ1dHRvbik7XG4gICAgb2ZmZXIuYXBwZW5kKGRvcm90aHlWaWQsIHNpZ25VcCk7XG5cbiAgICBib2R5LmFwcGVuZChoZWFkbGluZSwgamlsbFZpZCwgdGV4dDEsIGFsbWFWaWQsIHRleHQyLCBvZmZlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==