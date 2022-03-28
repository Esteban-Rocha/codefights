"use strict";
// @ts-check
/**
 * JavaScript Palindrome Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */
/**
 * @param  inputString string
 * @return boolean
 */
function checkPalindrome(inputString) {
    // Use regex to clean up invalid chars
    const regx = /[^A-Za-z0-9]/g;
    // Transform string toLowerCase
    inputString = inputString.toLowerCase().replace(regx, "");
    // Create array from inputString and reverse it
    const reverseInputString = inputString.split("").reverse().join("");
    // Plain compare if its palindrome or not
    return reverseInputString === inputString ? true : false;
}
// Run tests
console.log(checkPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod"));
console.log(checkPalindrome("Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is"));
console.log(checkPalindrome("5885"));
console.log(checkPalindrome("z"));
console.log(checkPalindrome("zzzazzazz"));
