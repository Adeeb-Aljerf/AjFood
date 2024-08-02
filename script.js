"use strict";

//? secletion
const btn_nav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const menu_nav_list = document.querySelector(".main-nav-list");
const btn_start_eating = document.querySelector("#btn-start-eating");
const btn_learn_more = document.querySelector("#btn-learn-more");
const seciton_hero = document.querySelector("#section--1");
const section_cta = document.querySelector("#section--5");

//?------------------------------------------------------------

//Nav Scrolling

menu_nav_list.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    // console.log("a");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//?------------------------------------------------------------

btn_nav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//?------------------------------------------------------------

menu_nav_list.addEventListener("click", function (e) {
  e.preventDefault();
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
  }
});

//?------------------------------------------------------------

//? scroll

btn_learn_more.addEventListener("click", function (e) {
  e.preventDefault();
  seciton_hero.scrollIntoView({ behavior: "smooth" });
});

btn_start_eating.addEventListener("click", function (e) {
  e.preventDefault();
  section_cta.scrollIntoView({ behavior: "smooth" });
});

//?------------------------------------------------------------
