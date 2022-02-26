
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", ";", ":", "{", "}", "[", "]", "?", "~"];
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var completePassword = ""

  var passwordLength = prompt("Choose a number between 8 and 128 for the length of your password.");
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {

    var askLowerCase = confirm("Do you want lowercase letters?");
    var askUpperCase = confirm("Do you want uppercase letters?");
    var askNumeric = confirm("Do you want numbers?");
    var askSpecial = confirm("Do you want special characters?");

    if (askLowerCase === false && askUpperCase === false && askSpecial === false && askNumeric === false) {
      alert("You must choose at least one.");
      return "";
    }

    for (let i = 0; i < passwordLength && completePassword.length < passwordLength; i++) {

      if (askNumeric && completePassword.length < passwordLength) {
        var index = Math.floor(Math.random() * numericCharacter.length);
        completePassword = completePassword + numericCharacter[index];
      }

      if (askLowerCase && completePassword.length < passwordLength) {
        var index = Math.floor(Math.random() * lowerCase.length);
        completePassword = completePassword + lowerCase[index];
      }

      if (askUpperCase && completePassword.length < passwordLength) {
        var index = Math.floor(Math.random() * upperCase.length);
        completePassword = completePassword + upperCase[index];
      }

      if (askSpecial && completePassword.length < passwordLength) {
        var index = Math.floor(Math.random() * specialCharacter.length);
        completePassword = completePassword + specialCharacter[index];
      }
    }
  }

  else {
    alert("Try again.")
  }

  return completePassword;
};
