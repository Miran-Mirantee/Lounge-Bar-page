console.log(`I think it worked!`);

import menu from './menu.js';
import about from './about.js';
import setAttributes from './setAttrs.js';
import logoImg from './assets/img/logo.png';
import frontBarImg from './assets/img/bar.webp';
import './style.css';

const content = document.getElementById('content');

function clearBody() {
    const body = document.querySelector('.body');
    if (body) {
        body.remove();
    }
}

const background = (() => {
    const background = document.createElement('div');
    background.classList.add('bg');
    document.body.appendChild(background);
})();

const header = (() => {
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('img');
    setAttributes(logo, {'src': logoImg, 'alt': 'vallhalla logo', 'class': 'logo'});
    
    const tab = document.createElement('div');
    tab.classList.add('tab');   
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    homeBtn.classList.add('home', 'btn');
    menuBtn.classList.add('menu', 'btn');
    aboutBtn.classList.add('about', 'btn');
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    aboutBtn.textContent = 'About';
    homeBtn.addEventListener('click', () => {
        clearBody();
        home();
    });
    menuBtn.addEventListener('click', () => {
        clearBody();
        menu(content);
    });
    aboutBtn.addEventListener('click', () => {
        clearBody();
        about(content);
    });
    
    tab.append(homeBtn, menuBtn, aboutBtn);
    header.append(tab);
    content.append(logo, header);    
})();

const home = () => {
    const body = document.createElement('div');
    body.classList.add('body');

    const welcomeHead = document.createElement('div');
    welcomeHead.classList.add('welcome', 'headline');
    welcomeHead.textContent = 'Welcome to VA-11 Hall-A';

    const img = document.createElement('img');
    setAttributes(img, {'src': frontBarImg, 'alt': 'vallhalla from outside', 'class': 'body-img'});

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

// about(content);
// menu(content);
home();

