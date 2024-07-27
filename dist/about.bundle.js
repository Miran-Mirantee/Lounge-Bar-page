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

/***/ }),

/***/ "./src/assets/img/jill-jill-fumo.gif":
/*!*******************************************!*\
  !*** ./src/assets/img/jill-jill-fumo.gif ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/52a4c64bc4732f032555.gif";

/***/ }),

/***/ "./src/assets/video/glitch-anime.mp4":
/*!*******************************************!*\
  !*** ./src/assets/video/glitch-anime.mp4 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "videos/30112980becad1591666.mp4";

/***/ }),

/***/ "./src/assets/video/va11halla-alma.mp4":
/*!*********************************************!*\
  !*** ./src/assets/video/va11halla-alma.mp4 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "videos/5f5e502431c2038a80a7.mp4";

/***/ }),

/***/ "./src/assets/video/va11halla-dorothy.mp4":
/*!************************************************!*\
  !*** ./src/assets/video/va11halla-dorothy.mp4 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "videos/d9a7cdc811841d3d5e46.mp4";

/***/ }),

/***/ "./src/assets/video/valhalla-persona.mp4":
/*!***********************************************!*\
  !*** ./src/assets/video/valhalla-persona.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "videos/027c8360219fc0c1e909.mp4";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _assets_img_jill_jill_fumo_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/jill-jill-fumo.gif */ "./src/assets/img/jill-jill-fumo.gif");
/* harmony import */ var _assets_video_glitch_anime_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/video/glitch-anime.mp4 */ "./src/assets/video/glitch-anime.mp4");
/* harmony import */ var _assets_video_va11halla_alma_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/video/va11halla-alma.mp4 */ "./src/assets/video/va11halla-alma.mp4");
/* harmony import */ var _assets_video_va11halla_dorothy_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/video/va11halla-dorothy.mp4 */ "./src/assets/video/va11halla-dorothy.mp4");
/* harmony import */ var _assets_video_valhalla_persona_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/video/valhalla-persona.mp4 */ "./src/assets/video/valhalla-persona.mp4");







