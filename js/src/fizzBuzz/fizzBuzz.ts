// @ts-check
/**
 * JavaScript Fizz Buzz Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */

function fizzBuzz(number: number): Array<string | number> {
    let i = 1;
    const result: Array<string | number> = [];

    do {
        result.push((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
        i += 1;
    } while (i <= number);

    return result;
}

/**
 * @return void
 */
export function test(): void {
    // Run tests
    // console.table(fizzBuzz(100));
    console.table(fizzBuzz(300));
    // console.log(fizzBuzz(800));
}
