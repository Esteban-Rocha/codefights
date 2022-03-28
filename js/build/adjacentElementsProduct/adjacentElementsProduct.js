"use strict";
// @ts-check
/**
 * JavaScript Adjacent Elements Product Challenge
 * @author Esteban Rocha
 * @link   https://github.com/Esteban-Rocha
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
/**
 * @param  inputArray: number[]
 * @return number
 */
function adjacentElementsProduct(inputArray) {
    const totalSum = [];
    // Iterate array values
    for (let index = 0; index <= inputArray.length; index++) {
        const checkMaxProduct = inputArray[index];
        // Delete undefined NaN value at final cycle
        // and get Math.max of array products as return value
        if (index === inputArray.length) {
            totalSum.pop();
            const max_of_array = Math.max(...totalSum);
            return max_of_array;
        }
        // Calculate product of current array element
        totalSum.push(checkMaxProduct * inputArray[index + 1]);
    }
}
/**
 * @return void
 */
function test() {
    // Run tests
    const a__Products = [9, 5, 10, 2, 1, -1, -48];
    console.log(adjacentElementsProduct(a__Products));
    console.log(adjacentElementsProduct([1, 2, 3, 0]));
}
exports.test = test;
