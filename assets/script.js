// Assignment Code
var generateBtn = document.querySelector("#generate");

//for generator to pull from
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "["]

//Using to generate the password
var userInput;
var generate;

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
  




  issuePrompts();

};

//issue prompts to user
function issuePrompts(){

  
  
  //asked for character type???
  characterLengthPrompt();
  confirmLowercase();
  confirmUppercase();
  confirmNumerics();
  confirmSpecialCharacters();
}

//prompted for the length
//at least 8 characters and no more than 128 characters???
function characterLengthPrompt(){
  // userInput = parseInt(prompt("Generate a password! Please choose between 8 and 128 characters."));
  userInput = (prompt("Generate a password! Please choose between 8 and 128 characters."));
  if (!userInput) {
    alert("Please select a number between 8 and 128")
  } else if (userInput > 8 || userInput < 128) {
    alert("Please select a number between 8 and 128")
  } else issuePrompts();
}


// confirm whether or not to include lowercase
function confirmLowercase(){
  conLowercase = confirm("will this contain lowercase?");
}

// confirm for uppercase 
function confirmUppercase() {
  conNumerics = confirm("Will this contain Uppercase?");
}
// confirm for numerics
function confirmNumerics() {
  conNumerics = confirm("Will this contain Numerics?");
}

// confirm special characters
function confirmSpecialCharacters() {
  conSpecialCharacters = confirm("Will this contain special characters?");
}

//make sure that at least one character type should be selected
function valideateUserChoice(){
  if (!conLowercase && !conUppercase && !conNumerics & !conSpecialCharacters) { 
     generate = alert("You need to choose at least one from the list.");
  } 
}
 issuePrompts();


  //If the user does not choose any of the criteria



//if the user chooses 3 types of criteria

//if the user chooses 2 types of critera

//if the user chooses 1 of the critera



var index = Math.floor(Math.random() * options.length);














// if (userChoice === computerChoice) {
//   ties++;
//   alert("It's a tie!");

// // Check every win condition for the player
// } else if (
//   (userChoice === "R" && computerChoice === "S") || 
//   (userChoice === "P" && computerChoice === "R") || 
//   (userChoice === "S" && computerChoice === "P")
// ) {
//   wins++;
//   window.alert("You win!");

//need a for loop statement for generating multiple types of passwords on command

//for (var i =0; i < 128; i++)

for (var i = 0; i < userInput; i++) {
  var randomSelection = issuePrompts[Math.floor(Math.random() * issuePrompts.length)];
}