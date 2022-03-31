// Assignment Code
var generateBtn = document.querySelector("#generate");

//for generator to pull from
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "["];

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

  passwordText.value = password; //this will write to page
}

// Add event listener to generate button-- the function is going to wait to be called upon by the button above
generateBtn.addEventListener("click", writePassword);

// I am presented with a series of prompts for password criteria

//Input should be validated
//at least one character type should be selected
//a password is generated that matches the selected criteria
//How?
function randomSelection(arr) {

  var index = Math.floor(Math.random() * arr.length);
  var ranChar = arr[index];
  return ranChar;

}



function generatePassword() {
  
  var options = characterLengthPrompt();//  this will finish before finishing the rest - line 95-97
  var guarantee = [];// whatever the user chooses
  var filler = []; //random options to fullfill the length
  var endResult = [];// the password will be pushed into this

  if (!options) return null;

  if (options.conLowercase)  {
    filler = filler.concat(lowerCaseCharacters);
    guarantee.push(randomSelection(lowerCaseCharacters));
  }


  for (var i = 0; i < options.userInput; i++) {
    var fillResult = randomSelection(filler); //going to be run through line 91-97 first
    endResult.push(fillResult);
  }

  for (var i = 0; i < guarantee.length; i++) {
    endResult[i] = guarantee[i]; 
  }

  return endResult.join("");

}


//prompted for the length
//at least 8 characters and no more than 128 characters???
function characterLengthPrompt() {
  // userInput = parseInt(prompt("Generate a password! Please choose between 8 and 128 characters."));
  userInput = parseInt(
    prompt("Generate a password! Please choose between 8 and 128 characters.")
  ); //turning string into number
  if (!userInput) {
    alert("Please select a number between 8 and 128"); //when the user does not input a value
    return null; //return back to the user
  } //else if (userInput > 8 && userInput < 128) { //when the value is withinthe 8-128 range
  //continuee????

  // confirm whether or not to include lowercase
  conLowercase = confirm("Will this contain lowercase?");
  // confirm for uppercase
  conNumerics = confirm("Will this contain Uppercase?");
  // confirm for numerics
  conNumerics = confirm("Will this contain Numerics?");
  // confirm special characters
  conSpecialCharacters = confirm("Will this contain special characters?");
  //make sure that at least one character type should be selected

  if (!conLowercase && !conUppercase && !conNumerics & !conSpecialCharacters) {
    alert("You need to choose at least one from the list."); //If the user does not choose any of the criteria
    return null;
  }


  var passwordOptions = {
    userInput: userInput,
    conLowercase: conLowercase,
    conUppercase: conUppercase,
    conNumerics: conNumerics,
    conSpecialCharacters: conSpecialCharacters
  }; 
  return passwordOptions;
  //if the user chooses 3 types of criteria
  // }  else if  (conLowercase && conUppercase && conNumerics) {
  //     generate = conLowercase.concat(conUppercase && conNumerics);

  // } else if { (conLowercase && conUppercase && conSpecialCharacters); {
  //     generate = conLowercase.concat(conNumerics && conSpecialCharacters)
  // }
}






















//if the user chooses 2 types of critera

//if the user chooses 1 of the critera

var index = Math.floor(Math.random() * conLowercase.length);

charAt(index); //for math portion help to generate random

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
  var randomSelection =
    issuePrompts[Math.floor(Math.random() * issuePrompts.length)];
}
