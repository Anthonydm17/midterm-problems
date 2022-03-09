
//###EVENLY DIVISIBLE
function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 == 0){
    return true
  }else return false
}


//###HALF SQUARE

function halfSquare(num) {
  return (num * num) / 2
}

// ###IS LONG

function isLong(str) {
  if (str.length >= 15){
    return true
  }else return false
}

// ###EXCLAIM

function exclaim(str) {
let x = str.replace(/!.?/g,"")
return x + "!"
}

//###COUNT WORDS

function countWords(str) {
let arr = str.split(" ");
return arr.length
}


//###CONTAINS DIGIT

function containsDigit(str) {
let digits = "1234567890";
for (let i = 0; i < str.length; i++){
  if(digits.includes(str[i])){
    return true
  }
}
return false
}

//###CONTAINS LOWERCASE

function containsLowerCase(str) {
let lower = "abcdefghijklmnopqrstuvwxyz";
for (let i=0; i < str.length; i++){
  if(lower.includes(str[i])){
    return true
  }
}
return false
}

//###CONTAINS UPPERCASE

function containsUpperCase(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i=0; i < str.length; i++){
    if(upper.includes(str[i])){
      return true
    }
  }
  return false
  }


//###CONTAINS NON ALPHANUMERIC

function containsNonAlphanumeric(str) {
let alphas = " !@#$%^&*()-_=+,.<>/?';: "
for (let i = 0; i < str.length; i ++){
  if (alphas.includes(str[i])){
    return true
  }
}
return false
}


//###CONTAINS SPACE

function containsSpace(str) {
  let space = " ";
  for (let i=0;i< str.length; i++){
      if(space.includes(str[i])){
        return true
      }
  }
return false
}


// can turn a positive number into an array of its digits
// can turn a negative number into an array of its digits, ignoring the negative sign
// can turn a floating point number into an array of its digits, ignoring the decimal point

function digits(str) {
let digits = "0123456789";
let arr = [];
let x = str.toString();

for (let i = 0; i < x.length; i++){
  if (digits.includes(x[i])){
    arr.push(Number(x[i]))
  }
}
return arr
}

//###TRUNCATE

function truncate(str) {
  let x = str.slice(0,8) + "...";
  if(str.length >= 15){
    return x 
      }
  return str
}



//###VALID PASSWORD

function isValidPassword(str) {
  // MUST CONTAIN
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = lower.toUpperCase();
    let digits = "1234567890";
    let alphas = "!@#$%^&*()-_=+,.<>/?';: ";
    let space = " ";
// BOOLEANS
let lowerBool = false;
let upperBool = false;
let digitsBool = false;
let alphasBool = false;
let spaceBool = false;
// BOOLEAN FOR FINAL CHECK
let x = true;
// BOOLEAN CHECKS
    for (let i = 0; i < str.length; i++){
    if (lower.includes(str[i])){
      lowerBool = true;
    }
  }
    for (let i = 0; i < str.length; i++){
      if (upper.includes(str[i])){
        upperBool = true;
      }
    }
    for (let i = 0; i < str.length; i++){
        if (digits.includes(str[i])){
          digitsBool = true;
        }
      }
    for (let i = 0; i < str.length; i++){
          if (alphas.includes(str[i])){
            alphasBool = true;
          }
        }  
    for (let i = 0; i < str.length; i++){
            if (space.includes(str[i])){
              spaceBool = true;
            }  
// FINAL CHECKS
}if (lowerBool == true && upperBool == true && digitsBool == true && alphasBool == true){
  x = true
}if (lowerBool == false || upperBool == false || digitsBool == false || alphasBool == false){
  x = false
}else if (spaceBool == true){
  x = false
}
return x
}
    
  
//###ONLY PUNCHY

function onlyPunchy(arr) {
let x = []

for (let i = 0; i < arr.length; i++){
  let check = arr[i].replace(/!/g, "");
  if(check.length < 15){
    x.push(check + "!")
}
}
return x
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}