"use strict";
// @ts-check
/**
 * JavaScript Fizz Buzz Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
function fizzBuzz(number) {
    let i = 1;
    const result = [];
    do {
        result.push((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
        i += 1;
    } while (i <= number);
    return result;
}
/**
 * @return void
 */
function test() {
    // Run tests
    // console.table(fizzBuzz(100));
    console.table(fizzBuzz(300));
    // console.log(fizzBuzz(800));
}
exports.test = test;
