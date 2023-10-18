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
    if (changeUpCase === true){
        let randomUpCase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]
        newPassword.push(randomUpCase)
    }
})

lowerCase.addEventListener("change", function(event){
    let changeLoCase = event.target.checked
    if (changeLoCase === true){
        let randomLoCase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]
        newPassword.push(randomLoCase)
    }
})

numbers.addEventListener("change", function(event){
    let changeNumbers = event.target.checked
    if (changeNumbers === true) {
        let randomNumbers = numbersArray[Math.floor(Math.random()*numbersArray.length)]
        newPassword.push(randomNumbers)
    }
})

specialCharacters.addEventListener("change", function(event){
    let changeSpChar = event.target.checked
    if (changeSpChar === true){
        let randomSpChar = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]
        newPassword.push(randomSpChar)
    }
})



// CREATING RANDOM PASSWORD
generateButton.addEventListener("click", function(){
    
    let myPassword = newPassword.join('')

    let currentValue = finalPassword.value;
    let newText = myPassword;
    let updatedValue = currentValue + newText;

    finalPassword.value = updatedValue;
    
    
    console.log(myPassword)
    
})

newPassword.length = 0