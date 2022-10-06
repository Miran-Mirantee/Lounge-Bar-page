import setAttributes from './setAttrs';
import badTouchImg from './assets/img/drinks/Bad_Touch.png';
import beerImg from './assets/img/drinks/Beer.png';
import bleedingJaneImg from './assets/img/drinks/Bleeding_Jane.png';
import bloomLightImg from './assets/img/drinks/BloomLight.png';
import blueFairyImg from './assets/img/drinks/BlueFairy.png';
import brandtiniImg from './assets/img/drinks/Brandtini.png';
import cobaltVelvetImg from './assets/img/drinks/Cobalt_Velvet.png';
import creviceSpikeImg from './assets/img/drinks/CreviceSpike.png';
import flamingMoaiImg from './assets/img/drinks/FlamingMoai.png';
import fluffyDreamImg from './assets/img/drinks/Fluffy_Dream.png';
import fringeWeaverImg from './assets/img/drinks/Fringe_Weaver.png';
import frothyWaterImg from './assets/img/drinks/FrothyWater.png';
import grizzlyTempleImg from './assets/img/drinks/GrizzlyTemple.png';
import gutPunchImg from './assets/img/drinks/GutPunch.png';
import marsblastImg from './assets/img/drinks/Marsblast.png';
import mercuryblastImg from './assets/img/drinks/Mercuryblast.png';
import moonblastImg from './assets/img/drinks/Moonblast.png';
import pianoManImg from './assets/img/drinks/Piano_Man.png';
import pianoWomanImg from './assets/img/drinks/Piano_Woman.png';
import pileDriverImg from './assets/img/drinks/Pile_driver.png';
import sparkleStarImg from './assets/img/drinks/SparkleStar.png';
import sugarRushImg from './assets/img/drinks/SugarRush.png';
import sunshineCloudImg from './assets/img/drinks/SunshineCloud.png';
import suplexImg from './assets/img/drinks/Suplex.png';
import zenStarImg from './assets/img/drinks/Zen_Star.png';

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
drinks.push(new drink('Bad Touch', badTouchImg, "We're nothing but mammals after all.", ['Sour', 'Classy', 'Vintage'], 250));
drinks.push(new drink('Beer', beerImg, "Traditionally brewed beer has become a luxury, but this one's pretty close to the real deal...", ['Bubbly', 'Classic', 'Vintage'], 200));
drinks.push(new drink('Bleeding Jane', bleedingJaneImg, "Say the name of this drink three times in front of a mirror and you'll look like a fool.", ['Spicy', 'Classic', 'Sobering'], 200));
drinks.push(new drink('Bloom Light', bloomLightImg, "It's so unnecessarily brown....", ['Spicy', 'Promo', 'Bland'], 230));
drinks.push(new drink('Blue Fairy', blueFairyImg, "One of these will make all your teeth turn blue. Hope you brushed them well.", ['Sweet', 'Girly', 'Soft'], 170));
drinks.push(new drink('Brandtini', brandtiniImg, "8 out of 10 smug assholes would recommend it but they're too busy being smug assholes.", ['Sweet', 'Classy', 'Happy'], 250));
drinks.push(new drink('Cobalt Velvet', cobaltVelvetImg, "It's like champaigne served on a cup that had a bit of cola left.", ['Bubbly', 'Classy', 'Burning'], 280));
drinks.push(new drink('Crevice Spike', creviceSpikeImg, "It will knock the drunkenness out of you or knock you out cold.", ['Sour', 'Manly', 'Sobering'], 140));
drinks.push(new drink('Flaming Moai', flamingMoaiImg, "It's a secret drink that is necessary to bring secret characters to the bar. The recipe is not shown in CALICOMP, and no-one ever asks directly for it.", ['Sour', 'Classy'], 150));
drinks.push(new drink('Fluffy Dream', fluffyDreamImg, "A couple of these will make your tongue feel velvet-y. More of them and you'll be sleeping soundly.", ['Sour', 'Girly', 'Soft'], 170));
drinks.push(new drink('Fringe Weaver', fringeWeaverImg, "It's like drinking ethylic alcohol with a spoonful of sugar.", ['Bubbly', 'Classy', 'Strong'], 260));
drinks.push(new drink('Frothy Water', frothyWaterImg, "PG-rated shows' favorite Beer ersatz since 2040.", ['Bubbly', 'Classic', 'Bland'], 150));
drinks.push(new drink('Grizzly Temple', grizzlyTempleImg, "This one's kinda unbearable. It's mostly for fans of the movie it was used on.", ['Bitter', 'Promo', 'Bland'], 220));
drinks.push(new drink('Gut Punch', gutPunchImg, `It's supposed to mean "a punch made of innards", but the name actually described what you feel while drinking it.`, ['Bitter', 'Manly', 'Strong'], 80));
drinks.push(new drink('Marsblast', marsblastImg, "One of these is enough to leave your face red like the actual planet.", ['Spicy', 'Manly', 'Strong'], 170));
drinks.push(new drink('Mercuryblast', mercuryblastImg, "No thermometer was harmed in the creation of this drink.", ['Sour', 'Classy', 'Burning'], 250));
drinks.push(new drink('Moonblast', moonblastImg, "No relation to the Hadron cannon you can see on the moon for one week every month.", ['Sweet', 'Girly', 'Happy'], 180));
drinks.push(new drink('Piano Man', pianoManImg, "This drink does not represent the opinions of the Bar Pianists Union or its associates.", ['Sour', 'Promo', 'Strong'], 320));
drinks.push(new drink('Piano Woman', pianoWomanImg, "It was originally called Pretty Woman, but too many people complained there should be a Piano Woman if there was a Piano Man.", ['Sweet', 'Promo', 'Happy'], 320));
drinks.push(new drink('Pile Driver', pileDriverImg, "It doesn't burn as hard on the tongue but you better not have a sore throat when drinking it...", ['Bitter', 'Manly', 'Burning'], 160));
drinks.push(new drink('Sparkle Star', sparkleStarImg, "They used to actually sparkle, but too many complaints about skin problem made them redesign the drink without sparkling.", ['Sweet', 'Girly', 'Happy'], 150));
drinks.push(new drink('Sugar Rush', sugarRushImg, "Sweet, light and fruity. As girly as it gets.", ['Sweet', 'Girly', 'Happy'], 150));
drinks.push(new drink('Sunshine Cloud', sunshineCloudImg, "Tastes like old chocolate milk with its good smell intact. Some say it tastes like caramel too...", ['Bitter', 'Girly', 'Soft'], 150));
drinks.push(new drink('Suplex', suplexImg, "A small twist on the Piledriver, putting more emphasis on the tongue burning and less on the throat burning.", ['Bitter', 'Manly', 'Burning'], 160));
drinks.push(new drink('Zen Star', zenStarImg, "You'd think something so balanced would actually taste nice... you'd be dead wrong.", ['Sour', 'Promo', 'Bland'], 210));

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom,
    };
}

