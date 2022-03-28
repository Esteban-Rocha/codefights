"use strict";
// @ts-check
/**
 * JavaScript Century Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */
/**
 * centuryFromYear - Given a year, return the century it is in.
 *
 * @param       integer
 * @return      result: number - integer
 */
function centuryFromYear(param1) {
    // Get param and calculate it's century
    const result = Math.trunc((param1 + 99) / 100);
    // Log to pass and 100% score on tests
    console.log(result);
    return result;
}
// Run tests
console.log(centuryFromYear(5584));
console.log(centuryFromYear(295));
console.log(centuryFromYear(2013));
console.log(centuryFromYear(1495));
