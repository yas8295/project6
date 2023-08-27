let slide = document.querySelectorAll("header .header-content")
let slideBtn = document.querySelectorAll(".main-slide ul li")
let btnMode = document.querySelector(".mode-button")
let btnMode2 = document.querySelector(".mode-button2")
let logo = document.querySelector("header .logo img")
let links = document.querySelectorAll("header .nav .links a")
let linksAfter = document.styleSheets[5]
let header = document.querySelector("header")
let cloud = document.querySelector(".cloud")
let clientPara = document.querySelector("header .nav .client-area p")
let blue = document.querySelector(".blue")
let lightContent = document.querySelector(".header-content.light")
let lightSpan = document.querySelector(".header-content.light p span")
lightSpan.style.color = "#2e69c1"
let lightPara = document.querySelector(".header-content.light p")
lightPara.style.color = "grey"
let lightH1 = document.querySelector(".header-content.light h1")
lightH1.style.color = "#2e69c1"
let lightButton = document.querySelector(".header-content.light button")
lightButton.style.backgroundColor = "#2e69c1"
lightButton.style.color = "white"
let dropMenu = document.querySelectorAll(".drop-menu")
let navShape = document.querySelector(".shape")
let navMenu = document.querySelector(".nav-menu")
let menuLinks = document.querySelectorAll(".nav-menu .links a")
let navDropMenu = document.querySelectorAll(".nav-menu .drop-menu")
let shape = document.querySelector(".shape")
let navMenuLinks = document.querySelectorAll(".nav-menu a")

let nav = document.querySelector(".nav")

let opj = new IntersectionObserver(function (enrties, observer) {
    let [entry] = enrties;
    if (!entry.isIntersecting && btnMode.classList.contains("light")) {
        nav.style.position = "fixed"
        shape.style.position = "fixed"
        navMenu.style.position = "fixed"
        navMenu.style.marginTop = "49px"
        navMenu.style.backgroundColor = "rgba(17, 26, 43, 0.92)"
        nav.style.width = "100%"
        nav.style.left = "0"
        nav.style.top = "0"
        nav.style.padding = "20px 40px"
        nav.style.justifyContent = "space-between"
        nav.style.backgroundColor = "rgb(17 26 43 / 92%)"
        btnMode.style.display = "none"
        btnMode2.style.display = "none"
    }
    else if (!entry.isIntersecting && !btnMode.classList.contains("light")) {
        nav.style.position = "fixed"
        shape.style.position = "fixed"
        navMenu.style.position = "fixed"
        navMenu.style.marginTop = "49px"
        navMenu.style.backgroundColor = "white"
        nav.style.width = "100%"
        nav.style.left = "0"
        nav.style.top = "0"
        nav.style.padding = "20px 40px"
        nav.style.justifyContent = "space-between"
        nav.style.backgroundColor = "white"
        btnMode.style.display = "none"
        btnMode2.style.display = "none"
    }
    else {
        nav.style.position = "relative"
        shape.style.position = "absolute"
        navMenu.style.position = "relative"
        navMenu.style.marginTop = "0"
        navMenu.style.backgroundColor = "transparent"
        nav.style.width = "100%"
        nav.style.left = "0"
        nav.style.top = "0"
        nav.style.padding = "0px"
        nav.style.justifyContent = "space-between"
        nav.style.backgroundColor = "transparent"
        btnMode.style.display = "block"
        btnMode2.style.display = "block"
    }


}, { root: null, threshold: 0 })

opj.observe(header)

let scrollTopButton = document.querySelector(".scroll-top")
scrollTopButton.addEventListener("click", function () {
    header.scrollIntoView({ behavior: "smooth" });
})

function removeActive() {
    slide.forEach(function (el) {
        if (!el.classList.contains("light")) {
            el.classList.add("hidden")
            el.style.zIndex = "10000"
            el.style.visibility = "hidden"
        }
    })
    slideBtn.forEach(function (el) {
        if (!el.classList.contains("light")) {
            el.classList.remove("active")
        }
    })
}

