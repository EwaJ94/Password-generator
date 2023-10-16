let finalPassword = document.querySelector("#final-password")
let length = document.querySelector("#length")
let upperCase = document.querySelector("#upper-case")
let lowerCase = document.querySelector("#lower-case")
let numbers = document.querySelector("#numbers")
let specialCharacters = document.querySelector("#special-characters")
let generateButton = document.querySelector(".generator-btn")

length.addEventListener("input", function(event){
    let inputLength = event.target.value
    
})

upperCase.addEventListener("change", function(event){
    let changeUpCase = event.target.checked
    
})

lowerCase.addEventListener("change", function(event){
    let changeLoCase = event.target.checked
    
})

numbers.addEventListener("change", function(event){
    let changeNumbers = event.target.checked
    
})
specialCharacters.addEventListener("change", function(event){
    let changeSpChar = event.target.checked
    
})

generateButton.addEventListener("click", function(){
    let myPassword = newPassword.toString()
    finalPassword.textContent = myPassword
})