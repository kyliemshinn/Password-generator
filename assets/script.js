// Assignment Code
var generateBtn = document.querySelector("#generate");

//for generator to pull from
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "["]


//for confirmation of each character type ^ - this is going to be used later what called upon
var conLowercase;
var conUppercase;
var conpecialCharacters;
var conNumerics;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;//this will write to page

}


// Add event listener to generate button-- the function is going to wait to be called upon by the button above 
generateBtn.addEventListener("click", writePassword);








// I am presented with a series of prompts for password criteria

//Input should be validated 
//at least one character type should be selected
//a password is generated that matches the selected criteria
//How?
function generatePassword(){

};

//issue prompts to user
function issuePrompts(){

  var userInput = parseInt(prompt("Generate a password! Please choose between 8 and 128 characters."));

  if (!userInput) {
    alert("Please enter a numeric value between 8 and 128.")
  }
  
    userInput = parseInt(prompt("Generate a password! Please choose between 8 and 128 characters."));




  characterLengthPrompt();
  confirmLowercase();
  confirmUppercase();
  confirmNumerics();
  confirmSpecialCharacters();
  //asked for character type???
}

//prompted for the length
//at least 8 characters and no more than 128 characters???
function characterLengthPrompt(){
}


// confirm whether or not to include lowercase, 
function confirmLowercase(){
  confirm("will this contain lowercase?");
}

// confirm for uppercase 
function confirmUppercase() {
  confirm("Will this contain Uppercase?")
}
// confirm for numerics
function confirmNumerics() {
  confirm("Will this contain Uppercase?")
}

// confirm special characters
function confirmSpecialCharacters() {
  confirm("Will this contain special characters?")
}

//asked for character type
function valideateUserChoice(){
  //make sure that at least one character type should be selected
}


//If the user does not choose any of the criteria

//if the user chooses 3 types of criteria

//if the user chooses 2 types of critera

//if the user chooses 1 of the critera






//need a for loop statement for generating multiple types of passwords on command

//for (var i =0; i < 128; i++)