slideBtn.forEach(function (el) {
    el.onclick = function () {
        removeActive()
        el.classList.add("active")
        for (let i = 0; i < slide.length; i++) {
            if (slide[i].dataset.slide === el.dataset.slide) {
                slide[i].classList.remove("hidden")
                slide[i].style.zIndex = "400"
                slide[i].style.visibility = "visible"
            }
        }
    }
})

function darkMode(link) {
    if (link.textContent === "Dark Header") {
        link.textContent = "Light Header"
    }
    else if (link.textContent === "Light Header") {
        link.textContent = "Dark Header"
    }
}


menuLinks[0].addEventListener("click", function () {
    if (shape.classList.contains("light")) {
        shape.style.color = "rgb(71 138 255)"
        shape.classList.toggle("light")
    } else {
        shape.style.color = "white"
        shape.classList.toggle("light")
    }
    if (!logo.classList.contains("light")) {
        logo.src = "images/logo-dark.svg"
        logo.classList.toggle("light")
    } else {
        logo.src = "images/logo.svg"
        logo.classList.toggle("light")
    }
    if (menuLinks[0].classList.contains("light")) {
        linksAfter.cssRules[0].style.backgroundColor = "#0077ff"
        darkMode(menuLinks[0])
        darkMode(links[0])
        menuLinks[0].classList.toggle("light")
        links[0].classList.toggle("light")
    } else {
        linksAfter.cssRules[0].style.backgroundColor = "#ffc600"
        darkMode(menuLinks[0])
        darkMode(links[0])
        menuLinks[0].classList.toggle("light")
        links[0].classList.toggle("light")
    }
    if (!header.classList.contains("light")) {
        header.style.backgroundColor = "rgb(17 26 43)"
        header.classList.toggle("light")
    } else {
        header.style.backgroundColor = "rgb(233 244 255)"
        header.classList.toggle("light")
    }
    if (cloud.classList.contains("light")) {
        cloud.style.backgroundImage = "url(images/cloud-bg2.svg)"
        cloud.style.opacity = "1"
        cloud.classList.toggle("light")
    } else {
        cloud.style.backgroundImage = "url(images/cloud-bg.svg)"
        cloud.style.opacity = "0.15"
        cloud.classList.toggle("light")
    }
    links.forEach(function (link) {
        if (!link.classList.contains("color")) {
            link.style.color = "rgb(222, 222, 222)"
            link.classList.toggle("color")
        } else {
            link.style.color = "black"
            link.classList.toggle("color")
        }
    })
    navMenuLinks.forEach(function (link) {
        if (!link.classList.contains("color")) {
            link.style.color = "rgb(222, 222, 222)"
            link.classList.toggle("color")
        } else {
            link.style.color = "black"
            link.classList.toggle("color")
        }
    })
    if (!clientPara.classList.contains("light")) {
        clientPara.style.color = "rgb(222, 222, 222)"
        clientPara.classList.toggle("light")
    } else {
        clientPara.style.color = "rgb(0, 119, 255)"
        clientPara.classList.toggle("light")
    }
    if (!blue.classList.contains("light")) {
        blue.style.display = "none"
        blue.classList.toggle("light")
    } else {
        blue.style.display = "block"
        blue.classList.toggle("light")
    }
    if (!lightContent.classList.contains("show")) {
        lightContent.style.visibility = "hidden"
        lightContent.style.opacity = "0"
        slide[0].classList.toggle("hidden")
        slideBtn[0].classList.toggle("active")
        slide[0].style.visibility = "visible"
        slideBtn.forEach(function (el) {
            el.style.display = "flex"
        })
        lightContent.classList.toggle("show")
    } else {
        lightContent.style.visibility = "visible"
        lightContent.style.opacity = "1"
        removeActive()
        slideBtn.forEach(function (el) {
            el.style.display = "none"
        })
        lightContent.classList.toggle("show")
    }
})

