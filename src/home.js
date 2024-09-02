import "./styles/home.css";

function Home(){

    const content = document.querySelector("#content");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("home-container");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Arsu's Delight";
    contentContainer.appendChild(title);

    const description = document.createElement("div");
    description.setAttribute("class","description");

    const heading2 = document.createElement("h2");
    heading2.classList.add("sub-heading");
    heading2.textContent = "Welcome to Arsu's Delight – Where Flavor Meets Fast!";
    description.appendChild(heading2);

    const mainText = document.createElement("p");
    mainText.textContent = " At Arsu's Delight, we bring you the best in fast food cuisine, serving up delicious dishes that are bursting with flavor and made with the freshest ingredients. Whether you're craving a juicy burger, spicy nuggets, or a smackin roll, we've got something to satisfy every appetite. Our commitment to quality and speed means you can enjoy mouth-watering meals without the wait. Come experience the delightful taste of fast food done right at Arsu's Delight!";
    description.appendChild(mainText)

    contentContainer.appendChild(description);
    content.appendChild(contentContainer);

    
}
export default Home;