// hosting
let hostingText = document.querySelectorAll(".hosting-text")
let hostingimage = document.querySelectorAll(".hosting-box .image")
// end hosting
// services
let services = document.querySelectorAll(".services .services-box")
let servicesHead = document.querySelector(".services").parentElement.children[0]
// end services
// blog
let blogHead = document.querySelector(".blog-head")
let blogBox = document.querySelectorAll(".blog .blog-box")
// end blog
// search
let searchSection = document.querySelector(".search .search-content")
// end search
// support
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
    hostingText.forEach(moveRight)
    hostingimage.forEach(moveLeft)
    // end hosting
    moveUp(servicesHead)
    services.forEach(function (el) {
        if (el.classList.contains("right")) {
            moveRight(el)
        }
        else if (el.classList.contains("left")) {
            moveLeft(el)
        }
        else {
            moveUp(el)
        }
    })
    // end services
    moveUp(blogHead)
    blogBox.forEach(function (el) {
        if (el.classList.contains("right")) {
            moveRight(el)
            scale(el)
        }
        else if (el.classList.contains("left")) {
            moveLeft(el)
            scale(el)
        } else {
            scale(el)
        }
    })
    // end blog
    moveUp(searchSection)
    // end search
    supportImage.forEach(scale)
    moveRight(supportText[0])
    moveLeft(supportText[1])
    // end support
    moveUp(footer)

}