btnMode.addEventListener("click", function () {
    if (shape.classList.contains("light")) {
        shape.style.color = "rgb(71 138 255)"
        shape.classList.toggle("light")
    } else {
        shape.style.color = "white"
        shape.classList.toggle("light")
    }
    if (!logo.classList.contains("light")) {
        logo.src = "images/logo-dark.svg"
        logo.classList.toggle("light")
    } else {
        logo.src = "images/logo.svg"
        logo.classList.toggle("light")
    }
    if (links[0].classList.contains("light")) {
        linksAfter.cssRules[0].style.backgroundColor = "#0077ff"
        darkMode(menuLinks[0])
        darkMode(links[0])
        menuLinks[0].classList.toggle("light")
        links[0].classList.toggle("light")
    } else {
        linksAfter.cssRules[0].style.backgroundColor = "#ffc600"
        darkMode(menuLinks[0])
        darkMode(links[0])
        menuLinks[0].classList.toggle("light")
        links[0].classList.toggle("light")
    }
    if (!header.classList.contains("light")) {
        header.style.backgroundColor = "rgb(17 26 43)"
        header.classList.toggle("light")
    } else {
        header.style.backgroundColor = "rgb(233 244 255)"
        header.classList.toggle("light")
    }
    if (cloud.classList.contains("light")) {
        cloud.style.backgroundImage = "url(images/cloud-bg2.svg)"
        cloud.style.opacity = "1"
        cloud.classList.toggle("light")
    } else {
        cloud.style.backgroundImage = "url(images/cloud-bg.svg)"
        cloud.style.opacity = "0.15"
        cloud.classList.toggle("light")
    }
    links.forEach(function (link) {
        if (!link.classList.contains("color")) {
            link.style.color = "rgb(222, 222, 222)"
            link.classList.toggle("color")
        } else {
            link.style.color = "black"
            link.classList.toggle("color")
        }
    })
    navMenuLinks.forEach(function (link) {
        if (!link.classList.contains("color")) {
            link.style.color = "rgb(222, 222, 222)"
            link.classList.toggle("color")
        } else {
            link.style.color = "black"
            link.classList.toggle("color")
        }
    })
    if (!clientPara.classList.contains("light")) {
        clientPara.style.color = "rgb(222, 222, 222)"
        clientPara.classList.toggle("light")
    } else {
        clientPara.style.color = "rgb(0, 119, 255)"
        clientPara.classList.toggle("light")
    }
    if (!blue.classList.contains("light")) {
        blue.style.display = "none"
        blue.classList.toggle("light")
    } else {
        blue.style.display = "block"
        blue.classList.toggle("light")
    }
    if (!lightContent.classList.contains("show")) {
        lightContent.style.visibility = "hidden"
        lightContent.style.opacity = "0"
        slide[0].classList.toggle("hidden")
        slideBtn[0].classList.toggle("active")
        slide[0].style.visibility = "visible"
        slideBtn.forEach(function (el) {
            el.style.display = "flex"
        })
        lightContent.classList.toggle("show")
    } else {
        lightContent.style.visibility = "visible"
        lightContent.style.opacity = "1"
        removeActive()
        slideBtn.forEach(function (el) {
            el.style.display = "none"
        })
        lightContent.classList.toggle("show")
    }
})

header.addEventListener("click", function () {
    if (dropMenu[0].classList.contains("show-menu")) {
        dropMenu[0].classList.toggle("show-menu")
    }
    if (dropMenu[1].classList.contains("show-menu")) {
        dropMenu[1].classList.toggle("show-menu")
    }
})
links[1].addEventListener("click", function (el) {
    dropMenu[0].classList.toggle("show-menu")
    el.stopPropagation();
})
links[10].addEventListener("click", function (el) {
    dropMenu[1].classList.toggle("show-menu")
    el.stopPropagation();
})
menuLinks[1].addEventListener("click", function () {
    navDropMenu[0].classList.toggle("show")
})
menuLinks[10].addEventListener("click", function () {
    navDropMenu[1].classList.toggle("show")
})

navShape.addEventListener("click", function () {
    navMenu.classList.toggle("show")
})

// end header