// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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
