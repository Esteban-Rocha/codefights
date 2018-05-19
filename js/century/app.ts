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

/**
 * centuryFromYear - Given a year, return the century it is in.
 *
 * @param       integer
 * @return      result: number - integer
 */
function centuryFromYear(param1: number) {
	// Get param and calculate it's century
	let result: number = Math.trunc((param1 + 99) / 100);
	// Log to pass and 100% score on tests
	console.log(result);

	return result;
}

// Run tests
console.log(centuryFromYear(5584));
console.log(centuryFromYear(295));
console.log(centuryFromYear(2013));
console.log(centuryFromYear(1495));
