/**
 * JavaScript Palindrome Module
 *
 * @package     CodeFights
 * @subpackage  Palindrome
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 * @since       1.0.0
 */

/* jshint esversion: 6 */

function checkPalindrome(inputString: any) {
	// Use regex to clean up invalid chars
	let re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
	// Transform string toLowerCase
	inputString = inputString.toLowerCase().replace(re, "");

	// Create array from inputString and reverse it
	let reverseInputString = inputString.split("");
	reverseInputString = reverseInputString.reverse();
	reverseInputString = reverseInputString.join("");

	// Plain compare if its palindrome or not
	if (reverseInputString === inputString) {
		return true;
	} else {
		return false;
	}
}

console.log(
	checkPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod")
);
console.log(
	checkPalindrome(
		"Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is"
	)
);
console.log(checkPalindrome("5885"));
console.log(checkPalindrome("z"));
console.log(checkPalindrome("zzzazzazz"));
