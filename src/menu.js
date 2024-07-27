import setAttributes from "./utils/setAttrs";
import text from "./assets/jsons/menuPage.json";
import drinkInfos from "./assets/jsons/drinks";

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
    for (let type of this.type) console.log(`type: ${type}`);
    console.log(`price: ${this.price}`);
  }
}

let drinks = [];
for (const drinkInfo of drinkInfos) {
  drinks.push(
    new drink(
      drinkInfo.name,
      drinkInfo.url,
      drinkInfo.desc,
      drinkInfo.type,
      drinkInfo.price
    )
  );
}

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
  const check = document.querySelector(".info");
  if (!check) {
    const info = document.createElement("div");
    info.classList.add("info");
    const desc = document.createElement("div");
    desc.classList.add("desc");
    desc.textContent = drink.description;
    const flavour = document.createElement("div");
    flavour.classList.add("flavour");
    flavour.textContent = `Flavour: ${drink.type[0]}`;

    const typeList = document.createElement("div");
    typeList.classList.add("type");
    let type = [];
    for (let i = 1; i < drink.type.length; i++) {
      type.push(drink.type[i]);
    }

    if (window.innerWidth < 859) {
      if (window.innerHeight - getOffset(node).bottom < 400) {
        info.classList.add("top");
      } else info.classList.add("bottom");
    } else if (window.innerWidth - getOffset(node).right < 450) {
      info.classList.add("left");
    } else {
      info.classList.add("right");
    }

    typeList.textContent = `Type: ${type.join(", ")}`;
    info.append(desc, flavour, typeList);
    node.appendChild(info);
  }
};

const killInfo = (node) => {
  const info = document.querySelector(".info");
  if (info) node.removeChild(info);
};

const menu = (content) => {
  const body = document.createElement("div");
  body.classList.add("body");

  const headline = document.createElement("div");
  headline.classList.add("menu", "headline");
  headline.textContent = text.ourDrinks;

  const drinkContainer = document.createElement("div");
  drinkContainer.classList.add("drink-container");
  for (let i = 0; i < drinks.length; i++) {
    const drink = document.createElement("div");
    drink.classList.add("drink");
    drink.addEventListener("mouseover", () => {
      displayInfo(drinks[i], drink);
    });
    drink.addEventListener("mouseleave", () => {
      killInfo(drink);
    });

    const name = document.createElement("div");
    name.classList.add("drink-name");
    name.textContent = drinks[i].name;

    const image = document.createElement("img");
    setAttributes(image, {
      src: drinks[i].img,
      alt: drinks[i].name,
      class: "drink-img",
    });

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = `$${drinks[i].price}`;

    drink.append(name, image, price);
    drinkContainer.append(drink);
  }

  const note = document.createElement("a");
  setAttributes(note, {
    class: "note",
    href: text.wikipageUrl,
  });
  note.textContent = text.ref;

  body.append(headline, drinkContainer, note);
  content.appendChild(body);
};

export default menu;
