/**
 * JavaScript Adjacent Elements Product Module
 *
 * @package     CodeFights
 * @subpackage  Adjacent Elements Product
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 * @since       1.0.0
 */

/* jshint esversion: 6 */

/**
 * adjacentElementsProduct - Given an array of integers, find the pair of adjacent elements
 * that has the largest product and return that product.
 *
 * @param       inputArray: number[] - array
 * @return      max_of_array: any - integer
 */
function adjacentElementsProduct(inputArray: number[]) {
	let a__Max: number[] = [];
	// Iterate array values
	for (let index = 0; index <= inputArray.length; index++) {
		let checkMaxProduct: number = inputArray[index];
		// Delete undefined NaN value at final cycle
		// and get Math.max of array products as return value
		if (index == inputArray.length) {
			a__Max.pop();
			// Use spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
			let max_of_array: any = Math.max(...a__Max);
			console.log(max_of_array);
			return max_of_array;
		} else {
			// Calculate product of current array element
			a__Max.push(checkMaxProduct * inputArray[index + 1]);
		}
	}
}

// Run tests
let a__Products: number[] = [9, 5, 10, 2, 24, -1, -48];
console.log(adjacentElementsProduct(a__Products));
