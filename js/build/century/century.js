"use strict";
// @ts-check
/**
 * JavaScript Century Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
/**
 * @param  year number
 * @return number
 */
function centuryFromYear(year) {
    // Get param and calculate it's century
    const result = Math.trunc((year + 99) / 100);
    return result;
}
/**
 * @return void
 */
function test() {
    // Run tests
    console.log(centuryFromYear(5584));
    console.log(centuryFromYear(295));
    console.log(centuryFromYear(2013));
    console.log(centuryFromYear(1495));
}
exports.test = test;
