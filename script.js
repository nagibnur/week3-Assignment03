// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const charsUpperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
  
console.log( charsUpperCase);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword () {
   let test =  window.prompt ( "type the number you like "
      
    )
    console. log (test)
    
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
