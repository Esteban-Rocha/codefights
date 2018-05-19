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
function adjacentElementsProduct(inputArray: number[]) {
	let a__Max: number[] = [];
	for (let index = 0; index <= inputArray.length; index++) {
		let checkMaxProduct: number = inputArray[index];
		if (index == inputArray.length) {
			a__Max.pop();
			let max_of_array: any = Math.max(...a__Max);
			console.log(max_of_array);
			return max_of_array;
		} else {
			a__Max.push(checkMaxProduct * inputArray[index + 1]);
		}
	}
}
let a__Products: number[] = [9, 5, 10, 2, 24, -1, -48];
console.log(adjacentElementsProduct(a__Products));
