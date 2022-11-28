/*
1. To start need to create an listener event for a click for the generateBtn. Done
2. Once the generateBtn is trigger it'll run the generate password function. Done
3. Idea is having 4 separate arrays which contains all the lower, upper, numbers, and special characters. Done
4. Which I'll use a math.random to randomly select a number between 0 and the highest so in-between the arrays. 
5. Once an math.random has generated a random number it'll select a character inside the given array. Then will store the variable to be used later.
6. Once the length of the password has finished it'll combine up all the selected character to be combined into a string to be displayed onto the screen using perhaps innerHTML.
Idea: 
- Could only have 1 function if possible to be the random character selector. By having a genPassword function which after being prompted if they want any criteria to be met. 
However would need that function to take in all 4 arrays with storing all variable. Could work by putting a FOR loop which run till the length portion is fulfilled.
Then another FOR loop which will be responsible for each criteria after and another FOR loop to be responsible for the selected characters to be displayed.
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
const upperOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowerOptions = ["abcdefghijklmnopqrstuvwxyz"];
const numberOptions = ["1234567890"];
const specialOptions = ["!@#$%^&*()_+-={}[]|\~`:;'<,>.?/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const length = prompt("How long do you want the password to be? Enter number only! Between 8-128");
  const upper = confirm("Do you want uppercases?");
  const lower = confirm("Do you want lowercases?");
  const numbers = confirm("Do you want numbers?");
  const special = confirm("Do you want special characters?");

  /*if (length <= 8 || length > 128 || typeof length === string) 
  { 
    prompt("Length does not meet criteria. Must be more than 8 and less than 128 with only numbers");
  } */


  /*console.log(upperOptions)
  console.log(lowerOptions)
  console.log(numberOptions)
  console.log(specialOptions)*/
  var PasswordOptions = [];
  if (upper === true)
  {
    PasswordOptions += upperOptions;
  }

  if (lower === true)
  {
    PasswordOptions += lowerOptions;
  }

  if (numbers === true)
  {
    PasswordOptions += numberOptions;
  }

  if (special === true)
  {
    PasswordOptions += specialOptions;
  }
  var finalPassword = [];
  //console.log(PasswordOptions.length)
  //console.log(PasswordOptions)
  for (let x = 0; x < length; x++)
  {
    let y = Math.floor(Math.random() * PasswordOptions.length);
    finalPassword += PasswordOptions[y];
  }
  console.log(finalPassword.length)
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

