// @ts-check
/**
 * JavaScript Century Challenge
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 */

/**
 * @param  year number
 * @return number
 */
function centuryFromYear(year: number) {
    // Get param and calculate it's century
    const result: number = Math.trunc((year + 99) / 100);
    return result;
}

/**
 * @return void
 */
export function test(): void {
    // Run tests
    console.log(centuryFromYear(5584));
    console.log(centuryFromYear(295));
    console.log(centuryFromYear(2013));
    console.log(centuryFromYear(1495));
}
