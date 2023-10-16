let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 

let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let specialCharactersArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":", "#", "/", "§", "@", "_", "%", "=", ">", "<", ";"]

let newPassword = []

let randomUpCase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]

let randomLoCase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]

let randomNumbers = numbersArray[Math.floor(Math.random()*numbersArray.length)]

let randomSpChar = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]

newPassword.push(randomUpCase, randomLoCase, randomNumbers, randomSpChar)
