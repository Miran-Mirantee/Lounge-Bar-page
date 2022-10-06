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

    const vids = document.createElement('div');
    vids.classList.add('portrait-container');

    const dorothyVid = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'portrait'});
    const dorothyVidSrc = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc, {'src': '../src/assets/video/va11halla-dorothy.mp4', 'type': 'video/mp4'});
    dorothyVid.appendChild(dorothyVidSrc);

    const dorothyVid2 = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid2, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'portrait toggle'});
    const dorothyVidSrc2 = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc2, {'src': '../src/assets/video/valhalla-persona.mp4', 'type': 'video/mp4'});

    dorothyVid2.appendChild(dorothyVidSrc2);
    vids.append(dorothyVid, dorothyVid2);

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
    button.addEventListener('mouseover', () => {
        dorothyVid2.classList.remove('toggle');
        dorothyVid.classList.add('toggle');
    });
    button.addEventListener('mouseleave', () => {
        dorothyVid2.classList.add('toggle');
        dorothyVid.classList.remove('toggle');
    });

    signUp.append(plushText, plushImg, button);
    offer.append(vids, signUp);

    body.append(headline, jillVid, text1, almaVid, text2, offer);
    content.appendChild(body);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUNONUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMsbUVBQW1FO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMscUVBQXFFO0FBQ3BHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBYSxjQUFjLDZEQUE2RDtBQUM1RjtBQUNBLElBQUksd0RBQWEsaUJBQWlCLHdFQUF3RTtBQUMxRzs7QUFFQTtBQUNBLElBQUksd0RBQWEsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQSxJQUFJLHdEQUFhLGtCQUFrQix1RUFBdUU7O0FBRTFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxZQUFZLDJGQUEyRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cnMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldEF0dHJpYnV0ZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuL3NldEF0dHJzLmpzJztcblxuY29uc3QgYWJvdXQgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAnaGVhZGxpbmUnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdBYm91dCBWQS0xMSBIYWxsLUEnO1xuXG4gICAgY29uc3QgamlsbFZpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgc2V0QXR0cmlidXRlcyhqaWxsVmlkLCB7J2F1dG9wbGF5JzogJycsICdtdXRlZCc6ICcnLCAnbG9vcCc6ICcnLCAnY2xhc3MnOiAndmlkJ30pO1xuICAgIGNvbnN0IGppbGxWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGppbGxWaWRTcmMsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvdmlkZW8vZ2xpdGNoLWFuaW1lLm1wNCcsICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcbiAgICBqaWxsVmlkLmFwcGVuZENoaWxkKGppbGxWaWRTcmMpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICd0ZXh0Jyk7XG4gICAgY29uc3QgdGV4dDFwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MXAxLnRleHRDb250ZW50ID0gYFZBLTExIEhBTEwtQTogQ3liZXJwdW5rIEJhcnRlbmRlciBBY3Rpb24gaXMgYSBib296ZSBlbScgdXAgYWJvdXQgd2FpZnVzLCBcbiAgICAgICAgdGVjaG5vbG9neSwgYW5kIHBvc3QtZHlzdG9waWEgbGlmZS5gO1xuICAgIGNvbnN0IHRleHQxcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDFwMi50ZXh0Q29udGVudCA9IGBJbiB0aGlzIHdvcmxkLCBjb3Jwb3JhdGlvbnMgcmVpZ24gc3VwcmVtZSwgXG4gICAgICAgIGFsbCBodW1hbiBsaWZlIGlzIGluZmVjdGVkIHdpdGggbmFub21hY2hpbmVzIGRlc2lnbmVkIHRvIG9wcHJlc3MgdGhlbSwgXG4gICAgICAgIGFuZCB0aGUgdGVycmlmeWluZyBXaGl0ZSBLbmlnaHRzIGVuc3VyZSB0aGF0IGV2ZXJ5b25lIG9iZXlzIHRoZSBsYXdzLmA7XG4gICAgY29uc3QgdGV4dDFwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MXAzLnRleHRDb250ZW50ID0gYEJ1dCwgdGhpcyBpcyBub3QgYWJvdXQgdGhvc2UgcGVvcGxlLmA7XG4gICAgdGV4dDEuYXBwZW5kKHRleHQxcDEsIHRleHQxcDIsIHRleHQxcDMpO1xuXG4gICAgY29uc3QgYWxtYVZpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgc2V0QXR0cmlidXRlcyhhbG1hVmlkLCB7J2F1dG9wbGF5JzogJycsICdtdXRlZCc6ICcnLCAnbG9vcCc6ICcnLCAnY2xhc3MnOiAndmlkJ30pO1xuICAgIGNvbnN0IGFsbWFWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGFsbWFWaWRTcmMsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvdmlkZW8vdmExMWhhbGxhLWFsbWEubXA0JywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGFsbWFWaWQuYXBwZW5kQ2hpbGQoYWxtYVZpZFNyYyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ3RleHQnKTtcbiAgICBjb25zdCB0ZXh0MnAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQycDEudGV4dENvbnRlbnQgPSBgWW91IGFyZSBhIGJhcnRlbmRlciBhdCBWQS0xMSBIQUxMLUEsIGFmZmVjdGlvbmF0ZWx5IG5pY2tuYW1lZCBcIlZhbGhhbGxhLlwiXG4gICAgICAgIEFsdGhvdWdoIGl0IGlzIGp1c3QgYSBzbWFsbCBiYXIgZG93bnRvd24sIFxuICAgICAgICBpdCBhdHRyYWN0cyB0aGUgbW9zdCBmYXNjaW5hdGluZyBwZW9wbGUgdGhpcyBzaWRlIG9mIGR5c3RvcGlhLlxuICAgICAgICBLZWVwIHlvdXIgY2xpZW50cyBsdWJyaWNhdGVkIGFuZCB5b3Ugd2lsbCBiZSBtYWRlIHByaXZ5IHRvIHRoZSBtb3N0IGludGVyZXN0aW5nIHN0b3JpZXMuYDtcbiAgICB0ZXh0Mi5hcHBlbmQodGV4dDJwMSk7XG5cbiAgICBjb25zdCBvZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9mZmVyLmNsYXNzTGlzdC5hZGQoJ29mZmVyJyk7XG5cbiAgICBjb25zdCB2aWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkcy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRvcm90aHlWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3BvcnRyYWl0J30pO1xuICAgIGNvbnN0IGRvcm90aHlWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvdmlkZW8vdmExMWhhbGxhLWRvcm90aHkubXA0JywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGRvcm90aHlWaWQuYXBwZW5kQ2hpbGQoZG9yb3RoeVZpZFNyYyk7XG5cbiAgICBjb25zdCBkb3JvdGh5VmlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgc2V0QXR0cmlidXRlcyhkb3JvdGh5VmlkMiwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3BvcnRyYWl0IHRvZ2dsZSd9KTtcbiAgICBjb25zdCBkb3JvdGh5VmlkU3JjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZFNyYzIsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvdmlkZW8vdmFsaGFsbGEtcGVyc29uYS5tcDQnLCAndHlwZSc6ICd2aWRlby9tcDQnfSk7XG5cbiAgICBkb3JvdGh5VmlkMi5hcHBlbmRDaGlsZChkb3JvdGh5VmlkU3JjMik7XG4gICAgdmlkcy5hcHBlbmQoZG9yb3RoeVZpZCwgZG9yb3RoeVZpZDIpO1xuXG4gICAgY29uc3Qgc2lnblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lnblVwLmNsYXNzTGlzdC5hZGQoJ3NpZ24tdXAnKTtcbiAgICBjb25zdCBwbHVzaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbHVzaFRleHQuY2xhc3NMaXN0LmFkZCgncGx1c2gnLCAndGV4dCcpO1xuICAgIHBsdXNoVGV4dC50ZXh0Q29udGVudCA9IGBTaWduIHVwIG5vdyBhbmQgZ2V0IEZSRUUgSmlsbCBwbHVzaGllISEhYDtcbiAgICBjb25zdCBwbHVzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNldEF0dHJpYnV0ZXMocGx1c2hJbWcsIHsnc3JjJzogJy4uL3NyYy9hc3NldHMvaW1nL2ppbGwtamlsbC1mdW1vLmdpZicsICdhbHQnOiAnamlsbCBwbHVzaGllJywgJ2NsYXNzJzogJ3BsdXNoLWltZyd9KTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGx1c2gnLCAnYnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYENsaWNrIGhlcmUhYDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBkb3JvdGh5VmlkMi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgICAgICAgZG9yb3RoeVZpZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgZG9yb3RoeVZpZDIuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gICAgICAgIGRvcm90aHlWaWQuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XG4gICAgfSk7XG5cbiAgICBzaWduVXAuYXBwZW5kKHBsdXNoVGV4dCwgcGx1c2hJbWcsIGJ1dHRvbik7XG4gICAgb2ZmZXIuYXBwZW5kKHZpZHMsIHNpZ25VcCk7XG5cbiAgICBib2R5LmFwcGVuZChoZWFkbGluZSwgamlsbFZpZCwgdGV4dDEsIGFsbWFWaWQsIHRleHQyLCBvZmZlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==