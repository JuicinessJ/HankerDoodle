// Initialize each variable
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Prompt Questions
var length = prompt("How long do you want the password to be? Enter number only! Between 8-128");
var upper = confirm("Do you want uppercases?");
var lower = confirm("Do you want lowercases?");
var numbers = confirm("Do you want numbers?");
var special = confirm("Do you want special characters?");

// If Prompts
/*if (length > 128 || length < 8)
{
  confirm("Must be between 8 and 128");
  

} Dont know if needed */

// Database?
var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOptions = ["1","2","3","4","5","6","7","8","9","0"];
var specialOptions = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","|","[","]",",","<",">","?",".","/","'","`","~"];
var options = 0;


// Upper
if (upper === true)
{
  options++;
  Math.floor(Math.random() * (5 - 1) + 1);
  function generateUpper () {

  }

}

// Lower
if (lower === true)
{
  options++;
  function generateLower () {
    
  }

}

// Numbers
if (numbers === true)
{
  options ++;
  function generateNumber () {
    
  }

}

// Special
if (special === true)
{
  options++;
  function generateSpecial () {
    
  }

}

//MISC
var x = (length/options);
console.log(x);



// Listener Event
generateBtn.addEventListener("click", writePassword);

// Runs the create password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Hi!")

  passwordText.value = password;
}




// Create password 
function generatePassword() {
  
}

