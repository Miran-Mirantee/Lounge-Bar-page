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

const displayInfo = (drink, node) => {
    const check = document.querySelector('.info');
    if (!check) {
        const info = document.createElement('div');
        info.classList.add('info');
        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.textContent = drink.description;
        // info.textContent

        // info.style.top = `${getOffset(position).top}px`;
        // info.style.left = `${getOffset(position).left}px`;
        info.append(desc);
        node.appendChild(info);
    }
};

const killInfo = (node) => {
    const info = document.querySelector('.info');
    if (info)
        node.removeChild(info);
}

// temp
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}  

const menu = (content) => {
    const body = document.createElement('div');
    body.classList.add('body');

    const headline = document.createElement('div');
    headline.classList.add('menu', 'headline');
    headline.textContent = 'Our drinks';
    
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');
    for (let i = 0; i < drinks.length; i++) {
        const drink = document.createElement('div');
        drink.classList.add('drink');
        drink.addEventListener('mouseover', () => {
            displayInfo(drinks[i], drink);
            // console.log(getOffset(drink));
            
        });
        drink.addEventListener('mouseleave', () => {
            killInfo(drink);
        });

        const name = document.createElement('div');
        name.classList.add('drink-name');
        name.textContent = drinks[i].name;

        const image = document.createElement('img');
        (0,_setAttrs__WEBPACK_IMPORTED_MODULE_0__["default"])(image, {'src': drinks[i].img, 'alt': drinks[i].name, 'class': 'drink-img'});

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${drinks[i].price}`;

        drink.append(name, image, price);
        drinkContainer.append(drink);
    }

    const note = document.createElement('a');
    (0,_setAttrs__WEBPACK_IMPORTED_MODULE_0__["default"])(note, {'class': 'note', 'href': 'https://va11halla.fandom.com/wiki/Drinktionary'})
    note.textContent = 'Information from: https://va11halla.fandom.com/wiki/Drinktionary';

    body.append(headline, drinkContainer, note);
    content.appendChild(body);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7OztVQ041QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkMsb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLHdCQUF3QjtBQUN2RCxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBYSxTQUFTLGtFQUFrRTs7QUFFaEc7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscURBQWEsUUFBUSwwRUFBMEU7QUFDbkc7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvdW5nZS1iYXItcGFnZS8uL3NyYy9zZXRBdHRycy5qcyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG91bmdlLWJhci1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sb3VuZ2UtYmFyLXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRBdHRyaWJ1dGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIi4vc2V0QXR0cnNcIjtcblxuY2xhc3MgZHJpbmsge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltZywgZGVzY3JpcHRpb24sIHR5cGUsIHByaWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG5cbiAgICBpbmZvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbmFtZTogJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMudHlwZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0eXBlOiAke3R5cGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBwcmljZTogJHt0aGlzLnByaWNlfWApO1xuICAgIH1cbn1cblxubGV0IGRyaW5rcyA9IFtdO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdCYWQgVG91Y2gnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9CYWRfVG91Y2gucG5nXCIsIFwiV2UncmUgbm90aGluZyBidXQgbWFtbWFscyBhZnRlciBhbGwuXCIsIFsnU291cicsICdDbGFzc3knLCAnVmludGFnZSddLCAyNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnQmVlcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0JlZXIucG5nXCIsIFwiVHJhZGl0aW9uYWxseSBicmV3ZWQgYmVlciBoYXMgYmVjb21lIGEgbHV4dXJ5LCBidXQgdGhpcyBvbmUncyBwcmV0dHkgY2xvc2UgdG8gdGhlIHJlYWwgZGVhbC4uLlwiLCBbJ0J1YmJseScsICdDbGFzc2ljJywgJ1ZpbnRhZ2UnXSwgMjAwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0JsZWVkaW5nIEphbmUnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9CbGVlZGluZ19KYW5lLnBuZ1wiLCBcIlNheSB0aGUgbmFtZSBvZiB0aGlzIGRyaW5rIHRocmVlIHRpbWVzIGluIGZyb250IG9mIGEgbWlycm9yIGFuZCB5b3UnbGwgbG9vayBsaWtlIGEgZm9vbC5cIiwgWydTcGljeScsICdDbGFzc2ljJywgJ1NvYmVyaW5nJ10sIDIwMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdCbG9vbSBMaWdodCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0Jsb29tTGlnaHQucG5nXCIsIFwiSXQncyBzbyB1bm5lY2Vzc2FyaWx5IGJyb3duLi4uLlwiLCBbJ1NwaWN5JywgJ1Byb21vJywgJ0JsYW5kJ10sIDIzMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdCbHVlIEZhaXJ5JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQmx1ZUZhaXJ5LnBuZ1wiLCBcIk9uZSBvZiB0aGVzZSB3aWxsIG1ha2UgYWxsIHlvdXIgdGVldGggdHVybiBibHVlLiBIb3BlIHlvdSBicnVzaGVkIHRoZW0gd2VsbC5cIiwgWydTd2VldCcsICdHaXJseScsICdTb2Z0J10sIDE3MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdCcmFuZHRpbmknLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9CcmFuZHRpbmkucG5nXCIsIFwiOCBvdXQgb2YgMTAgc211ZyBhc3Nob2xlcyB3b3VsZCByZWNvbW1lbmQgaXQgYnV0IHRoZXkncmUgdG9vIGJ1c3kgYmVpbmcgc211ZyBhc3Nob2xlcy5cIiwgWydTd2VldCcsICdDbGFzc3knLCAnSGFwcHknXSwgMjUwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0NvYmFsdCBWZWx2ZXQnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9Db2JhbHRfVmVsdmV0LnBuZ1wiLCBcIkl0J3MgbGlrZSBjaGFtcGFpZ25lIHNlcnZlZCBvbiBhIGN1cCB0aGF0IGhhZCBhIGJpdCBvZiBjb2xhIGxlZnQuXCIsIFsnQnViYmx5JywgJ0NsYXNzeScsICdCdXJuaW5nJ10sIDI4MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdDcmV2aWNlIFNwaWtlJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvQ3JldmljZVNwaWtlLnBuZ1wiLCBcIkl0IHdpbGwga25vY2sgdGhlIGRydW5rZW5uZXNzIG91dCBvZiB5b3Ugb3Iga25vY2sgeW91IG91dCBjb2xkLlwiLCBbJ1NvdXInLCAnTWFubHknLCAnU29iZXJpbmcnXSwgMTQwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0ZsYW1pbmcgTW9haScsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0ZsYW1pbmdNb2FpLnBuZ1wiLCBcIkl0J3MgYSBzZWNyZXQgZHJpbmsgdGhhdCBpcyBuZWNlc3NhcnkgdG8gYnJpbmcgc2VjcmV0IGNoYXJhY3RlcnMgdG8gdGhlIGJhci4gVGhlIHJlY2lwZSBpcyBub3Qgc2hvd24gaW4gQ0FMSUNPTVAsIGFuZCBuby1vbmUgZXZlciBhc2tzIGRpcmVjdGx5IGZvciBpdC5cIiwgWydTb3VyJywgJ0NsYXNzeSddLCAxNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnRmx1ZmZ5IERyZWFtJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvRmx1ZmZ5X0RyZWFtLnBuZ1wiLCBcIkEgY291cGxlIG9mIHRoZXNlIHdpbGwgbWFrZSB5b3VyIHRvbmd1ZSBmZWVsIHZlbHZldC15LiBNb3JlIG9mIHRoZW0gYW5kIHlvdSdsbCBiZSBzbGVlcGluZyBzb3VuZGx5LlwiLCBbJ1NvdXInLCAnR2lybHknLCAnU29mdCddLCAxNzApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnRnJpbmdlIFdlYXZlcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0ZyaW5nZV9XZWF2ZXIucG5nXCIsIFwiSXQncyBsaWtlIGRyaW5raW5nIGV0aHlsaWMgYWxjb2hvbCB3aXRoIGEgc3Bvb25mdWwgb2Ygc3VnYXIuXCIsIFsnQnViYmx5JywgJ0NsYXNzeScsICdTdHJvbmcnXSwgMjYwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ0Zyb3RoeSBXYXRlcicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0Zyb3RoeVdhdGVyLnBuZ1wiLCBcIlBHLXJhdGVkIHNob3dzJyBmYXZvcml0ZSBCZWVyIGVyc2F0eiBzaW5jZSAyMDQwLlwiLCBbJ0J1YmJseScsICdDbGFzc2ljJywgJ0JsYW5kJ10sIDE1MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdHcml6emx5IFRlbXBsZScsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL0dyaXp6bHlUZW1wbGUucG5nXCIsIFwiVGhpcyBvbmUncyBraW5kYSB1bmJlYXJhYmxlLiBJdCdzIG1vc3RseSBmb3IgZmFucyBvZiB0aGUgbW92aWUgaXQgd2FzIHVzZWQgb24uXCIsIFsnQml0dGVyJywgJ1Byb21vJywgJ0JsYW5kJ10sIDIyMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdHdXQgUHVuY2gnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9HdXRQdW5jaC5wbmdcIiwgYEl0J3Mgc3VwcG9zZWQgdG8gbWVhbiBcImEgcHVuY2ggbWFkZSBvZiBpbm5hcmRzXCIsIGJ1dCB0aGUgbmFtZSBhY3R1YWxseSBkZXNjcmliZWQgd2hhdCB5b3UgZmVlbCB3aGlsZSBkcmlua2luZyBpdC5gLCBbJ0JpdHRlcicsICdNYW5seScsICdTdHJvbmcnXSwgODApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnTWFyc2JsYXN0JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvTWFyc2JsYXN0LnBuZ1wiLCBcIk9uZSBvZiB0aGVzZSBpcyBlbm91Z2ggdG8gbGVhdmUgeW91ciBmYWNlIHJlZCBsaWtlIHRoZSBhY3R1YWwgcGxhbmV0LlwiLCBbJ1NwaWN5JywgJ01hbmx5JywgJ1N0cm9uZyddLCAxNzApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnTWVyY3VyeWJsYXN0JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvTWVyY3VyeWJsYXN0LnBuZ1wiLCBcIk5vIHRoZXJtb21ldGVyIHdhcyBoYXJtZWQgaW4gdGhlIGNyZWF0aW9uIG9mIHRoaXMgZHJpbmsuXCIsIFsnU291cicsICdDbGFzc3knLCAnQnVybmluZyddLCAyNTApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnTW9vbmJsYXN0JywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvTW9vbmJsYXN0LnBuZ1wiLCBcIk5vIHJlbGF0aW9uIHRvIHRoZSBIYWRyb24gY2Fubm9uIHlvdSBjYW4gc2VlIG9uIHRoZSBtb29uIGZvciBvbmUgd2VlayBldmVyeSBtb250aC5cIiwgWydTd2VldCcsICdHaXJseScsICdIYXBweSddLCAxODApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnUGlhbm8gTWFuJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvUGlhbm9fTWFuLnBuZ1wiLCBcIlRoaXMgZHJpbmsgZG9lcyBub3QgcmVwcmVzZW50IHRoZSBvcGluaW9ucyBvZiB0aGUgQmFyIFBpYW5pc3RzIFVuaW9uIG9yIGl0cyBhc3NvY2lhdGVzLlwiLCBbJ1NvdXInLCAnUHJvbW8nLCAnU3Ryb25nJ10sIDMyMCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdQaWFubyBXb21hbicsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1BpYW5vX1dvbWFuLnBuZ1wiLCBcIkl0IHdhcyBvcmlnaW5hbGx5IGNhbGxlZCBQcmV0dHkgV29tYW4sIGJ1dCB0b28gbWFueSBwZW9wbGUgY29tcGxhaW5lZCB0aGVyZSBzaG91bGQgYmUgYSBQaWFubyBXb21hbiBpZiB0aGVyZSB3YXMgYSBQaWFubyBNYW4uXCIsIFsnU3dlZXQnLCAnUHJvbW8nLCAnSGFwcHknXSwgMzIwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ1BpbGUgRHJpdmVyJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvUGlsZV9kcml2ZXIucG5nXCIsIFwiSXQgZG9lc24ndCBidXJuIGFzIGhhcmQgb24gdGhlIHRvbmd1ZSBidXQgeW91IGJldHRlciBub3QgaGF2ZSBhIHNvcmUgdGhyb2F0IHdoZW4gZHJpbmtpbmcgaXQuLi5cIiwgWydCaXR0ZXInLCAnTWFubHknLCAnQnVybmluZyddLCAxNjApKTtcbmRyaW5rcy5wdXNoKG5ldyBkcmluaygnU3BhcmtsZSBTdGFyJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvU3BhcmtsZVN0YXIucG5nXCIsIFwiVGhleSB1c2VkIHRvIGFjdHVhbGx5IHNwYXJrbGUsIGJ1dCB0b28gbWFueSBjb21wbGFpbnRzIGFib3V0IHNraW4gcHJvYmxlbSBtYWRlIHRoZW0gcmVkZXNpZ24gdGhlIGRyaW5rIHdpdGhvdXQgc3BhcmtsaW5nLlwiLCBbJ1N3ZWV0JywgJ0dpcmx5JywgJ0hhcHB5J10sIDE1MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdTdWdhciBSdXNoJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvU3VnYXJSdXNoLnBuZ1wiLCBcIlN3ZWV0LCBsaWdodCBhbmQgZnJ1aXR5LiBBcyBnaXJseSBhcyBpdCBnZXRzLlwiLCBbJ1N3ZWV0JywgJ0dpcmx5JywgJ0hhcHB5J10sIDE1MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdTdW5zaGluZSBDbG91ZCcsIFwiLi4vc3JjL2Fzc2V0cy9pbWcvZHJpbmtzL1N1bnNoaW5lQ2xvdWQucG5nXCIsIFwiVGFzdGVzIGxpa2Ugb2xkIGNob2NvbGF0ZSBtaWxrIHdpdGggaXRzIGdvb2Qgc21lbGwgaW50YWN0LiBTb21lIHNheSBpdCB0YXN0ZXMgbGlrZSBjYXJhbWVsIHRvby4uLlwiLCBbJ0JpdHRlcicsICdHaXJseScsICdTb2Z0J10sIDE1MCkpO1xuZHJpbmtzLnB1c2gobmV3IGRyaW5rKCdTdXBsZXgnLCBcIi4uL3NyYy9hc3NldHMvaW1nL2RyaW5rcy9TdXBsZXgucG5nXCIsIFwiQSBzbWFsbCB0d2lzdCBvbiB0aGUgUGlsZWRyaXZlciwgcHV0dGluZyBtb3JlIGVtcGhhc2lzIG9uIHRoZSB0b25ndWUgYnVybmluZyBhbmQgbGVzcyBvbiB0aGUgdGhyb2F0IGJ1cm5pbmcuXCIsIFsnQml0dGVyJywgJ01hbmx5JywgJ0J1cm5pbmcnXSwgMTYwKSk7XG5kcmlua3MucHVzaChuZXcgZHJpbmsoJ1plbiBTdGFyJywgXCIuLi9zcmMvYXNzZXRzL2ltZy9kcmlua3MvWmVuX1N0YXIucG5nXCIsIFwiWW91J2QgdGhpbmsgc29tZXRoaW5nIHNvIGJhbGFuY2VkIHdvdWxkIGFjdHVhbGx5IHRhc3RlIG5pY2UuLi4geW91J2QgYmUgZGVhZCB3cm9uZy5cIiwgWydTb3VyJywgJ1Byb21vJywgJ0JsYW5kJ10sIDIxMCkpO1xuXG5jb25zdCBkaXNwbGF5SW5mbyA9IChkcmluaywgbm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKTtcbiAgICBpZiAoIWNoZWNrKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBkcmluay5kZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gaW5mby50ZXh0Q29udGVudFxuXG4gICAgICAgIC8vIGluZm8uc3R5bGUudG9wID0gYCR7Z2V0T2Zmc2V0KHBvc2l0aW9uKS50b3B9cHhgO1xuICAgICAgICAvLyBpbmZvLnN0eWxlLmxlZnQgPSBgJHtnZXRPZmZzZXQocG9zaXRpb24pLmxlZnR9cHhgO1xuICAgICAgICBpbmZvLmFwcGVuZChkZXNjKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICB9XG59O1xuXG5jb25zdCBraWxsSW5mbyA9IChub2RlKSA9PiB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG4gICAgaWYgKGluZm8pXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoaW5mbyk7XG59XG5cbi8vIHRlbXBcbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFlcbiAgICB9O1xufSAgXG5cbmNvbnN0IG1lbnUgPSAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnbWVudScsICdoZWFkbGluZScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ091ciBkcmlua3MnO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJpbmstY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJpbmsuY2xhc3NMaXN0LmFkZCgnZHJpbmsnKTtcbiAgICAgICAgZHJpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oZHJpbmtzW2ldLCBkcmluayk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRPZmZzZXQoZHJpbmspKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgZHJpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGtpbGxJbmZvKGRyaW5rKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLW5hbWUnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRyaW5rc1tpXS5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoaW1hZ2UsIHsnc3JjJzogZHJpbmtzW2ldLmltZywgJ2FsdCc6IGRyaW5rc1tpXS5uYW1lLCAnY2xhc3MnOiAnZHJpbmstaW1nJ30pO1xuXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gYCQke2RyaW5rc1tpXS5wcmljZX1gO1xuXG4gICAgICAgIGRyaW5rLmFwcGVuZChuYW1lLCBpbWFnZSwgcHJpY2UpO1xuICAgICAgICBkcmlua0NvbnRhaW5lci5hcHBlbmQoZHJpbmspO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc2V0QXR0cmlidXRlcyhub3RlLCB7J2NsYXNzJzogJ25vdGUnLCAnaHJlZic6ICdodHRwczovL3ZhMTFoYWxsYS5mYW5kb20uY29tL3dpa2kvRHJpbmt0aW9uYXJ5J30pXG4gICAgbm90ZS50ZXh0Q29udGVudCA9ICdJbmZvcm1hdGlvbiBmcm9tOiBodHRwczovL3ZhMTFoYWxsYS5mYW5kb20uY29tL3dpa2kvRHJpbmt0aW9uYXJ5JztcblxuICAgIGJvZHkuYXBwZW5kKGhlYWRsaW5lLCBkcmlua0NvbnRhaW5lciwgbm90ZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9