/* 
Palindrome Checker in JavaScript- freeCodeCamp challenge
Program by Emily Ashburn
05/05/2023
.
.
from freeCodeCamp:
  Return true if the given string is a palindrome. Otherwise, return false.
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
  We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
  We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
.
.
This program is designed to intake a string to the function palindrome() and determines whether the input is a palindrome or not. The function returns the appropriate boolean for each input. All unit tests from freeCodeCamp are included (as test1, test2, etc..) below.

This palindrome checker removes all non-alphanumeric characters (punctuation, spaces, and symbols), so strings with special characters are cleansed to only contain letters and numbers.
.
.
*/

function palindrome(str) {
  //Make the string all lowercase
  str = str.toLowerCase();

  //Remove the non-alphanumeric characters from the string!
  let myRegex = /[a-zA-Z0-9]/g;
  let palindromeArr = str.match(myRegex);

  //Flip the palindrome in order to compare to original string
  let flippedPalindromeArr =  palindromeArr.toReversed();

  //Let's compare the two arrays and verify whether str is actuall a palindrome
  for(let i = 0; i < palindromeArr.length; i++){
    if (palindromeArr[i] != flippedPalindromeArr[i]){
      return false;
    }
  }
  return true;
}

//Should be true
let test1 = palindrome("eye");
console.log(`Is "eye" a palindrome?... \n${test1}\n`);

//Should be true
let test2 = palindrome("_eye");
console.log(`Is "_eye" a palindrome?... \n${test2}\n`);

//Should be true
let test3 = palindrome("race car");
console.log(`Is "race car" a palindrome?... \n${test3}\n`);

//Should be false
let test4 = palindrome("not a palindrome");
console.log(`Is "not a palindrome" a palindrome?... \n${test4}\n`);

//Should be true
let test5 = palindrome("A man, a plan, a canal. Panama");
console.log(`Is "A man, a plan, a canal. Panama" a palindrome?... \n${test5}\n`);

//Should be true
let test6 = palindrome("never odd or even");
console.log(`Is "never odd or even" a palindrome?... \n${test6}\n`);

//Should be false
let test7 = palindrome("nope");
console.log(`Is "nope" a palindrome?... \n${test7}\n`);

//Should be false
let test8 = palindrome("almostomla");
console.log(`Is "almostomla" a palindrome?... \n${test8}\n`);

//Should be true
let test9 = palindrome("My age is 0, 0 si ega ym.");
console.log(`Is "My age is 0, 0 si ega ym." a palindrome?... \n${test9}\n`);

//Should be false
let test10 = palindrome("1 eye for of 1 eye.");
console.log(`Is "1 eye for of 1 eye." a palindrome?... \n${test10}\n`);

//Should be true
let test11 = palindrome("0_0 (: /-\ :) 0-0");
console.log(`Is "0_0 (: /-\ :) 0-0" a palindrome?... \n${test11}\n`);

//Should be false
let test12 = palindrome("five|\_/|four");
console.log(`Is "five|\_/|four" a palindrome?... \n${test12}\n`);