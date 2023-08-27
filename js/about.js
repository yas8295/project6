let servH1 = document.querySelector(".services__ h1");
let servP1 = document.querySelector(".services__ p");
let servBox = document.querySelectorAll(".services__ a");
console.log(servBox);

function moveUp(section) {
  if (
    scrollY >=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px 200px";
    section.style.opacity = "0";
  }
}

function moveRotatex(section) {
  if (
    scrollY >=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.transform = "rotatex(1080deg)";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.transform = "rotatex(0deg)";
    section.style.opacity = "0";
  }
}

function moveRightRotate(section) {
  if (
    scrollY >=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px";
    section.style.rotate = "1080deg";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "-100% 0px";
    section.style.rotate = "0deg";
    section.style.opacity = "0";
  }
}

function moveLeftRotate(section) {
  if (
    scrollY >=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "0px";
    section.style.rotate = "-1080deg";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight + 90
  ) {
    section.style.translate = "100% 0px";
    section.style.rotate = "0deg";
    section.style.opacity = "0";
  }
}

window.addEventListener("scroll", function () {
  moveUp(servH1);
  moveRotatex(servP1);
  servBox.forEach(function (el) {
    if (el.classList.contains("left")) {
      moveRightRotate(el);
    } else if (el.classList.contains("right")) {
      moveLeftRotate(el);
    } else {
      moveRotatex(el);
    }
  });
});
