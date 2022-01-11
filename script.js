//password characters Array
var numeric = ['1','2','3','4','5','6','7','8','9'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','"','#','$','%','&','’','(',')','*','+','=','@','?'];

//Variable Declaration
var confrimLength = "";
var confrimSpecailCharacters;
var confrimNumericCharecters;
var confirmUpperCase;
var confirmLowerCase;

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () { 
 //Validate length 8-128

 var confrimLength = (prompt("The Characters of your passwords needs to be between 8-128."));
 //if it doesn't meet the requirment
 while(confrimLength < 8 || confrimLength > 128) {
   alert("Password length must be between 8-128 characters long.Try again");
   var confrimLength = (prompt("The Characters of your passwords needs to be between 8-128."));
 };

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
