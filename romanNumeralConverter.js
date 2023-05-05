/* 
Roman Numeral Converter in JavaScript- freeCodeCamp challenge
Program by Emily Ashburn
05/05/2023
.
.
from freeCodeCamp:
Convert the given number into a roman numeral.
    Roman numerals	Arabic numerals
    M	            1000
    CM	            900
    D	            500
    CD	            400
    C	            100
    XC	            90
    L	            50
    XL	            40
    X	            10
    IX	            9
    V	            5
    IV	            4
    I	            1
All roman numerals answers should be provided in upper-case.
.
.
This program is designed to intake a number to the function convertToRoman() and returns the converted Roman Numeral string. 
.
.
*/


function convertToRoman(num) {
    if (num == 0){
        return '';
    } 
    else {
        if(num >=1000)
            return 'M' + convertToRoman(num-1000);
        if(num >=900)
            return 'CM' + convertToRoman(num-900);
        if(num >=500)
            return 'D' + convertToRoman(num-500);
        if(num >=400)
            return 'CD' + convertToRoman(num-400);
        if(num >=100)
            return 'C' + convertToRoman(num-100);
        if(num >=90)
            return 'XC' + convertToRoman(num-90);
        if(num >=50)
            return 'L' + convertToRoman(num-50);
        if(num >=40)
            return 'XL' + convertToRoman(num-40);
        if(num >=10)
            return 'X' + convertToRoman(num-10);
        if(num >=9)
            return 'IX' + convertToRoman(num-9);
        if(num >=5)
            return 'V' + convertToRoman(num-5);
        if(num >=4)
            return 'IV' + convertToRoman(num-4);
        if(num >= 1)
            return 'I' + convertToRoman(num-1);
    }
}
  
let numsToConvert = [2,3,4,5,9,12,16,29,44,45,68,83,97,99,400,500,501,649,798,891,1000,1004,1006,1023,2014,3999];
  
for(let i=0; i < numsToConvert.length; i++){
    let result = convertToRoman(numsToConvert[i]);
    console.log(`${numsToConvert[i]} converted to Roman Numerals is ${result}`);
}