const about = (content) => {
    const body = document.createElement('div');
    body.classList.add('body');

    const headline = document.createElement('div');
    headline.classList.add('about', 'headline');
    headline.textContent = 'About VA-11 Hall-A';

    const jillVid = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVid, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'vid'});
    const jillVidSrc = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVidSrc, {'src': _assets_video_glitch_anime_mp4__WEBPACK_IMPORTED_MODULE_2__, 'type': 'video/mp4'});
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
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(almaVidSrc, {'src': _assets_video_va11halla_alma_mp4__WEBPACK_IMPORTED_MODULE_3__, 'type': 'video/mp4'});
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
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc, {'src': _assets_video_va11halla_dorothy_mp4__WEBPACK_IMPORTED_MODULE_4__, 'type': 'video/mp4'});
    dorothyVid.appendChild(dorothyVidSrc);

    const dorothyVid2 = document.createElement('video');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid2, {'autoplay': '', 'muted': '', 'loop': '', 'class': 'portrait toggle'});
    const dorothyVidSrc2 = document.createElement('source');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc2, {'src': _assets_video_valhalla_persona_mp4__WEBPACK_IMPORTED_MODULE_5__, 'type': 'video/mp4'});

    dorothyVid2.appendChild(dorothyVidSrc2);
    vids.append(dorothyVid, dorothyVid2);

    const signUp = document.createElement('div');
    signUp.classList.add('sign-up');
    const plushText = document.createElement('div');
    plushText.classList.add('plush', 'text');
    plushText.textContent = `Sign up now and get FREE Jill plushie!!!`;
    const plushImg = document.createElement('img');
    (0,_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(plushImg, {'src': _assets_img_jill_jill_fumo_gif__WEBPACK_IMPORTED_MODULE_1__, 'alt': 'jill plushie', 'class': 'plush-img'});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNONUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjBDO0FBQ1k7QUFDTztBQUNFO0FBQ007QUFDQTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWEsV0FBVyx3REFBd0Q7QUFDcEY7QUFDQSxJQUFJLHdEQUFhLGNBQWMsT0FBTywyREFBYyxzQkFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFhLFdBQVcsd0RBQXdEO0FBQ3BGO0FBQ0EsSUFBSSx3REFBYSxjQUFjLE9BQU8sNkRBQWMsc0JBQXNCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWEsY0FBYyw2REFBNkQ7QUFDNUY7QUFDQSxJQUFJLHdEQUFhLGlCQUFpQixPQUFPLGdFQUFpQixzQkFBc0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxlQUFlLG9FQUFvRTtBQUNwRztBQUNBLElBQUksd0RBQWEsa0JBQWtCLE9BQU8sK0RBQWtCLHNCQUFzQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWEsWUFBWSxPQUFPLDJEQUFPLDhDQUE4QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS8uL3NyYy9zZXRBdHRycy5qcyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cnMpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldEF0dHJpYnV0ZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi9zZXRBdHRycy5qcyc7XHJcbmltcG9ydCBqaWxsR2lmIGZyb20gJy4vYXNzZXRzL2ltZy9qaWxsLWppbGwtZnVtby5naWYnO1xyXG5pbXBvcnQgamlsbFZpZFdlYnBhY2sgZnJvbSAnLi9hc3NldHMvdmlkZW8vZ2xpdGNoLWFuaW1lLm1wNCc7XHJcbmltcG9ydCBhbG1hVmlkV2VicGFjayBmcm9tICcuL2Fzc2V0cy92aWRlby92YTExaGFsbGEtYWxtYS5tcDQnO1xyXG5pbXBvcnQgZG9yb3RoeVZpZFdlYnBhY2sgZnJvbSAnLi9hc3NldHMvdmlkZW8vdmExMWhhbGxhLWRvcm90aHkubXA0JztcclxuaW1wb3J0IGRvcm90aHlWaWRXZWJwYWNrMiBmcm9tICcuL2Fzc2V0cy92aWRlby92YWxoYWxsYS1wZXJzb25hLm1wNCc7XHJcblxyXG5jb25zdCBhYm91dCA9IChjb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcclxuXHJcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAnaGVhZGxpbmUnKTtcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0Fib3V0IFZBLTExIEhhbGwtQSc7XHJcblxyXG4gICAgY29uc3QgamlsbFZpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGppbGxWaWQsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICd2aWQnfSk7XHJcbiAgICBjb25zdCBqaWxsVmlkU3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGppbGxWaWRTcmMsIHsnc3JjJzogamlsbFZpZFdlYnBhY2ssICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcclxuICAgIGppbGxWaWQuYXBwZW5kQ2hpbGQoamlsbFZpZFNyYyk7XHJcblxyXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ3RleHQnKTtcclxuICAgIGNvbnN0IHRleHQxcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0MXAxLnRleHRDb250ZW50ID0gYFZBLTExIEhBTEwtQTogQ3liZXJwdW5rIEJhcnRlbmRlciBBY3Rpb24gaXMgYSBib296ZSBlbScgdXAgYWJvdXQgd2FpZnVzLCBcclxuICAgICAgICB0ZWNobm9sb2d5LCBhbmQgcG9zdC1keXN0b3BpYSBsaWZlLmA7XHJcbiAgICBjb25zdCB0ZXh0MXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dDFwMi50ZXh0Q29udGVudCA9IGBJbiB0aGlzIHdvcmxkLCBjb3Jwb3JhdGlvbnMgcmVpZ24gc3VwcmVtZSwgXHJcbiAgICAgICAgYWxsIGh1bWFuIGxpZmUgaXMgaW5mZWN0ZWQgd2l0aCBuYW5vbWFjaGluZXMgZGVzaWduZWQgdG8gb3BwcmVzcyB0aGVtLCBcclxuICAgICAgICBhbmQgdGhlIHRlcnJpZnlpbmcgV2hpdGUgS25pZ2h0cyBlbnN1cmUgdGhhdCBldmVyeW9uZSBvYmV5cyB0aGUgbGF3cy5gO1xyXG4gICAgY29uc3QgdGV4dDFwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQxcDMudGV4dENvbnRlbnQgPSBgQnV0LCB0aGlzIGlzIG5vdCBhYm91dCB0aG9zZSBwZW9wbGUuYDtcclxuICAgIHRleHQxLmFwcGVuZCh0ZXh0MXAxLCB0ZXh0MXAyLCB0ZXh0MXAzKTtcclxuXHJcbiAgICBjb25zdCBhbG1hVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgIHNldEF0dHJpYnV0ZXMoYWxtYVZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3ZpZCd9KTtcclxuICAgIGNvbnN0IGFsbWFWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcclxuICAgIHNldEF0dHJpYnV0ZXMoYWxtYVZpZFNyYywgeydzcmMnOiBhbG1hVmlkV2VicGFjaywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xyXG4gICAgYWxtYVZpZC5hcHBlbmRDaGlsZChhbG1hVmlkU3JjKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAndGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dDJwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQycDEudGV4dENvbnRlbnQgPSBgWW91IGFyZSBhIGJhcnRlbmRlciBhdCBWQS0xMSBIQUxMLUEsIGFmZmVjdGlvbmF0ZWx5IG5pY2tuYW1lZCBcIlZhbGhhbGxhLlwiXHJcbiAgICAgICAgQWx0aG91Z2ggaXQgaXMganVzdCBhIHNtYWxsIGJhciBkb3dudG93biwgXHJcbiAgICAgICAgaXQgYXR0cmFjdHMgdGhlIG1vc3QgZmFzY2luYXRpbmcgcGVvcGxlIHRoaXMgc2lkZSBvZiBkeXN0b3BpYS5cclxuICAgICAgICBLZWVwIHlvdXIgY2xpZW50cyBsdWJyaWNhdGVkIGFuZCB5b3Ugd2lsbCBiZSBtYWRlIHByaXZ5IHRvIHRoZSBtb3N0IGludGVyZXN0aW5nIHN0b3JpZXMuYDtcclxuICAgIHRleHQyLmFwcGVuZCh0ZXh0MnAxKTtcclxuXHJcbiAgICBjb25zdCBvZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXIuY2xhc3NMaXN0LmFkZCgnb2ZmZXInKTtcclxuXHJcbiAgICBjb25zdCB2aWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRzLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGRvcm90aHlWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgc2V0QXR0cmlidXRlcyhkb3JvdGh5VmlkLCB7J2F1dG9wbGF5JzogJycsICdtdXRlZCc6ICcnLCAnbG9vcCc6ICcnLCAnY2xhc3MnOiAncG9ydHJhaXQnfSk7XHJcbiAgICBjb25zdCBkb3JvdGh5VmlkU3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMsIHsnc3JjJzogZG9yb3RoeVZpZFdlYnBhY2ssICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcclxuICAgIGRvcm90aHlWaWQuYXBwZW5kQ2hpbGQoZG9yb3RoeVZpZFNyYyk7XHJcblxyXG4gICAgY29uc3QgZG9yb3RoeVZpZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgc2V0QXR0cmlidXRlcyhkb3JvdGh5VmlkMiwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3BvcnRyYWl0IHRvZ2dsZSd9KTtcclxuICAgIGNvbnN0IGRvcm90aHlWaWRTcmMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMyLCB7J3NyYyc6IGRvcm90aHlWaWRXZWJwYWNrMiwgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xyXG5cclxuICAgIGRvcm90aHlWaWQyLmFwcGVuZENoaWxkKGRvcm90aHlWaWRTcmMyKTtcclxuICAgIHZpZHMuYXBwZW5kKGRvcm90aHlWaWQsIGRvcm90aHlWaWQyKTtcclxuXHJcbiAgICBjb25zdCBzaWduVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZ25VcC5jbGFzc0xpc3QuYWRkKCdzaWduLXVwJyk7XHJcbiAgICBjb25zdCBwbHVzaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsdXNoVGV4dC5jbGFzc0xpc3QuYWRkKCdwbHVzaCcsICd0ZXh0Jyk7XHJcbiAgICBwbHVzaFRleHQudGV4dENvbnRlbnQgPSBgU2lnbiB1cCBub3cgYW5kIGdldCBGUkVFIEppbGwgcGx1c2hpZSEhIWA7XHJcbiAgICBjb25zdCBwbHVzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc2V0QXR0cmlidXRlcyhwbHVzaEltZywgeydzcmMnOiBqaWxsR2lmLCAnYWx0JzogJ2ppbGwgcGx1c2hpZScsICdjbGFzcyc6ICdwbHVzaC1pbWcnfSk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbHVzaCcsICdidG4nKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGBDbGljayBoZXJlIWA7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIGRvcm90aHlWaWQyLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xyXG4gICAgICAgIGRvcm90aHlWaWQuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGRvcm90aHlWaWQyLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xyXG4gICAgICAgIGRvcm90aHlWaWQuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9taXJhbi1taXJhbnRlZS5naXRodWIuaW8vc2lnbi11cC1mb3JtLycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2lnblVwLmFwcGVuZChwbHVzaFRleHQsIHBsdXNoSW1nLCBidXR0b24pO1xyXG4gICAgb2ZmZXIuYXBwZW5kKHZpZHMsIHNpZ25VcCk7XHJcblxyXG4gICAgYm9keS5hcHBlbmQoaGVhZGxpbmUsIGppbGxWaWQsIHRleHQxLCBhbG1hVmlkLCB0ZXh0Miwgb2ZmZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==