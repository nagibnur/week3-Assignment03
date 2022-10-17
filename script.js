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

 
 
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword () {
   let charOptions = [];
   let password = '';
   let passwordLength = prompt (
    "Enter the number of characters you would like your password to be:"
   );
   if (passwordLength < 8 || passwordLength > 128) {
    window.alert ('please try agian the characters must be between 8 and 128 characters')
    return;
   }
   
   
   let passwordCharsLowerCase = confirm (
    'Would you like to include lower case letters in your password?'
   );
   
   if (passwordCharsLowerCase === true) {
    charOptions = charOptions.concat(charsLowerCase);
    window.alert ('you have include lowercase characters into your password.')
   } else {
      window.alert ('NO lowercase characters have be added to your password.')
   }

 
   let passwordCharsUpperCase = confirm (
    'Would you like to include upper case letters in your password?'
   );
   
   
   if (passwordCharsUpperCase === true) {
    charOptions = charOptions.concat(charsUpperCase);
    window.alert ('you have include uppercase characters into your password.')
   } else {
    window.alert ('NO uppercase characters have be added to your password.')
   }  
   

   let passwordCharsNumbers = confirm (
    'Would you like to include numbers in your password?'
   );
   
   
   if (passwordCharsNumbers === true) {
    charOptions = charOptions.concat(charsNumbers);
    window.alert ('you have include numbers into your password.')
   } else {
    window.alert ('NO numbers have be added to your password.')
   }  
   

   let passwordCharsSpecial = confirm (
    'Would you like to include special characters in your password?'
   );
   
   
   if (passwordCharsSpecial === true) {
    charOptions = charOptions.concat(charsSpecial);
    window.alert ('you have include special characters into your password.')
   } else {
    window.alert ('NO special characters have be added to your password.')
   }  
   




   passwordText.value = password;

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
