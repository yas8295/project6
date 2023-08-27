let domainBox = document.querySelectorAll(".box_domain");
let domainImage = document.querySelectorAll(".image");
let topImage = document.querySelector(".top .image");

function moveup(section) {
  if (
    scrollY >=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px";
    section.style.opacity = "1";
  }
  if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px 200px";
    section.style.opacity = "0";
  }
}

window.addEventListener("scroll", function () {
  domainBox.forEach(moveup);
});

window.addEventListener("load", function () {
  topImage.style.rotate = "720deg";
  topImage.style.scale = "1";
  topImage.style.opacity = "1";
});
