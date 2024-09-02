import "./styles/about.css";

function About(){

    const content = document.getElementById('content');

    const contentcontainer = document.createElement("div");
    contentcontainer.classList.add("about-container");

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');

    const title = document.createElement('h1');
    title.textContent = "Welcome to Arsus Delight :)";

    const historyTitle = document.createElement('h2');
    historyTitle.textContent = "Our Story";

    const history = document.createElement('p');
    history.textContent = `
        Founded in 2024, Arsus Delight started as a small family-run fast food cafe with a big dream: 
        to offer delicious, high-quality fast food in a warm and welcoming atmosphere. Over the weeks, 
        we've grown, but our commitment to excellence has remained the same. Every meal is crafted 
        with love, inspired by both tradition and innovation.
    `;

    const missionTitle = document.createElement('h2');
    missionTitle.textContent = "Our Mission";

    const mission = document.createElement('p');
    mission.textContent = `
        Our mission is simple: to serve exceptional fast food that brings joy to every guest. We strive 
        to use the finest ingredients, sourced locally whenever possible, to create meals that are 
        not only tasty but also nourishing. At Arsus Delight, your satisfaction is our greatest reward.
    `;


    const contact = document.createElement("h2");
    contact.textContent =  "Reach us at:" ;
    
    const phone = document.createElement("p");
    phone.textContent = "Phone: 0314-17147714";
    const email = document.createElement("p");
    email.textContent = "Email: arsusdelight@gmail.com";
                            

    // Append elements to about section
    aboutSection.appendChild(title);
    aboutSection.appendChild(historyTitle);
    aboutSection.appendChild(history);
    aboutSection.appendChild(missionTitle);
    aboutSection.appendChild(mission);
    aboutSection.appendChild(contact);
    aboutSection.appendChild(phone);
    aboutSection.appendChild(email);

    // Append about section to content div
    contentcontainer.appendChild(aboutSection);
    content.appendChild(contentcontainer);

}

export default About;
