// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const charsUpperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
  
console.log( charsUpperCase);

const charsLowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];

console.log( charsLowerCase);

const charsNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

console.log( charsNumbers);

const charsSpecial = [
  '!', '*', '+', '-', '/', '#', '$', '%', '&', ':', ';', ')', '(', '<', '=', '>', '?', '@', '_',

];
 console.log( charsSpecial);

 const charOptions = [];
 console.log(charOptions);
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword () {
   let passwordLength = prompt (
    "Enter the number of characters you would like your password to be:"
   );
   if (passwordLength < 8 || passwordLength > 128) {
    window.alert ('please try agian the characters must be between 8 and 128 characters')
    return;
   }
   
  
   let passwordCharsLowerCase = prompt (
    'Would you like to include lower case letters in your password?'
   );
   
   
   if (passwordCharsLowerCase === 'confirm') {
    charOptions = charOptions.concat(charsLowerCase);
    window.alert ('you have include lowercase characters into your password.')
    console.log(charsOptions);
   if (passwordCharsLowerCase === 'cancel') {
    window.alert ('NO lowercase characters have be added to your password.')
   }  
   }

   let passwordCharsUpperCase = prompt (
    'Would you like to include upper case letters in your password?'
   );
   
   
   if (passwordCharsUpperCase === 'confirm') {
    charOptions = charOptions.concat(charsUpperCase);
    window.alert ('you have include uppercase characters into your password.')
    console.log(charsOptions);
   if (passwordCharsUpperCase === 'cancel') {
    window.alert ('NO uppercase characters have be added to your password.')
   }  
   }


  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
