let finalPassword = document.querySelector("#final-password")
let length = document.querySelector("#length")
let upperCase = document.querySelector("#upper-case")
let lowerCase = document.querySelector("#lower-case")
let numbers = document.querySelector("#numbers")
let specialCharacters = document.querySelector("#special-characters")
let generateButton = document.querySelector(".generator-btn")

let newPassword = []

// LENGTH RECORDING
length.addEventListener("input", function(event){
    let inputLength = event.target.value
})

// CHARACTERS RECORDING
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



// CREATING RANDOM PASSWORD
generateButton.addEventListener("click", function(){
    
    newPassword.length = 0

    let randomUpCase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]

    let randomLoCase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]

    let randomNumbers = numbersArray[Math.floor(Math.random()*numbersArray.length)]

    let randomSpChar = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]

    newPassword.push(randomUpCase, randomLoCase, randomNumbers, randomSpChar)

    let myPassword = newPassword.toString()
    finalPassword.textContent = myPassword

    
      
      
    console.log(myPassword)
})