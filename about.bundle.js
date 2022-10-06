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
    button.addEventListener('click', () => {
        window.open('https://miran-mirantee.github.io/sign-up-form/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUNONUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMsbUVBQW1FO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMscUVBQXFFO0FBQ3BHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBYSxjQUFjLDZEQUE2RDtBQUM1RjtBQUNBLElBQUksd0RBQWEsaUJBQWlCLHdFQUF3RTtBQUMxRzs7QUFFQTtBQUNBLElBQUksd0RBQWEsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQSxJQUFJLHdEQUFhLGtCQUFrQix1RUFBdUU7O0FBRTFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxZQUFZLDJGQUEyRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS8uL3NyYy9zZXRBdHRycy5qcyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4vc2V0QXR0cnMuanMnO1xuXG5jb25zdCBhYm91dCA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdoZWFkbGluZScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0Fib3V0IFZBLTExIEhhbGwtQSc7XG5cbiAgICBjb25zdCBqaWxsVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGppbGxWaWQsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICd2aWQnfSk7XG4gICAgY29uc3QgamlsbFZpZFNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoamlsbFZpZFNyYywgeydzcmMnOiAnLi4vc3JjL2Fzc2V0cy92aWRlby9nbGl0Y2gtYW5pbWUubXA0JywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGppbGxWaWQuYXBwZW5kQ2hpbGQoamlsbFZpZFNyYyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ3RleHQnKTtcbiAgICBjb25zdCB0ZXh0MXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxcDEudGV4dENvbnRlbnQgPSBgVkEtMTEgSEFMTC1BOiBDeWJlcnB1bmsgQmFydGVuZGVyIEFjdGlvbiBpcyBhIGJvb3plIGVtJyB1cCBhYm91dCB3YWlmdXMsIFxuICAgICAgICB0ZWNobm9sb2d5LCBhbmQgcG9zdC1keXN0b3BpYSBsaWZlLmA7XG4gICAgY29uc3QgdGV4dDFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MXAyLnRleHRDb250ZW50ID0gYEluIHRoaXMgd29ybGQsIGNvcnBvcmF0aW9ucyByZWlnbiBzdXByZW1lLCBcbiAgICAgICAgYWxsIGh1bWFuIGxpZmUgaXMgaW5mZWN0ZWQgd2l0aCBuYW5vbWFjaGluZXMgZGVzaWduZWQgdG8gb3BwcmVzcyB0aGVtLCBcbiAgICAgICAgYW5kIHRoZSB0ZXJyaWZ5aW5nIFdoaXRlIEtuaWdodHMgZW5zdXJlIHRoYXQgZXZlcnlvbmUgb2JleXMgdGhlIGxhd3MuYDtcbiAgICBjb25zdCB0ZXh0MXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxcDMudGV4dENvbnRlbnQgPSBgQnV0LCB0aGlzIGlzIG5vdCBhYm91dCB0aG9zZSBwZW9wbGUuYDtcbiAgICB0ZXh0MS5hcHBlbmQodGV4dDFwMSwgdGV4dDFwMiwgdGV4dDFwMyk7XG5cbiAgICBjb25zdCBhbG1hVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGFsbWFWaWQsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICd2aWQnfSk7XG4gICAgY29uc3QgYWxtYVZpZFNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoYWxtYVZpZFNyYywgeydzcmMnOiAnLi4vc3JjL2Fzc2V0cy92aWRlby92YTExaGFsbGEtYWxtYS5tcDQnLCAndHlwZSc6ICd2aWRlby9tcDQnfSk7XG4gICAgYWxtYVZpZC5hcHBlbmRDaGlsZChhbG1hVmlkU3JjKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAndGV4dCcpO1xuICAgIGNvbnN0IHRleHQycDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDJwMS50ZXh0Q29udGVudCA9IGBZb3UgYXJlIGEgYmFydGVuZGVyIGF0IFZBLTExIEhBTEwtQSwgYWZmZWN0aW9uYXRlbHkgbmlja25hbWVkIFwiVmFsaGFsbGEuXCJcbiAgICAgICAgQWx0aG91Z2ggaXQgaXMganVzdCBhIHNtYWxsIGJhciBkb3dudG93biwgXG4gICAgICAgIGl0IGF0dHJhY3RzIHRoZSBtb3N0IGZhc2NpbmF0aW5nIHBlb3BsZSB0aGlzIHNpZGUgb2YgZHlzdG9waWEuXG4gICAgICAgIEtlZXAgeW91ciBjbGllbnRzIGx1YnJpY2F0ZWQgYW5kIHlvdSB3aWxsIGJlIG1hZGUgcHJpdnkgdG8gdGhlIG1vc3QgaW50ZXJlc3Rpbmcgc3Rvcmllcy5gO1xuICAgIHRleHQyLmFwcGVuZCh0ZXh0MnAxKTtcblxuICAgIGNvbnN0IG9mZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2ZmZXIuY2xhc3NMaXN0LmFkZCgnb2ZmZXInKTtcblxuICAgIGNvbnN0IHZpZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRzLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZG9yb3RoeVZpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgc2V0QXR0cmlidXRlcyhkb3JvdGh5VmlkLCB7J2F1dG9wbGF5JzogJycsICdtdXRlZCc6ICcnLCAnbG9vcCc6ICcnLCAnY2xhc3MnOiAncG9ydHJhaXQnfSk7XG4gICAgY29uc3QgZG9yb3RoeVZpZFNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZFNyYywgeydzcmMnOiAnLi4vc3JjL2Fzc2V0cy92aWRlby92YTExaGFsbGEtZG9yb3RoeS5tcDQnLCAndHlwZSc6ICd2aWRlby9tcDQnfSk7XG4gICAgZG9yb3RoeVZpZC5hcHBlbmRDaGlsZChkb3JvdGh5VmlkU3JjKTtcblxuICAgIGNvbnN0IGRvcm90aHlWaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWQyLCB7J2F1dG9wbGF5JzogJycsICdtdXRlZCc6ICcnLCAnbG9vcCc6ICcnLCAnY2xhc3MnOiAncG9ydHJhaXQgdG9nZ2xlJ30pO1xuICAgIGNvbnN0IGRvcm90aHlWaWRTcmMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgc2V0QXR0cmlidXRlcyhkb3JvdGh5VmlkU3JjMiwgeydzcmMnOiAnLi4vc3JjL2Fzc2V0cy92aWRlby92YWxoYWxsYS1wZXJzb25hLm1wNCcsICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcblxuICAgIGRvcm90aHlWaWQyLmFwcGVuZENoaWxkKGRvcm90aHlWaWRTcmMyKTtcbiAgICB2aWRzLmFwcGVuZChkb3JvdGh5VmlkLCBkb3JvdGh5VmlkMik7XG5cbiAgICBjb25zdCBzaWduVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWduVXAuY2xhc3NMaXN0LmFkZCgnc2lnbi11cCcpO1xuICAgIGNvbnN0IHBsdXNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsdXNoVGV4dC5jbGFzc0xpc3QuYWRkKCdwbHVzaCcsICd0ZXh0Jyk7XG4gICAgcGx1c2hUZXh0LnRleHRDb250ZW50ID0gYFNpZ24gdXAgbm93IGFuZCBnZXQgRlJFRSBKaWxsIHBsdXNoaWUhISFgO1xuICAgIGNvbnN0IHBsdXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0QXR0cmlidXRlcyhwbHVzaEltZywgeydzcmMnOiAnLi4vc3JjL2Fzc2V0cy9pbWcvamlsbC1qaWxsLWZ1bW8uZ2lmJywgJ2FsdCc6ICdqaWxsIHBsdXNoaWUnLCAnY2xhc3MnOiAncGx1c2gtaW1nJ30pO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbHVzaCcsICdidG4nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgQ2xpY2sgaGVyZSFgO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGRvcm90aHlWaWQyLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xuICAgICAgICBkb3JvdGh5VmlkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBkb3JvdGh5VmlkMi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgICAgICAgZG9yb3RoeVZpZC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL21pcmFuLW1pcmFudGVlLmdpdGh1Yi5pby9zaWduLXVwLWZvcm0vJyk7XG4gICAgfSk7XG5cbiAgICBzaWduVXAuYXBwZW5kKHBsdXNoVGV4dCwgcGx1c2hJbWcsIGJ1dHRvbik7XG4gICAgb2ZmZXIuYXBwZW5kKHZpZHMsIHNpZ25VcCk7XG5cbiAgICBib2R5LmFwcGVuZChoZWFkbGluZSwgamlsbFZpZCwgdGV4dDEsIGFsbWFWaWQsIHRleHQyLCBvZmZlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==