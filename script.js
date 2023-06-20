// Assignment code here
function generatePassword() {
var characters = "";
var characterLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var spChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength = prompt("How many characters 8 through 128 would you like your password to be?");
if (passwordLength > 7 && passwordLength < 129) {
  alert("Your password will be " + [passwordLength] + " characters long.");
  characterLength = (passwordLength);
}
else {
  alert("Your password must be between 8 and 128 characters long. Please try again.");
  writePassword();
  preventDefault();
}
var lowerCaseQ = confirm("Would you like lower case letters in your password?");
if (lowerCaseQ === true) {
  alert("Your password will contain lower case letters.");
  characters = characters.concat(lowerCase);
  passwordBlank
}
else {
  alert("Your password will not contain lower case letters.");
}
var upperCaseQ = confirm("Would you like upper case letters in your password?");
if (upperCaseQ === true) {
  alert("Your password will contain upper case letters.");
  characters = characters.concat(upperCase);
}
else {
  alert("Your password will not contain upper case letters.");
}
var numbersQ = confirm("Would you like numbers in your password?");
if (numbersQ === true) {
  alert("Your password will contain numbers.");
  characters = characters.concat(numbers);
}
else {
  alert("Your password will not contain numbers.");
}
var spCharQ = confirm("Would you like special characters in your password?");
if (spCharQ === true) {
  alert("Your password will contain special characters.");
  characters = characters.concat(spChar);
}
else {
  alert("Your password will not contain special characters.");
}
if (characters.length === 0) {
  alert("Error! You must select at least one option. Please try again.");
  writePassword();
  preventDefault();
}
else {
  var passwordBlank = '';
  
  for (let i = 0; i < characterLength; i++) {
    passwordBlank = passwordBlank + characters[Math.floor(Math.random() * characters.length)];
  };
  return passwordBlank;
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
