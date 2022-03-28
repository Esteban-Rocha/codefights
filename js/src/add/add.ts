// @ts-check
/**
 * JavaScript Add Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */

/**
 * @param  input1 number
 * @param  input2 number
 * @return boolean
 */
function add(input1: number, input2: number): number {
    return input1 + input2;
}

/**
 * @return void
 */
export function test(): void {
    // Run tests
    console.log(add(1, 2));
    console.log(add(54, 23));
    console.log(add(6947, 142145));
}
