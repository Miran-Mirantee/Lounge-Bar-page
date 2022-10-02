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

export default menu;
export {
    
};
