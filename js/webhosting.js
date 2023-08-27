let topImage = document.querySelector(".top .image");
let checkButton = document.querySelector("header input");
let checkLabel = document.querySelectorAll(".check");
let planBox = document.querySelectorAll(".plan-box");
let planBoxPrice = document.querySelectorAll(".price");
let hostingBoxText = document.querySelectorAll(".hosting-text");
let hostingBoxImage = document.querySelectorAll(".hosting-box .image");
let searchText = document.querySelector(".left");
let searchImage = document.querySelector(".right");

function moveRight(section) {
  if (scrollY >= section.offsetTop - document.documentElement + 90) {
    section.style.translate = "-100%";
    section.style.opacity = "0";
  } else if (scrollY <= section.offsetTop - document.documentElement + 90) {
    section.style.translate = "0";
    section.style.opacity = "1";
  }
}
function moveLeft(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "100%";
    section.style.opacity = "0";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "0";
    section.style.opacity = "1";
  }
}

window.addEventListener("scroll", function () {
  moveRight(searchText);
  moveLeft(searchImage);
});

window.addEventListener("load", function () {
  planBox.forEach(function (el) {
    el.style.scale = "1";
  });
  topImage.style.rotate = "720deg";
  topImage.style.scale = "1";
  topImage.style.opacity = "1";
});

let hostObs = new IntersectionObserver(
  function (entries, observer) {
    let [entry] = entries;
    if (!entry.target.isIntersecting) {
      entry.target.style.scale = "1";
      entry.target.style.translate = "0px";
      entry.target.style.opacity = "1";
    }
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
  }
);

hostingBoxImage.forEach(function (el) {
  hostObs.observe(el);
});
hostingBoxText.forEach(function (el) {
  hostObs.observe(el);
});

checkButton.addEventListener("click", function () {
  checkLabel.forEach(function (el) {
    el.classList.toggle("active");
  });
  if (checkButton.checked) {
    planBoxPrice[0].textContent = "$33.00/yr";
    planBoxPrice[1].textContent = "$131.40/yr";
    planBoxPrice[2].textContent = "$467.40/yr";
  } else {
    planBoxPrice[0].textContent = "$2.75/mo";
    planBoxPrice[1].textContent = "$10.95/mo";
    planBoxPrice[2].textContent = "$38.95/mo";
  }
});