const displayInfo = (drink, node) => {
    const check = document.querySelector('.info');
    if (!check) {
        const info = document.createElement('div');
        info.classList.add('info');
        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.textContent = drink.description;
        const flavour = document.createElement('div');
        flavour.classList.add('flavour');
        flavour.textContent = `Flavour: ${drink.type[0]}`;
        
        const typeList = document.createElement('div');
        typeList.classList.add('type');
        let type = []
        for (let i = 1; i < drink.type.length; i++) {
            type.push(drink.type[i]);
        }

        if (window.innerWidth < 859) {
            if (window.innerHeight - getOffset(node).bottom < 400) {
                info.classList.add('top');
            }
            else
                info.classList.add('bottom');
        }
        else if (window.innerWidth - getOffset(node).right < 450) {
            info.classList.add('left');
        }
        else {
            info.classList.add('right');
        }

        typeList.textContent = `Type: ${type.join(', ')}`;
        info.append(desc, flavour, typeList);
        node.appendChild(info);
    }
};

const killInfo = (node) => {
    const info = document.querySelector('.info');
    if (info)
        node.removeChild(info);
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
        });
        drink.addEventListener('mouseleave', () => {
            killInfo(drink);
        });

        const name = document.createElement('div');
        name.classList.add('drink-name');
        name.textContent = drinks[i].name;

        const image = document.createElement('img');
        setAttributes(image, {'src': drinks[i].img, 'alt': drinks[i].name, 'class': 'drink-img'});

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${drinks[i].price}`;

        drink.append(name, image, price);
        drinkContainer.append(drink);
    }

    const note = document.createElement('a');
    setAttributes(note, {'class': 'note', 'href': 'https://va11halla.fandom.com/wiki/Drinktionary'})
    note.textContent = 'Information from: https://va11halla.fandom.com/wiki/Drinktionary';

    body.append(headline, drinkContainer, note);
    content.appendChild(body);
};

export default menu;