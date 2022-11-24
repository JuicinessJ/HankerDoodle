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
const upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberOptions = ["1","2","3","4","5","6","7","8","9","0"];
const specialOptions = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","|","[","]",",","<",">","?",".","/","'","`","~"];

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
  
  let options = 0;
  if (upper === true)
  {
    options++;
  }

  if (lower === true)
  {
    options++;
  }

  if (numbers === true)
  {
    options++;
  }

  if (special === true)
  {
    options++;
  }

 if (options === 4)
 {
  let x1 = Math.floor(math.random() * length);
  let x2 = Math.floor(math.random() * (length - x1));
  let x3 = Math.floor(math.random() * (length - x2));
  let x4 = (length - x3);
 }
 if (options === 3)
 {
  let x1 = Math.floor(math.random() * length);
  let x2 = Math.floor(math.random() * (length - x1));
  let x3 = (length - x2);
 }
 if (options === 2)
 {
  let x1 = Math.floor(math.random() * length);
  let x2 = (length - x1);
 }

 // need to randomize the selection of letters
 if (options === 4)
 {

 }
 else if (options === 3)
 {

 }
 else if (options === 2)
 {
 
 }
 else
 {

 }

 
  document.querySelector(".card-header").textContent = "We changed the textContent"
  return "A password to be generated in the future"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

