let login = document.querySelector(".login p").firstChild
let register = document.querySelector(".login p").lastChild
let registerBox = document.querySelector(".register")
let forget = document.querySelector(".form-submit").firstElementChild
let registerValue = document.querySelector(".form-submit").lastElementChild
console.log(registerValue)

register.addEventListener("click", function () {
    registerBox.classList.add("active")
    register.style.color = "rgb(52, 111, 199)"
    login.style.color = "rgb(72, 88, 112)"
    forget.classList.add("forget")
    registerValue.style.margin = "auto"
    registerValue.value = "Register"
})
login.addEventListener("click", function () {
    registerBox.classList.remove("active")
    login.style.color = "rgb(52, 111, 199)"
    register.style.color = "rgb(72, 88, 112)"
    forget.classList.remove("forget")
    registerValue.style.margin = "0"

    registerValue.value = "Login"
})
