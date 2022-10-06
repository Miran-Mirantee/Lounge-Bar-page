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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ041QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMEM7QUFDWTtBQUNPO0FBQ0U7QUFDTTtBQUNBOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBYSxXQUFXLHdEQUF3RDtBQUNwRjtBQUNBLElBQUksd0RBQWEsY0FBYyxPQUFPLDJEQUFjLHNCQUFzQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHdEQUFhLFdBQVcsd0RBQXdEO0FBQ3BGO0FBQ0EsSUFBSSx3REFBYSxjQUFjLE9BQU8sNkRBQWMsc0JBQXNCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx3REFBYSxjQUFjLDZEQUE2RDtBQUM1RjtBQUNBLElBQUksd0RBQWEsaUJBQWlCLE9BQU8sZ0VBQWlCLHNCQUFzQjtBQUNoRjs7QUFFQTtBQUNBLElBQUksd0RBQWEsZUFBZSxvRUFBb0U7QUFDcEc7QUFDQSxJQUFJLHdEQUFhLGtCQUFrQixPQUFPLCtEQUFrQixzQkFBc0I7O0FBRWxGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYSxZQUFZLE9BQU8sMkRBQU8sOENBQThDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL3NldEF0dHJzLmpzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuL3NldEF0dHJzLmpzJztcbmltcG9ydCBqaWxsR2lmIGZyb20gJy4vYXNzZXRzL2ltZy9qaWxsLWppbGwtZnVtby5naWYnO1xuaW1wb3J0IGppbGxWaWRXZWJwYWNrIGZyb20gJy4vYXNzZXRzL3ZpZGVvL2dsaXRjaC1hbmltZS5tcDQnO1xuaW1wb3J0IGFsbWFWaWRXZWJwYWNrIGZyb20gJy4vYXNzZXRzL3ZpZGVvL3ZhMTFoYWxsYS1hbG1hLm1wNCc7XG5pbXBvcnQgZG9yb3RoeVZpZFdlYnBhY2sgZnJvbSAnLi9hc3NldHMvdmlkZW8vdmExMWhhbGxhLWRvcm90aHkubXA0JztcbmltcG9ydCBkb3JvdGh5VmlkV2VicGFjazIgZnJvbSAnLi9hc3NldHMvdmlkZW8vdmFsaGFsbGEtcGVyc29uYS5tcDQnO1xuXG5jb25zdCBhYm91dCA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdoZWFkbGluZScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0Fib3V0IFZBLTExIEhhbGwtQSc7XG5cbiAgICBjb25zdCBqaWxsVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGppbGxWaWQsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICd2aWQnfSk7XG4gICAgY29uc3QgamlsbFZpZFNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoamlsbFZpZFNyYywgeydzcmMnOiBqaWxsVmlkV2VicGFjaywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGppbGxWaWQuYXBwZW5kQ2hpbGQoamlsbFZpZFNyYyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ3RleHQnKTtcbiAgICBjb25zdCB0ZXh0MXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxcDEudGV4dENvbnRlbnQgPSBgVkEtMTEgSEFMTC1BOiBDeWJlcnB1bmsgQmFydGVuZGVyIEFjdGlvbiBpcyBhIGJvb3plIGVtJyB1cCBhYm91dCB3YWlmdXMsIFxuICAgICAgICB0ZWNobm9sb2d5LCBhbmQgcG9zdC1keXN0b3BpYSBsaWZlLmA7XG4gICAgY29uc3QgdGV4dDFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MXAyLnRleHRDb250ZW50ID0gYEluIHRoaXMgd29ybGQsIGNvcnBvcmF0aW9ucyByZWlnbiBzdXByZW1lLCBcbiAgICAgICAgYWxsIGh1bWFuIGxpZmUgaXMgaW5mZWN0ZWQgd2l0aCBuYW5vbWFjaGluZXMgZGVzaWduZWQgdG8gb3BwcmVzcyB0aGVtLCBcbiAgICAgICAgYW5kIHRoZSB0ZXJyaWZ5aW5nIFdoaXRlIEtuaWdodHMgZW5zdXJlIHRoYXQgZXZlcnlvbmUgb2JleXMgdGhlIGxhd3MuYDtcbiAgICBjb25zdCB0ZXh0MXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxcDMudGV4dENvbnRlbnQgPSBgQnV0LCB0aGlzIGlzIG5vdCBhYm91dCB0aG9zZSBwZW9wbGUuYDtcbiAgICB0ZXh0MS5hcHBlbmQodGV4dDFwMSwgdGV4dDFwMiwgdGV4dDFwMyk7XG5cbiAgICBjb25zdCBhbG1hVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGFsbWFWaWQsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICd2aWQnfSk7XG4gICAgY29uc3QgYWxtYVZpZFNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgIHNldEF0dHJpYnV0ZXMoYWxtYVZpZFNyYywgeydzcmMnOiBhbG1hVmlkV2VicGFjaywgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuICAgIGFsbWFWaWQuYXBwZW5kQ2hpbGQoYWxtYVZpZFNyYyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ3RleHQnKTtcbiAgICBjb25zdCB0ZXh0MnAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQycDEudGV4dENvbnRlbnQgPSBgWW91IGFyZSBhIGJhcnRlbmRlciBhdCBWQS0xMSBIQUxMLUEsIGFmZmVjdGlvbmF0ZWx5IG5pY2tuYW1lZCBcIlZhbGhhbGxhLlwiXG4gICAgICAgIEFsdGhvdWdoIGl0IGlzIGp1c3QgYSBzbWFsbCBiYXIgZG93bnRvd24sIFxuICAgICAgICBpdCBhdHRyYWN0cyB0aGUgbW9zdCBmYXNjaW5hdGluZyBwZW9wbGUgdGhpcyBzaWRlIG9mIGR5c3RvcGlhLlxuICAgICAgICBLZWVwIHlvdXIgY2xpZW50cyBsdWJyaWNhdGVkIGFuZCB5b3Ugd2lsbCBiZSBtYWRlIHByaXZ5IHRvIHRoZSBtb3N0IGludGVyZXN0aW5nIHN0b3JpZXMuYDtcbiAgICB0ZXh0Mi5hcHBlbmQodGV4dDJwMSk7XG5cbiAgICBjb25zdCBvZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9mZmVyLmNsYXNzTGlzdC5hZGQoJ29mZmVyJyk7XG5cbiAgICBjb25zdCB2aWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlkcy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRvcm90aHlWaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZCwgeydhdXRvcGxheSc6ICcnLCAnbXV0ZWQnOiAnJywgJ2xvb3AnOiAnJywgJ2NsYXNzJzogJ3BvcnRyYWl0J30pO1xuICAgIGNvbnN0IGRvcm90aHlWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMsIHsnc3JjJzogZG9yb3RoeVZpZFdlYnBhY2ssICd0eXBlJzogJ3ZpZGVvL21wNCd9KTtcbiAgICBkb3JvdGh5VmlkLmFwcGVuZENoaWxkKGRvcm90aHlWaWRTcmMpO1xuXG4gICAgY29uc3QgZG9yb3RoeVZpZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZDIsIHsnYXV0b3BsYXknOiAnJywgJ211dGVkJzogJycsICdsb29wJzogJycsICdjbGFzcyc6ICdwb3J0cmFpdCB0b2dnbGUnfSk7XG4gICAgY29uc3QgZG9yb3RoeVZpZFNyYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRvcm90aHlWaWRTcmMyLCB7J3NyYyc6IGRvcm90aHlWaWRXZWJwYWNrMiwgJ3R5cGUnOiAndmlkZW8vbXA0J30pO1xuXG4gICAgZG9yb3RoeVZpZDIuYXBwZW5kQ2hpbGQoZG9yb3RoeVZpZFNyYzIpO1xuICAgIHZpZHMuYXBwZW5kKGRvcm90aHlWaWQsIGRvcm90aHlWaWQyKTtcblxuICAgIGNvbnN0IHNpZ25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZ25VcC5jbGFzc0xpc3QuYWRkKCdzaWduLXVwJyk7XG4gICAgY29uc3QgcGx1c2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGx1c2hUZXh0LmNsYXNzTGlzdC5hZGQoJ3BsdXNoJywgJ3RleHQnKTtcbiAgICBwbHVzaFRleHQudGV4dENvbnRlbnQgPSBgU2lnbiB1cCBub3cgYW5kIGdldCBGUkVFIEppbGwgcGx1c2hpZSEhIWA7XG4gICAgY29uc3QgcGx1c2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKHBsdXNoSW1nLCB7J3NyYyc6IGppbGxHaWYsICdhbHQnOiAnamlsbCBwbHVzaGllJywgJ2NsYXNzJzogJ3BsdXNoLWltZyd9KTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGx1c2gnLCAnYnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYENsaWNrIGhlcmUhYDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBkb3JvdGh5VmlkMi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgICAgICAgZG9yb3RoeVZpZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgZG9yb3RoeVZpZDIuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gICAgICAgIGRvcm90aHlWaWQuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XG4gICAgfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9taXJhbi1taXJhbnRlZS5naXRodWIuaW8vc2lnbi11cC1mb3JtLycpO1xuICAgIH0pO1xuXG4gICAgc2lnblVwLmFwcGVuZChwbHVzaFRleHQsIHBsdXNoSW1nLCBidXR0b24pO1xuICAgIG9mZmVyLmFwcGVuZCh2aWRzLCBzaWduVXApO1xuXG4gICAgYm9keS5hcHBlbmQoaGVhZGxpbmUsIGppbGxWaWQsIHRleHQxLCBhbG1hVmlkLCB0ZXh0Miwgb2ZmZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=