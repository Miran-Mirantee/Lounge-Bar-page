import setAttributes from "./setAttrs";

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

let badTouch = new drink('Bad Touch', "./assets/img/drinks/Bad_Touch.png", "We're nothing but mammals after all.", ['Sour', 'Classy', 'Vintage'], 250);

// for testing
const menu = (content) => {
    const body = document.createElement('div');
    body.classList.add('body', 'temp-border');

    
    body.append();
    content.appendChild(body);
};

export default menu;