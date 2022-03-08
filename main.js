
// true if first number is even div by second
function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 == 0){
    return true
  }else return false
}


// returns squared number divided by 2

function halfSquare(num) {
  return (num * num) / 2
}

// return true if string is longer then 15 characters - false if not
// if 15 exactly = true

function isLong(str) {
  if (str.length >= 15){
    return true
  }else return false
}

// return string with "!"
// if it has "!" return unchanged 
// if multiples, return with 1 "!"

function exclaim(str) {
let x = str.replace(/!.?/g,"")
return x + "!"
}

// returns count of words with spaces in between
function countWords(str) {
let arr = str.split(" ");
return arr.length
}


// returns true if contains digits, false if none

function containsDigit(str) {
let digits = "1234567890";
for (let i = 0; i < str.length; i++){
  if(digits.includes(str[i])){
    return true
  }
}
return false
}

// returns true if string contains lowercase and false if not

function containsLowerCase(str) {
let lower = "abcdefghijklmnopqrstuvwxyz";
for (let i=0; i < str.length; i++){
  if(lower.includes(str[i])){
    return true
  }
}
return false
}

// returns true if string contains uppercase and false if not

function containsUpperCase(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i=0; i < str.length; i++){
    if(upper.includes(str[i])){
      return true
    }
  }
  return false
  }



function containsNonAlphanumeric(str) {
let alphas = " !@#$%^&*()-_=+,.<>/?';: "
for (let i = 0; i < str.length; i ++){
  if (alphas.includes(str[i])){
    return true
  }
}
return false
}


// can determine that a string with only spaces contains at least one space
// can determine that a string with only letters does not contain any spaces
// can determine that a string with only digits does not contain any non-alphanumeric characters

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

}


// shortens 15 or more to 8 characters and "..."
// returns string with less then 15 characters without any changes

function truncate(str) {
  let x = str.slice(0,8) + "...";
  if(str.length >= 15){
    return x 
      }
  return str
}



// returns false if there are no uppercase characters in the given string
// returns false if there are no lowercase characters in the given string
// returns false if there are no digits in the given string
// returns false if there are no non-alphanumeric characters in the given string`, () => {
// returns false if there are any spaces in the given string

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

let x = true;

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
}if (lowerBool == true && upperBool == true && digitsBool == true && alphasBool == true){
  x = true
}if (lowerBool == false || upperBool == false || digitsBool == false || alphasBool == false){
  x = false
}else if (spaceBool == true){
  x = false
}
return x
}
    
  



    


// // CANT CONTAIN
// let space = " "

// for (let i=0; i < str.length;i++){
//  if (space.includes(str[i])){
//     return false
//   }else if (lower.includes(str[i]) && upper.includes(str[i]) && digits.includes(str[i]) && alphas.includes(str[i])){
//     return true
//   }
// }
// return false
// }

function onlyPunchy() {
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