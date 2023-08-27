let btnMode = document.querySelector(".mode-button");
let logo = document.querySelector("header .logo img");
let links = document.querySelectorAll("header .nav .links a");
let linksAfter = document.styleSheets[5];
let header = document.querySelector("header");
let clientPara = document.querySelector("header .nav .client-area p");
let dropMenu = document.querySelectorAll(".drop-menu");
let navShape = document.querySelector(".shape");
let navMenu = document.querySelector(".nav-menu");
let menuLinks = document.querySelectorAll(".nav-menu .links a");
let navDropMenu = document.querySelectorAll(".nav-menu .drop-menu");
let shape = document.querySelector(".shape");
let navMenuLinks = document.querySelectorAll(".nav-menu a");
let nav = document.querySelector(".nav");

let opj = new IntersectionObserver(
  function (enrties, observer) {
    let [entry] = enrties;
    if (!entry.isIntersecting && btnMode.classList.contains("light")) {
      nav.style.position = "fixed";
      shape.style.position = "fixed";
      navMenu.style.position = "fixed";
      navMenu.style.marginTop = "20px";
      navMenu.style.backgroundColor = "rgba(17, 26, 43, 0.92)";
      nav.style.width = "100%";
      nav.style.left = "0";
      nav.style.top = "0";
      nav.style.padding = "20px";
      nav.style.justifyContent = "space-between";
      nav.style.backgroundColor = "rgb(17 26 43 / 92%)";
      header.style.zIndex = "8000";
    } else if (!entry.isIntersecting && !btnMode.classList.contains("light")) {
      nav.style.position = "fixed";
      shape.style.position = "fixed";
      navMenu.style.position = "fixed";
      navMenu.style.marginTop = "20px";
      navMenu.style.backgroundColor = "white";
      nav.style.width = "100%";
      nav.style.left = "0";
      nav.style.top = "0";
      nav.style.padding = "20px";
      nav.style.justifyContent = "flex-start";
      nav.style.backgroundColor = "white";
      header.style.zIndex = "8000";
    } else {
      nav.style.position = "relative";
      shape.style.position = "absolute";
      navMenu.style.position = "relative";
      navMenu.style.marginTop = "0";
      navMenu.style.backgroundColor = "transparent";
      nav.style.width = "100%";
      nav.style.left = "0";
      nav.style.top = "0";
      nav.style.padding = "0px";
      nav.style.justifyContent = "space-between";
      nav.style.backgroundColor = "transparent";
      header.style.zIndex = "0";
    }
  },
  { root: null, threshold: 0 }
);

opj.observe(header);

header.addEventListener("click", function () {
  if (dropMenu[0].classList.contains("show-menu")) {
    dropMenu[0].classList.toggle("show-menu");
  }
  if (dropMenu[1].classList.contains("show-menu")) {
    dropMenu[1].classList.toggle("show-menu");
  }
});
links[1].addEventListener("click", function (el) {
  dropMenu[0].classList.toggle("show-menu");
  el.stopPropagation();
});
links[10].addEventListener("click", function (el) {
  dropMenu[1].classList.toggle("show-menu");
  el.stopPropagation();
});
menuLinks[1].addEventListener("click", function () {
  navDropMenu[0].classList.toggle("show");
});
menuLinks[10].addEventListener("click", function () {
  navDropMenu[1].classList.toggle("show");
});

navShape.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// end header
