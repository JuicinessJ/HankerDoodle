var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Prompt Questions
var length = prompt("How long do you want the password to be? Enter number only! Between 8-128");
var upper = confirm("Do you want uppercases?");
var lower = confirm("Do you want lowercases?");
var numbers = confirm("Do you want numbers?");
var special = confirm("Do you want special characters?");

// Database?
var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOptions = ["1","2","3","4","5","6","7","8","9","0"];
var specialOptions = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","|","[","]",",","<",">","?",".","/","'","`","~"];
var options = 0;
var poss = (length/options);
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;

console.log(lowerOptions.length)

// Functions
function generateUpper() {
  for (let a = 0; a < poss; a++)
  {
    var x1 = Math.floor(Math.random() * upperOptions.length);

    
  }
  return;
}
generateLower()
generateSomething()

function generateLower() {
  for (let a = 0; a < poss; a++)
  {
    var x2 = Math.floor(Math.random() * lowerOptions.length);

  }
  return;
}

const generateSomething = () => {
  // do stuff in here
}

function generateNumber() {
  for (let a = 0; a < poss; a++)
  {
    var x3 = Math.floor(Math.random() * numberOptions.length);

  }
  return;
}

function generateSpecial() {
  for (let a = 0; a < poss; a++)
  {
    var x4 = Math.floor(Math.random() * specialOptions.length);

  }
  return;
}

// If Prompts
/*if (length > 128 || length < 8)
{
  confirm("Must be between 8 and 128");
  

} Dont know if needed */

// Upper
if (upper === true)
{
  options++;
  generateUpper();
}

// Lower
if (lower === true)
{
  options++;
  generateLower();
}

// Numbers
if (numbers === true)
{
  options ++;
  generateNumber();
}

// Special
if (special === true)
{
  options++;
  generateSpecial();
}



// Runs the create password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Hi!")

  passwordText.textContent= password;
}


// Create password 
function generatePassword() {
  document.querySelector(".card-header").textContent = "We changed the textContent"
  return "A password to be generated in the future"
}

// Listener Event
generateBtn.addEventListener("click", writePassword);