
import "./styles/menu.css";
import krisp from "./images/smallburger.png";
import nuggets1 from "./images/nuggets.png";
import chicken1 from "./images/chicken.png";
import roll1 from "./images/roll.png";
import zinger from "./images/zinger.png";

function Menu() {
    const content = document.querySelector("#content");

    const mainSection = document.createElement("div");
    mainSection.classList.add("main-section");

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.textContent = "Our Esteemed Menu!";

    const itemsSection = document.createElement("div");
    itemsSection.classList.add("items-section");

    function createMenuItem(imgSrc, name, price) {
        const item = document.createElement("div");
        item.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = name;

        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemName.textContent = name;

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = price;

        const addButton = document.createElement("button");
        addButton.classList.add("add-button");
        addButton.textContent = "Add To Cart";

        item.appendChild(img);
        item.appendChild(itemName);
        item.appendChild(itemPrice);
        item.appendChild(addButton);

        return item;
    }

    const krispBurger = createMenuItem(krisp, "Krisp Burger", "Rs. 250");
    const zingerBurger = createMenuItem(zinger, "Zinger Burger", "Rs. 400");
    const delightBurger = createMenuItem(krisp, "Delight Burger", "Rs. 550");
    const nuggets = createMenuItem(nuggets1, "10 Spicy Nuggets", "Rs. 250");
    const roll = createMenuItem(roll1, "Smackin Roll", "Rs. 270");
    const chicken = createMenuItem(chicken1, "3 pc Chicken", "Rs. 320");

    itemsSection.appendChild(krispBurger);
    itemsSection.appendChild(zingerBurger);
    itemsSection.appendChild(delightBurger);
    itemsSection.appendChild(nuggets);
    itemsSection.appendChild(roll);
    itemsSection.appendChild(chicken);

    mainSection.appendChild(title);
    mainSection.appendChild(itemsSection);
    content.appendChild(mainSection);
}

export default Menu;
