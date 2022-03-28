"use strict";
// @ts-check
/**
 * JavaScript Add Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
/**
 * @param  input1 number
 * @param  input2 number
 * @return boolean
 */
function add(input1, input2) {
    return input1 + input2;
}
/**
 * @return void
 */
function test() {
    // Run tests
    console.log(add(1, 2));
    console.log(add(54, 23));
    console.log(add(6947, 142145));
}
exports.test = test;
