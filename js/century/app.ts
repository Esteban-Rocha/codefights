/**
 * JavaScript First Duplicate Module
 *
 * @package     CodeFights
 * @subpackage  First Duplicate
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 * @since       1.0.0
 */

/* jshint esversion: 6 */

function centuryFromYear(param1: number) {
	let result: number = Math.trunc((param1 + 99) / 100);
	console.log(result);
	return result;
}
console.log(centuryFromYear(5584));
