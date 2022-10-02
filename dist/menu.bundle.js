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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setAttrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttrs */ "./src/setAttrs.js");


class drink {
    constructor(name, img, description, type, price) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.type = type;
        this.price = price;
    }

    info() {
        console.log(`name: ${this.name}`);
        console.log(`description: ${this.description}`);
        for (let type of this.type)
            console.log(`type: ${type}`);
        console.log(`price: ${this.price}`);
    }
}

let drinks = [];
drinks.push(new drink('Bad Touch', "../src/assets/img/drinks/Bad_Touch.png", "We're nothing but mammals after all.", ['Sour', 'Classy', 'Vintage'], 250));
drinks.push(new drink('Beer', "../src/assets/img/drinks/Beer.png", "Traditionally brewed beer has become a luxury, but this one's pretty close to the real deal...", ['Bubbly', 'Classic', 'Vintage'], 200));
drinks.push(new drink('Bleeding Jane', "../src/assets/img/drinks/Bleeding_Jane.png", "Say the name of this drink three times in front of a mirror and you'll look like a fool.", ['Spicy', 'Classic', 'Sobering'], 200));
drinks.push(new drink('Bloom Light', "../src/assets/img/drinks/BloomLight.png", "It's so unnecessarily brown....", ['Spicy', 'Promo', 'Bland'], 230));
drinks.push(new drink('Blue Fairy', "../src/assets/img/drinks/BlueFairy.png", "One of these will make all your teeth turn blue. Hope you brushed them well.", ['Sweet', 'Girly', 'Soft'], 170));
drinks.push(new drink('Brandtini', "../src/assets/img/drinks/Brandtini.png", "8 out of 10 smug assholes would recommend it but they're too busy being smug assholes.", ['Sweet', 'Classy', 'Happy'], 250));
drinks.push(new drink('Cobalt Velvet', "../src/assets/img/drinks/Cobalt_Velvet.png", "It's like champaigne served on a cup that had a bit of cola left.", ['Bubbly', 'Classy', 'Burning'], 280));
drinks.push(new drink('Crevice Spike', "../src/assets/img/drinks/CreviceSpike.png", "It will knock the drunkenness out of you or knock you out cold.", ['Sour', 'Manly', 'Sobering'], 140));
drinks.push(new drink('Flaming Moai', "../src/assets/img/drinks/FlamingMoai.png", "It's a secret drink that is necessary to bring secret characters to the bar. The recipe is not shown in CALICOMP, and no-one ever asks directly for it.", ['Sour', 'Classy'], 150));
drinks.push(new drink('Fluffy Dream', "../src/assets/img/drinks/Fluffy_Dream.png", "A couple of these will make your tongue feel velvet-y. More of them and you'll be sleeping soundly.", ['Sour', 'Girly', 'Soft'], 170));
drinks.push(new drink('Fringe Weaver', "../src/assets/img/drinks/Fringe_Weaver.png", "It's like drinking ethylic alcohol with a spoonful of sugar.", ['Bubbly', 'Classy', 'Strong'], 260));
drinks.push(new drink('Frothy Water', "../src/assets/img/drinks/FrothyWater.png", "PG-rated shows' favorite Beer ersatz since 2040.", ['Bubbly', 'Classic', 'Bland'], 150));
drinks.push(new drink('Grizzly Temple', "../src/assets/img/drinks/GrizzlyTemple.png", "This one's kinda unbearable. It's mostly for fans of the movie it was used on.", ['Bitter', 'Promo', 'Bland'], 220));
drinks.push(new drink('Gut Punch', "../src/assets/img/drinks/GutPunch.png", `It's supposed to mean "a punch made of innards", but the name actually described what you feel while drinking it.`, ['Bitter', 'Manly', 'Strong'], 80));
drinks.push(new drink('Marsblast', "../src/assets/img/drinks/Marsblast.png", "One of these is enough to leave your face red like the actual planet.", ['Spicy', 'Manly', 'Strong'], 170));
drinks.push(new drink('Mercuryblast', "../src/assets/img/drinks/Mercuryblast.png", "No thermometer was harmed in the creation of this drink.", ['Sour', 'Classy', 'Burning'], 250));
drinks.push(new drink('Moonblast', "../src/assets/img/drinks/Moonblast.png", "No relation to the Hadron cannon you can see on the moon for one week every month.", ['Sweet', 'Girly', 'Happy'], 180));
drinks.push(new drink('Piano Man', "../src/assets/img/drinks/Piano_Man.png", "This drink does not represent the opinions of the Bar Pianists Union or its associates.", ['Sour', 'Promo', 'Strong'], 320));
drinks.push(new drink('Piano Woman', "../src/assets/img/drinks/Piano_Woman.png", "It was originally called Pretty Woman, but too many people complained there should be a Piano Woman if there was a Piano Man.", ['Sweet', 'Promo', 'Happy'], 320));
drinks.push(new drink('Pile Driver', "../src/assets/img/drinks/Pile_driver.png", "It doesn't burn as hard on the tongue but you better not have a sore throat when drinking it...", ['Bitter', 'Manly', 'Burning'], 160));
drinks.push(new drink('Sparkle Star', "../src/assets/img/drinks/SparkleStar.png", "They used to actually sparkle, but too many complaints about skin problem made them redesign the drink without sparkling.", ['Sweet', 'Girly', 'Happy'], 150));
drinks.push(new drink('Sugar Rush', "../src/assets/img/drinks/SugarRush.png", "Sweet, light and fruity. As girly as it gets.", ['Sweet', 'Girly', 'Happy'], 150));
drinks.push(new drink('Sunshine Cloud', "../src/assets/img/drinks/SunshineCloud.png", "Tastes like old chocolate milk with its good smell intact. Some say it tastes like caramel too...", ['Bitter', 'Girly', 'Soft'], 150));
drinks.push(new drink('Suplex', "../src/assets/img/drinks/Suplex.png", "A small twist on the Piledriver, putting more emphasis on the tongue burning and less on the throat burning.", ['Bitter', 'Manly', 'Burning'], 160));
drinks.push(new drink('Zen Star', "../src/assets/img/drinks/Zen_Star.png", "You'd think something so balanced would actually taste nice... you'd be dead wrong.", ['Sour', 'Promo', 'Bland'], 210));

