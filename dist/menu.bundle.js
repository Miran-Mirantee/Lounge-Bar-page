/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDBGQUEwRjs7QUFFbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7QUFHbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IG1lbnUgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknLCAndGVtcC1ib3JkZXInKTtcblxuICAgIGNvbnN0IHdlbGNvbWVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZUhlYWQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScsICdoZWFkbGluZScpO1xuICAgIHdlbGNvbWVIZWFkLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gVmEtMTEgaGFsbC1hJztcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNldEF0dHJpYnV0ZXMoaW1nLCB7J3NyYyc6ICcuLi9zcmMvYXNzZXRzL2ltZy9iYXIud2VicCcsICdhbHQnOiAndmFsbGhhbGxhIGZyb20gb3V0c2lkZScsICdjbGFzcyc6ICdib2R5LWltZyd9KTtcblxuICAgIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScsICd0ZXh0Jyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnT24gYSBzbWFsbCByb2FkIGp1c3Qgc2Vjb25kcyBhd2F5IGZyb20gdGhlIG1haW4gc3RyZWV0LCBzb21ld2hlcmUgbmVhciB0aGUgc2x1bXMsIHlvdSBjYW4gZmluZCB0aGUgSGFsbCBBIG9mIHRoZSBCVEMtY2VydGlmaWVkIGJhciBjb2RlZCBWQS0xMS4uLic7XG4gICAgcDIudGV4dENvbnRlbnQgPSBcIi4uLmJ1dCB0aGF0J3MgYSBtb3V0aGZ1bCwgc28gd2UganVzdCBjYWxsIGl0IFZhbGhhbGxhLlwiO1xuICAgIHAzLnRleHRDb250ZW50ID0gJ0Egc21hbGwgb2FzaXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgY29uY3JldGUgZGVzZXJ0LiBBIGZvdW50YWluIG9mIHNwaXJpdHMgd2FpdGluZyBmb3IgdGlyZWQgc291bHMuJztcblxuICAgIGNvbnN0IHJlY29tbWVuZGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVjb21tZW5kZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kZWQtZHJpbmtzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHJlY29tbWVuZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVjb21tZW5kZWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVjb21tZW5kZWQuY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kZWQtZHJpbmtzJylcbiAgICByZWNvbW1lbmRlZDIuY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kZWQtZHJpbmtzJywgJ3NlY29uZCcpO1xuXG4gICAgcmVjb21tZW5kZWRDb250YWluZXIuYXBwZW5kKHJlY29tbWVuZGVkLCByZWNvbW1lbmRlZDIpO1xuICAgIHdlbGNvbWVUZXh0LmFwcGVuZChwMSwgcDIsIHAzKTtcbiAgICBib2R5LmFwcGVuZCh3ZWxjb21lSGVhZCwgaW1nLCB3ZWxjb21lVGV4dCwgcmVjb21tZW5kZWRDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuZXhwb3J0IHtcbiAgICBcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=