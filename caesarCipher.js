/* 
Caesar Cipher in JavaScript- freeCodeCamp challenge
Program by Emily Ashburn
08/28/2023
.
.
from freeCodeCamp:
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
.
.
This program is designed to intake a string to the function rot13() and ciphers the text by 13 positions in the positive direction. The function returns the ciphered string. All unit tests from freeCodeCamp are included (as test1, test2, etc..) below.

This Caesar Cipher transforms strings with CAPITAL letters AND with lowercase letters. Special characters like !, ?, ^, space, @, etc.. are not ciphered.
.
.
*/


function rot13(str) {
  var tempList = []
  var convertedString = ''

  // Convert text to ASCII values
  for (let i = 0; i < str.length; i++) {
    tempList.push(str.charCodeAt(i));
  }

  // Iterate through list to perform Caesar Cipher
  for (let i = 0; i < tempList.length; i++) {
      
    // If char is a lowercase letter
    if (tempList[i] >= 97 && tempList[i] <= 122) {
      tempList[i] += 13
      // If letter goes beyond "z" (ascii = 122), subtract 26 to bring back to beginning of alphabet
      if (tempList[i] > 122) {
        tempList[i] -= 26
      }
    }

    // If char is a CAPITAL letter
    if (tempList[i] >= 65 && tempList[i] <= 90) {
      tempList[i] += 13
      // If letter goes beyond "Z" (ascii = 90), subtract 26 to bring back to beginning of alphabet
      if (tempList[i] > 90 ) {
        tempList[i] -= 26
      }
    }
  }

  // Convert ASCII value back to text
  for (let i = 0; i< tempList.length; i++) {
    convertedString += String.fromCharCode(tempList[i])
  }
  
  return convertedString;
}

////// Tests //////

//Should equal "FREE CODE CAMP"
console.log(rot13("SERR PBQR PNZC"));

//Should equal "FREE PIZZA!"
console.log(rot13("SERR CVMMN!"));

//Should equal "FREE LOVE?"
console.log(rot13("SERR YBIR?"));

//Should equal "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


////// Extra Tests (added by myself) //////

//Should equal "Who Farted?!"
console.log(rot13("Jub Snegrq?!"));

//Should equal "ThIs SeNtEnCe Is FuNnY lOoKiNg.."
console.log(rot13("GuVf FrAgRaPr Vf ShAaL yBbXvAt.."));