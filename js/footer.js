let supportText = document.querySelectorAll(".support-box .text")
let supportImage = document.querySelectorAll(".support-box .image")
let footer = document.querySelector("footer")

function moveRight(section) {
    if (scrollY >= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.translate = "0px"
        setTimeout(function () {
            section.style.opacity = "1"
        }, 400)
    }
    else if (scrollY <= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.translate = "-100%"
        section.style.opacity = "0"
    }
}
function moveLeft(section) {
    if (scrollY >= section.offsetTop - document.documentElement.clientHeight + 90) {

        section.style.translate = "0px"
        setTimeout(function () {
            section.style.opacity = "1"
        }, 400)
    }
    else if (scrollY <= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.translate = "100%"
        section.style.opacity = "0"
    }
}

function moveUp(section) {
    if (scrollY >= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.translate = "0px 0px"
        setTimeout(function () {
            section.style.opacity = "1"
        }, 400)
    }
    else if (scrollY <= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.translate = "0px 200px"
        section.style.opacity = "0"
    }
}

function scale(section) {
    if (scrollY >= section.offsetTop - document.documentElement.clientHeight + 90) {
        setTimeout(function () {
            section.style.scale = "1"
            section.style.opacity = "1"
        }, 400)
    }
    else if (scrollY <= section.offsetTop - document.documentElement.clientHeight + 90) {
        section.style.scale = "0"
        section.style.opacity = "0"
    }
}

window.onscroll = function () {
    supportImage.forEach(scale)
    moveRight(supportText[0])
    moveLeft(supportText[1])
    // end support
    moveUp(footer)

}

let scrollTopButton = document.querySelector(".scroll-top")
scrollTopButton.addEventListener("click", function () {
    header.scrollIntoView({ behavior: "smooth" });
})