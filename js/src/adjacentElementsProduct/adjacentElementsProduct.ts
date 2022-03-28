// @ts-check
/**
 * JavaScript Adjacent Elements Product Challenge
 * @author Esteban Rocha
 * @link   https://github.com/Esteban-Rocha
 */

/**
 * @param  inputArray: number[]
 * @return number
 */
function adjacentElementsProduct(inputArray: number[]) {
    const totalSum: number[] = [];
    // Iterate array values
    for (let index = 0; index <= inputArray.length; index++) {
        const checkMaxProduct: number = inputArray[index];
        // Delete undefined NaN value at final cycle
        // and get Math.max of array products as return value
        if (index === inputArray.length) {
            totalSum.pop();
            const max_of_array: number = Math.max(...totalSum);
            return max_of_array;
        }

        // Calculate product of current array element
        totalSum.push(checkMaxProduct * inputArray[index + 1]);
    }
}

/**
 * @return void
 */
export function test(): void {
    // Run tests
    const a__Products: number[] = [9, 5, 10, 2, 1, -1, -48];
    console.log(adjacentElementsProduct(a__Products));
    console.log(adjacentElementsProduct([1, 2, 3, 0]));
}
