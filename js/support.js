window.addEventListener("load", function(e){
document.querySelectorAll(".icon").forEach(function(e){
    e.classList.remove("scale")
})
})

let commonButtons = document.querySelectorAll(".common_questions-box h2")
let commonHiddenTexts = document.querySelectorAll(".common_questions-box p")
let commonBox = document.querySelector(".common_questions").children

commonButtons.forEach(function (e){
    e.addEventListener("click", function(){
      e.classList.toggle("active")
      e.nextElementSibling.classList.toggle("active")
    })
})





