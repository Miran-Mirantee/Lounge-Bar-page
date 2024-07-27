/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/setAttrs.js":
/*!*******************************!*\
  !*** ./src/utils/setAttrs.js ***!
  \*******************************/
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
/* harmony import */ var _utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/setAttrs.js */ "./src/utils/setAttrs.js");
/* harmony import */ var _assets_img_jill_jill_fumo_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/jill-jill-fumo.gif */ "./src/assets/img/jill-jill-fumo.gif");
/* harmony import */ var _assets_video_glitch_anime_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/video/glitch-anime.mp4 */ "./src/assets/video/glitch-anime.mp4");
/* harmony import */ var _assets_video_va11halla_alma_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/video/va11halla-alma.mp4 */ "./src/assets/video/va11halla-alma.mp4");
/* harmony import */ var _assets_video_va11halla_dorothy_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/video/va11halla-dorothy.mp4 */ "./src/assets/video/va11halla-dorothy.mp4");
/* harmony import */ var _assets_video_valhalla_persona_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/video/valhalla-persona.mp4 */ "./src/assets/video/valhalla-persona.mp4");







const about = (content) => {
  const body = document.createElement("div");
  body.classList.add("body");

  const headline = document.createElement("div");
  headline.classList.add("about", "headline");
  headline.textContent = "About VA-11 Hall-A";

  const jillVid = document.createElement("video");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVid, { autoplay: "", muted: "", loop: "", class: "vid" });
  const jillVidSrc = document.createElement("source");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jillVidSrc, { src: _assets_video_glitch_anime_mp4__WEBPACK_IMPORTED_MODULE_2__, type: "video/mp4" });
  jillVid.appendChild(jillVidSrc);

  const text1 = document.createElement("div");
  text1.classList.add("about", "text");
  const text1p1 = document.createElement("p");
  text1p1.textContent = `VA-11 HALL-A: Cyberpunk Bartender Action is a booze em' up about waifus, 
        technology, and post-dystopia life.`;
  const text1p2 = document.createElement("p");
  text1p2.textContent = `In this world, corporations reign supreme, 
        all human life is infected with nanomachines designed to oppress them, 
        and the terrifying White Knights ensure that everyone obeys the laws.`;
  const text1p3 = document.createElement("p");
  text1p3.textContent = `But, this is not about those people.`;
  text1.append(text1p1, text1p2, text1p3);

  const almaVid = document.createElement("video");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(almaVid, { autoplay: "", muted: "", loop: "", class: "vid" });
  const almaVidSrc = document.createElement("source");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(almaVidSrc, { src: _assets_video_va11halla_alma_mp4__WEBPACK_IMPORTED_MODULE_3__, type: "video/mp4" });
  almaVid.appendChild(almaVidSrc);

  const text2 = document.createElement("div");
  text2.classList.add("about", "text");
  const text2p1 = document.createElement("p");
  text2p1.textContent = `You are a bartender at VA-11 HALL-A, affectionately nicknamed "Valhalla."
        Although it is just a small bar downtown, 
        it attracts the most fascinating people this side of dystopia.
        Keep your clients lubricated and you will be made privy to the most interesting stories.`;
  text2.append(text2p1);

  const offer = document.createElement("div");
  offer.classList.add("offer");

  const vids = document.createElement("div");
  vids.classList.add("portrait-container");

  const dorothyVid = document.createElement("video");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid, {
    autoplay: "",
    muted: "",
    loop: "",
    class: "portrait",
  });
  const dorothyVidSrc = document.createElement("source");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc, { src: _assets_video_va11halla_dorothy_mp4__WEBPACK_IMPORTED_MODULE_4__, type: "video/mp4" });
  dorothyVid.appendChild(dorothyVidSrc);

  const dorothyVid2 = document.createElement("video");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVid2, {
    autoplay: "",
    muted: "",
    loop: "",
    class: "portrait toggle",
  });
  const dorothyVidSrc2 = document.createElement("source");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dorothyVidSrc2, { src: _assets_video_valhalla_persona_mp4__WEBPACK_IMPORTED_MODULE_5__, type: "video/mp4" });

  dorothyVid2.appendChild(dorothyVidSrc2);
  vids.append(dorothyVid, dorothyVid2);

  const signUp = document.createElement("div");
  signUp.classList.add("sign-up");
  const plushText = document.createElement("div");
  plushText.classList.add("plush", "text");
  plushText.textContent = `Sign up now and get FREE Jill plushie!!!`;
  const plushImg = document.createElement("img");
  (0,_utils_setAttrs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(plushImg, {
    src: _assets_img_jill_jill_fumo_gif__WEBPACK_IMPORTED_MODULE_1__,
    alt: "jill plushie",
    class: "plush-img",
  });
  const button = document.createElement("button");
  button.classList.add("plush", "btn");
  button.textContent = `Click here!`;
  button.addEventListener("mouseover", () => {
    dorothyVid2.classList.remove("toggle");
    dorothyVid.classList.add("toggle");
  });
  button.addEventListener("mouseleave", () => {
    dorothyVid2.classList.add("toggle");
    dorothyVid.classList.remove("toggle");
  });
  button.addEventListener("click", () => {
    window.open("https://miran-mirantee.github.io/sign-up-form/");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNONUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmdEO0FBQ007QUFDTztBQUNFO0FBQ007QUFDQTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWEsWUFBWSxpREFBaUQ7QUFDNUU7QUFDQSxFQUFFLDhEQUFhLGVBQWUsS0FBSywyREFBYyxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFhLFlBQVksaURBQWlEO0FBQzVFO0FBQ0EsRUFBRSw4REFBYSxlQUFlLEtBQUssNkRBQWMscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsOERBQWEsa0JBQWtCLEtBQUssZ0VBQWlCLHFCQUFxQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDhEQUFhLG1CQUFtQixLQUFLLCtEQUFrQixxQkFBcUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2YsU0FBUywyREFBTztBQUNoQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL3V0aWxzL3NldEF0dHJzLmpzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiLi91dGlscy9zZXRBdHRycy5qc1wiO1xyXG5pbXBvcnQgamlsbEdpZiBmcm9tIFwiLi9hc3NldHMvaW1nL2ppbGwtamlsbC1mdW1vLmdpZlwiO1xyXG5pbXBvcnQgamlsbFZpZFdlYnBhY2sgZnJvbSBcIi4vYXNzZXRzL3ZpZGVvL2dsaXRjaC1hbmltZS5tcDRcIjtcclxuaW1wb3J0IGFsbWFWaWRXZWJwYWNrIGZyb20gXCIuL2Fzc2V0cy92aWRlby92YTExaGFsbGEtYWxtYS5tcDRcIjtcclxuaW1wb3J0IGRvcm90aHlWaWRXZWJwYWNrIGZyb20gXCIuL2Fzc2V0cy92aWRlby92YTExaGFsbGEtZG9yb3RoeS5tcDRcIjtcclxuaW1wb3J0IGRvcm90aHlWaWRXZWJwYWNrMiBmcm9tIFwiLi9hc3NldHMvdmlkZW8vdmFsaGFsbGEtcGVyc29uYS5tcDRcIjtcclxuXHJcbmNvbnN0IGFib3V0ID0gKGNvbnRlbnQpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5XCIpO1xyXG5cclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImFib3V0XCIsIFwiaGVhZGxpbmVcIik7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkFib3V0IFZBLTExIEhhbGwtQVwiO1xyXG5cclxuICBjb25zdCBqaWxsVmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoamlsbFZpZCwgeyBhdXRvcGxheTogXCJcIiwgbXV0ZWQ6IFwiXCIsIGxvb3A6IFwiXCIsIGNsYXNzOiBcInZpZFwiIH0pO1xyXG4gIGNvbnN0IGppbGxWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoamlsbFZpZFNyYywgeyBzcmM6IGppbGxWaWRXZWJwYWNrLCB0eXBlOiBcInZpZGVvL21wNFwiIH0pO1xyXG4gIGppbGxWaWQuYXBwZW5kQ2hpbGQoamlsbFZpZFNyYyk7XHJcblxyXG4gIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0MS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJ0ZXh0XCIpO1xyXG4gIGNvbnN0IHRleHQxcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZXh0MXAxLnRleHRDb250ZW50ID0gYFZBLTExIEhBTEwtQTogQ3liZXJwdW5rIEJhcnRlbmRlciBBY3Rpb24gaXMgYSBib296ZSBlbScgdXAgYWJvdXQgd2FpZnVzLCBcclxuICAgICAgICB0ZWNobm9sb2d5LCBhbmQgcG9zdC1keXN0b3BpYSBsaWZlLmA7XHJcbiAgY29uc3QgdGV4dDFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRleHQxcDIudGV4dENvbnRlbnQgPSBgSW4gdGhpcyB3b3JsZCwgY29ycG9yYXRpb25zIHJlaWduIHN1cHJlbWUsIFxyXG4gICAgICAgIGFsbCBodW1hbiBsaWZlIGlzIGluZmVjdGVkIHdpdGggbmFub21hY2hpbmVzIGRlc2lnbmVkIHRvIG9wcHJlc3MgdGhlbSwgXHJcbiAgICAgICAgYW5kIHRoZSB0ZXJyaWZ5aW5nIFdoaXRlIEtuaWdodHMgZW5zdXJlIHRoYXQgZXZlcnlvbmUgb2JleXMgdGhlIGxhd3MuYDtcclxuICBjb25zdCB0ZXh0MXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGV4dDFwMy50ZXh0Q29udGVudCA9IGBCdXQsIHRoaXMgaXMgbm90IGFib3V0IHRob3NlIHBlb3BsZS5gO1xyXG4gIHRleHQxLmFwcGVuZCh0ZXh0MXAxLCB0ZXh0MXAyLCB0ZXh0MXAzKTtcclxuXHJcbiAgY29uc3QgYWxtYVZpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcclxuICBzZXRBdHRyaWJ1dGVzKGFsbWFWaWQsIHsgYXV0b3BsYXk6IFwiXCIsIG11dGVkOiBcIlwiLCBsb29wOiBcIlwiLCBjbGFzczogXCJ2aWRcIiB9KTtcclxuICBjb25zdCBhbG1hVmlkU3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcclxuICBzZXRBdHRyaWJ1dGVzKGFsbWFWaWRTcmMsIHsgc3JjOiBhbG1hVmlkV2VicGFjaywgdHlwZTogXCJ2aWRlby9tcDRcIiB9KTtcclxuICBhbG1hVmlkLmFwcGVuZENoaWxkKGFsbWFWaWRTcmMpO1xyXG5cclxuICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dDIuY2xhc3NMaXN0LmFkZChcImFib3V0XCIsIFwidGV4dFwiKTtcclxuICBjb25zdCB0ZXh0MnAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGV4dDJwMS50ZXh0Q29udGVudCA9IGBZb3UgYXJlIGEgYmFydGVuZGVyIGF0IFZBLTExIEhBTEwtQSwgYWZmZWN0aW9uYXRlbHkgbmlja25hbWVkIFwiVmFsaGFsbGEuXCJcclxuICAgICAgICBBbHRob3VnaCBpdCBpcyBqdXN0IGEgc21hbGwgYmFyIGRvd250b3duLCBcclxuICAgICAgICBpdCBhdHRyYWN0cyB0aGUgbW9zdCBmYXNjaW5hdGluZyBwZW9wbGUgdGhpcyBzaWRlIG9mIGR5c3RvcGlhLlxyXG4gICAgICAgIEtlZXAgeW91ciBjbGllbnRzIGx1YnJpY2F0ZWQgYW5kIHlvdSB3aWxsIGJlIG1hZGUgcHJpdnkgdG8gdGhlIG1vc3QgaW50ZXJlc3Rpbmcgc3Rvcmllcy5gO1xyXG4gIHRleHQyLmFwcGVuZCh0ZXh0MnAxKTtcclxuXHJcbiAgY29uc3Qgb2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9mZmVyLmNsYXNzTGlzdC5hZGQoXCJvZmZlclwiKTtcclxuXHJcbiAgY29uc3QgdmlkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdmlkcy5jbGFzc0xpc3QuYWRkKFwicG9ydHJhaXQtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBkb3JvdGh5VmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZCwge1xyXG4gICAgYXV0b3BsYXk6IFwiXCIsXHJcbiAgICBtdXRlZDogXCJcIixcclxuICAgIGxvb3A6IFwiXCIsXHJcbiAgICBjbGFzczogXCJwb3J0cmFpdFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRvcm90aHlWaWRTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZFNyYywgeyBzcmM6IGRvcm90aHlWaWRXZWJwYWNrLCB0eXBlOiBcInZpZGVvL21wNFwiIH0pO1xyXG4gIGRvcm90aHlWaWQuYXBwZW5kQ2hpbGQoZG9yb3RoeVZpZFNyYyk7XHJcblxyXG4gIGNvbnN0IGRvcm90aHlWaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZDIsIHtcclxuICAgIGF1dG9wbGF5OiBcIlwiLFxyXG4gICAgbXV0ZWQ6IFwiXCIsXHJcbiAgICBsb29wOiBcIlwiLFxyXG4gICAgY2xhc3M6IFwicG9ydHJhaXQgdG9nZ2xlXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgZG9yb3RoeVZpZFNyYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xyXG4gIHNldEF0dHJpYnV0ZXMoZG9yb3RoeVZpZFNyYzIsIHsgc3JjOiBkb3JvdGh5VmlkV2VicGFjazIsIHR5cGU6IFwidmlkZW8vbXA0XCIgfSk7XHJcblxyXG4gIGRvcm90aHlWaWQyLmFwcGVuZENoaWxkKGRvcm90aHlWaWRTcmMyKTtcclxuICB2aWRzLmFwcGVuZChkb3JvdGh5VmlkLCBkb3JvdGh5VmlkMik7XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2lnblVwLmNsYXNzTGlzdC5hZGQoXCJzaWduLXVwXCIpO1xyXG4gIGNvbnN0IHBsdXNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGx1c2hUZXh0LmNsYXNzTGlzdC5hZGQoXCJwbHVzaFwiLCBcInRleHRcIik7XHJcbiAgcGx1c2hUZXh0LnRleHRDb250ZW50ID0gYFNpZ24gdXAgbm93IGFuZCBnZXQgRlJFRSBKaWxsIHBsdXNoaWUhISFgO1xyXG4gIGNvbnN0IHBsdXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzZXRBdHRyaWJ1dGVzKHBsdXNoSW1nLCB7XHJcbiAgICBzcmM6IGppbGxHaWYsXHJcbiAgICBhbHQ6IFwiamlsbCBwbHVzaGllXCIsXHJcbiAgICBjbGFzczogXCJwbHVzaC1pbWdcIixcclxuICB9KTtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGx1c2hcIiwgXCJidG5cIik7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYENsaWNrIGhlcmUhYDtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICBkb3JvdGh5VmlkMi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlXCIpO1xyXG4gICAgZG9yb3RoeVZpZC5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpO1xyXG4gIH0pO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICBkb3JvdGh5VmlkMi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpO1xyXG4gICAgZG9yb3RoeVZpZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlXCIpO1xyXG4gIH0pO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL21pcmFuLW1pcmFudGVlLmdpdGh1Yi5pby9zaWduLXVwLWZvcm0vXCIpO1xyXG4gIH0pO1xyXG5cclxuICBzaWduVXAuYXBwZW5kKHBsdXNoVGV4dCwgcGx1c2hJbWcsIGJ1dHRvbik7XHJcbiAgb2ZmZXIuYXBwZW5kKHZpZHMsIHNpZ25VcCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kKGhlYWRsaW5lLCBqaWxsVmlkLCB0ZXh0MSwgYWxtYVZpZCwgdGV4dDIsIG9mZmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==