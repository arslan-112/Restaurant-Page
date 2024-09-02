import "./styles/index.css";
import Home from "./home";
import About from "./about";
import Menu from "./menu";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const AboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");
Home()

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Home();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Menu();
});

AboutBtn.addEventListener("click", () => {
  content.innerHTML = ``;
  About();
});