const menu = (content) => {
    const body = document.createElement('div');
    body.classList.add('body', 'temp-border');

    const headline = document.createElement('div');
    headline.classList.add('menu', 'headline');
    headline.textContent = 'Our drinks';
    
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');
    for (let i = 0; i < drinks.length; i++) {
        const drink = document.createElement('div');
        drink.classList.add('drink');

        const name = document.createElement('div');
        name.classList.add('drink-name');
        name.textContent = drinks[i].name;

        const image = document.createElement('img');
        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_0__["default"])(image, {'src': drinks[i].img, 'alt': drinks[i].name, 'class': 'drink-img'});

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${drinks[i].price}`;

        drink.append(name,image, price);
        drinkContainer.append(drink);
    }

    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = 'Information from: https://va11halla.fandom.com/wiki/Drinktionary';

    body.append(headline, drinkContainer, note);
    content.appendChild(body);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7OztVQ041QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkMsb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQWEsU0FBUyxrRUFBa0U7O0FBRWhHO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0QXR0cmlidXRlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIuL3NldEF0dHJzXCI7XG5cbmNsYXNzIGRyaW5rIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWcsIGRlc2NyaXB0aW9uLCB0eXBlLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuXG4gICAgaW5mbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG5hbWU6ICR7dGhpcy5uYW1lfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgZGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0aGlzLnR5cGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdHlwZTogJHt0eXBlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJpY2U6ICR7dGhpcy5wcmljZX1gKTtcbiAgICB9XG59XG5cbmxldCBkcmlua3MgPSBbXTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQmFkIFRvdWNoJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQmFkX1RvdWNoLnBuZ1wiLCBcIldlJ3JlIG5vdGhpbmcgYnV0IG1hbW1hbHMgYWZ0ZXIgYWxsLlwiLCBbJ1NvdXInLCAnQ2xhc3N5JywgJ1ZpbnRhZ2UnXSwgMjUwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0JlZXInLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9CZWVyLnBuZ1wiLCBcIlRyYWRpdGlvbmFsbHkgYnJld2VkIGJlZXIgaGFzIGJlY29tZSBhIGx1eHVyeSwgYnV0IHRoaXMgb25lJ3MgcHJldHR5IGNsb3NlIHRvIHRoZSByZWFsIGRlYWwuLi5cIiwgWydCdWJibHknLCAnQ2xhc3NpYycsICdWaW50YWdlJ10sIDIwMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdCbGVlZGluZyBKYW5lJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQmxlZWRpbmdfSmFuZS5wbmdcIiwgXCJTYXkgdGhlIG5hbWUgb2YgdGhpcyBkcmluayB0aHJlZSB0aW1lcyBpbiBmcm9udCBvZiBhIG1pcnJvciBhbmQgeW91J2xsIGxvb2sgbGlrZSBhIGZvb2wuXCIsIFsnU3BpY3knLCAnQ2xhc3NpYycsICdTb2JlcmluZyddLCAyMDApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQmxvb20gTGlnaHQnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9CbG9vbUxpZ2h0LnBuZ1wiLCBcIkl0J3Mgc28gdW5uZWNlc3NhcmlseSBicm93bi4uLi5cIiwgWydTcGljeScsICdQcm9tbycsICdCbGFuZCddLCAyMzApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQmx1ZSBGYWlyeScsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0JsdWVGYWlyeS5wbmdcIiwgXCJPbmUgb2YgdGhlc2Ugd2lsbCBtYWtlIGFsbCB5b3VyIHRlZXRoIHR1cm4gYmx1ZS4gSG9wZSB5b3UgYnJ1c2hlZCB0aGVtIHdlbGwuXCIsIFsnU3dlZXQnLCAnR2lybHknLCAnU29mdCddLCAxNzApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQnJhbmR0aW5pJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQnJhbmR0aW5pLnBuZ1wiLCBcIjggb3V0IG9mIDEwIHNtdWcgYXNzaG9sZXMgd291bGQgcmVjb21tZW5kIGl0IGJ1dCB0aGV5J3JlIHRvbyBidXN5IGJlaW5nIHNtdWcgYXNzaG9sZXMuXCIsIFsnU3dlZXQnLCAnQ2xhc3N5JywgJ0hhcHB5J10sIDI1MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdDb2JhbHQgVmVsdmV0JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQ29iYWx0X1ZlbHZldC5wbmdcIiwgXCJJdCdzIGxpa2UgY2hhbXBhaWduZSBzZXJ2ZWQgb24gYSBjdXAgdGhhdCBoYWQgYSBiaXQgb2YgY29sYSBsZWZ0LlwiLCBbJ0J1YmJseScsICdDbGFzc3knLCAnQnVybmluZyddLCAyODApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQ3JldmljZSBTcGlrZScsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0NyZXZpY2VTcGlrZS5wbmdcIiwgXCJJdCB3aWxsIGtub2NrIHRoZSBkcnVua2VubmVzcyBvdXQgb2YgeW91IG9yIGtub2NrIHlvdSBvdXQgY29sZC5cIiwgWydTb3VyJywgJ01hbmx5JywgJ1NvYmVyaW5nJ10sIDE0MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdGbGFtaW5nIE1vYWknLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9GbGFtaW5nTW9haS5wbmdcIiwgXCJJdCdzIGEgc2VjcmV0IGRyaW5rIHRoYXQgaXMgbmVjZXNzYXJ5IHRvIGJyaW5nIHNlY3JldCBjaGFyYWN0ZXJzIHRvIHRoZSBiYXIuIFRoZSByZWNpcGUgaXMgbm90IHNob3duIGluIENBTElDT01QLCBhbmQgbm8tb25lIGV2ZXIgYXNrcyBkaXJlY3RseSBmb3IgaXQuXCIsIFsnU291cicsICdDbGFzc3knXSwgMTUwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0ZsdWZmeSBEcmVhbScsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0ZsdWZmeV9EcmVhbS5wbmdcIiwgXCJBIGNvdXBsZSBvZiB0aGVzZSB3aWxsIG1ha2UgeW91ciB0b25ndWUgZmVlbCB2ZWx2ZXQteS4gTW9yZSBvZiB0aGVtIGFuZCB5b3UnbGwgYmUgc2xlZXBpbmcgc291bmRseS5cIiwgWydTb3VyJywgJ0dpcmx5JywgJ1NvZnQnXSwgMTcwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0ZyaW5nZSBXZWF2ZXInLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9GcmluZ2VfV2VhdmVyLnBuZ1wiLCBcIkl0J3MgbGlrZSBkcmlua2luZyBldGh5bGljIGFsY29ob2wgd2l0aCBhIHNwb29uZnVsIG9mIHN1Z2FyLlwiLCBbJ0J1YmJseScsICdDbGFzc3knLCAnU3Ryb25nJ10sIDI2MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdGcm90aHkgV2F0ZXInLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9Gcm90aHlXYXRlci5wbmdcIiwgXCJQRy1yYXRlZCBzaG93cycgZmF2b3JpdGUgQmVlciBlcnNhdHogc2luY2UgMjA0MC5cIiwgWydCdWJibHknLCAnQ2xhc3NpYycsICdCbGFuZCddLCAxNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnR3JpenpseSBUZW1wbGUnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9Hcml6emx5VGVtcGxlLnBuZ1wiLCBcIlRoaXMgb25lJ3Mga2luZGEgdW5iZWFyYWJsZS4gSXQncyBtb3N0bHkgZm9yIGZhbnMgb2YgdGhlIG1vdmllIGl0IHdhcyB1c2VkIG9uLlwiLCBbJ0JpdHRlcicsICdQcm9tbycsICdCbGFuZCddLCAyMjApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnR3V0IFB1bmNoJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvR3V0UHVuY2gucG5nXCIsIGBJdCdzIHN1cHBvc2VkIHRvIG1lYW4gXCJhIHB1bmNoIG1hZGUgb2YgaW5uYXJkc1wiLCBidXQgdGhlIG5hbWUgYWN0dWFsbHkgZGVzY3JpYmVkIHdoYXQgeW91IGZlZWwgd2hpbGUgZHJpbmtpbmcgaXQuYCwgWydCaXR0ZXInLCAnTWFubHknLCAnU3Ryb25nJ10sIDgwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ01hcnNibGFzdCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL01hcnNibGFzdC5wbmdcIiwgXCJPbmUgb2YgdGhlc2UgaXMgZW5vdWdoIHRvIGxlYXZlIHlvdXIgZmFjZSByZWQgbGlrZSB0aGUgYWN0dWFsIHBsYW5ldC5cIiwgWydTcGljeScsICdNYW5seScsICdTdHJvbmcnXSwgMTcwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ01lcmN1cnlibGFzdCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL01lcmN1cnlibGFzdC5wbmdcIiwgXCJObyB0aGVybW9tZXRlciB3YXMgaGFybWVkIGluIHRoZSBjcmVhdGlvbiBvZiB0aGlzIGRyaW5rLlwiLCBbJ1NvdXInLCAnQ2xhc3N5JywgJ0J1cm5pbmcnXSwgMjUwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ01vb25ibGFzdCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL01vb25ibGFzdC5wbmdcIiwgXCJObyByZWxhdGlvbiB0byB0aGUgSGFkcm9uIGNhbm5vbiB5b3UgY2FuIHNlZSBvbiB0aGUgbW9vbiBmb3Igb25lIHdlZWsgZXZlcnkgbW9udGguXCIsIFsnU3dlZXQnLCAnR2lybHknLCAnSGFwcHknXSwgMTgwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ1BpYW5vIE1hbicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1BpYW5vX01hbi5wbmdcIiwgXCJUaGlzIGRyaW5rIGRvZXMgbm90IHJlcHJlc2VudCB0aGUgb3BpbmlvbnMgb2YgdGhlIEJhciBQaWFuaXN0cyBVbmlvbiBvciBpdHMgYXNzb2NpYXRlcy5cIiwgWydTb3VyJywgJ1Byb21vJywgJ1N0cm9uZyddLCAzMjApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnUGlhbm8gV29tYW4nLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9QaWFub19Xb21hbi5wbmdcIiwgXCJJdCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgUHJldHR5IFdvbWFuLCBidXQgdG9vIG1hbnkgcGVvcGxlIGNvbXBsYWluZWQgdGhlcmUgc2hvdWxkIGJlIGEgUGlhbm8gV29tYW4gaWYgdGhlcmUgd2FzIGEgUGlhbm8gTWFuLlwiLCBbJ1N3ZWV0JywgJ1Byb21vJywgJ0hhcHB5J10sIDMyMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdQaWxlIERyaXZlcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1BpbGVfZHJpdmVyLnBuZ1wiLCBcIkl0IGRvZXNuJ3QgYnVybiBhcyBoYXJkIG9uIHRoZSB0b25ndWUgYnV0IHlvdSBiZXR0ZXIgbm90IGhhdmUgYSBzb3JlIHRocm9hdCB3aGVuIGRyaW5raW5nIGl0Li4uXCIsIFsnQml0dGVyJywgJ01hbmx5JywgJ0J1cm5pbmcnXSwgMTYwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ1NwYXJrbGUgU3RhcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1NwYXJrbGVTdGFyLnBuZ1wiLCBcIlRoZXkgdXNlZCB0byBhY3R1YWxseSBzcGFya2xlLCBidXQgdG9vIG1hbnkgY29tcGxhaW50cyBhYm91dCBza2luIHByb2JsZW0gbWFkZSB0aGVtIHJlZGVzaWduIHRoZSBkcmluayB3aXRob3V0IHNwYXJrbGluZy5cIiwgWydTd2VldCcsICdHaXJseScsICdIYXBweSddLCAxNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnU3VnYXIgUnVzaCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1N1Z2FyUnVzaC5wbmdcIiwgXCJTd2VldCwgbGlnaHQgYW5kIGZydWl0eS4gQXMgZ2lybHkgYXMgaXQgZ2V0cy5cIiwgWydTd2VldCcsICdHaXJseScsICdIYXBweSddLCAxNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnU3Vuc2hpbmUgQ2xvdWQnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9TdW5zaGluZUNsb3VkLnBuZ1wiLCBcIlRhc3RlcyBsaWtlIG9sZCBjaG9jb2xhdGUgbWlsayB3aXRoIGl0cyBnb29kIHNtZWxsIGludGFjdC4gU29tZSBzYXkgaXQgdGFzdGVzIGxpa2UgY2FyYW1lbCB0b28uLi5cIiwgWydCaXR0ZXInLCAnR2lybHknLCAnU29mdCddLCAxNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnU3VwbGV4JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvU3VwbGV4LnBuZ1wiLCBcIkEgc21hbGwgdHdpc3Qgb24gdGhlIFBpbGVkcml2ZXIsIHB1dHRpbmcgbW9yZSBlbXBoYXNpcyBvbiB0aGUgdG9uZ3VlIGJ1cm5pbmcgYW5kIGxlc3Mgb24gdGhlIHRocm9hdCBidXJuaW5nLlwiLCBbJ0JpdHRlcicsICdNYW5seScsICdCdXJuaW5nJ10sIDE2MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdaZW4gU3RhcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1plbl9TdGFyLnBuZ1wiLCBcIllvdSdkIHRoaW5rIHNvbWV0aGluZyBzbyBiYWxhbmNlZCB3b3VsZCBhY3R1YWxseSB0YXN0ZSBuaWNlLi4uIHlvdSdkIGJlIGRlYWQgd3JvbmcuXCIsIFsnU291cicsICdQcm9tbycsICdCbGFuZCddLCAyMTApKTtcblxuY29uc3QgbWVudSA9IChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScsICd0ZW1wLWJvcmRlcicpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ2hlYWRsaW5lJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnT3VyIGRyaW5rcyc7XG4gICAgXG4gICAgY29uc3QgZHJpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcmluay1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkcmluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkcmluay5jbGFzc0xpc3QuYWRkKCdkcmluaycpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdkcmluay1uYW1lJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkcmlua3NbaV0ubmFtZTtcblxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGltYWdlLCB7J3NyYyc6IGRyaW5rc1tpXS5pbWcsICdhbHQnOiBkcmlua3NbaV0ubmFtZSwgJ2NsYXNzJzogJ2RyaW5rLWltZyd9KTtcblxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGAkJHtkcmlua3NbaV0ucHJpY2V9YDtcblxuICAgICAgICBkcmluay5hcHBlbmQobmFtZSxpbWFnZSwgcHJpY2UpO1xuICAgICAgICBkcmlua0NvbnRhaW5lci5hcHBlbmQoZHJpbmspO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgICBub3RlLnRleHRDb250ZW50ID0gJ0luZm9ybWF0aW9uIGZyb206IGh0dHBzOi8vdmExMWhhbGxhLmZhbmRvbS5jb20vd2lraS9Ecmlua3Rpb25hcnknO1xuXG4gICAgYm9keS5hcHBlbmQoaGVhZGxpbmUsIGRyaW5rQ29udGFpbmVyLCBub3RlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=