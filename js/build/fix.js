"use strict";
/**
 * JavaScript Board Module
 *
 * @package     Developer Handclipboard
 * @subpackage  Layouts
 * @author      Esteban Rocha
 * @link        https://github.com/Esteban-Rocha
 * @since       1.0.0
 */
/* jshint esversion: 6 */
const dHr = "-----------------------------------------------------------------------";
const dMssg = Mssg => console.warn(`${dHr}\n-> ${Mssg}\n${dHr}`);
const hR = message => (message ? dMssg(message) : console.warn(dHr));
hR();
// function checkPalindrome(inputString) {
// 	// Use regex to clean up invalid chars
// 	let re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
// 	// Transform string toLowerCase
// 	inputString = inputString.toLowerCase().replace(re, "");
// 	console.warn(inputString);
// 	let srtLen = Math.floor(inputString.length / 2);
// 	console.warn(srtLen);
// 	for (let index = 0; index < srtLen; index++) {
// 		if (inputString[index] !== inputString[inputString.length - index - 1]) {
// 			return false;
// 		}
// 		return true;
// 	}
// 	// // Return value
// 	// return inputString;
// }
// // for (let index = 5; index <= 3405; index += 100) {
// // 	console.warn(centuryFromYear(index));
// // 	// console.warn(index);
// // }
// console.warn(checkPalindrome("Avid diva"));
let cat = {
    name: "Dragon",
    favThings: ["bite", "scratch", "destroy"],
    showFavThings: function () {
        this.favThings.forEach(function (fav) {
            console.warn(this.name + " loves to " + fav + "!");
        });
    },
};
cat.showFavThings();
// hR();
let betterCat = {
    name: "Dragon",
    favThings: ["bite", "scratch", "destroy"],
    owner: {
        name: "Esteban",
        age: "30",
    },
    showFavThings() {
        this.favThings.forEach(fav => {
            console.group("Favorite things:", this.name + " loves to " + fav + "!");
        });
    },
    ownerIs() {
        let ownerData = [];
        for (const iterator of Object.values(this.owner)) {
            ownerData.push(iterator);
        }
        const alpha = `
    This ${this.name} owner name is ${ownerData[0]}\nand it's age is ${ownerData[1]}`.trim();
        console.group("Owner:", alpha);
    },
};
betterCat.showFavThings();
betterCat.ownerIs();
// hR();
// function tagAgeRange(strings, name, age) {
// 	let str0 = strings[0];
// 	let str1 = strings[1];
// 	let ageSTR;
// 	if (name == null) {
// 		return `Sir. I need at the very least a mother fucking name to operate, Thanks.`;
// 	} else if (age == null) {
// 		return `${str0}"${name}" age is a fucking mystery, thus\` I don't have anything for you.`;
// 	} else if (0 <= age && age <= 35) {
// 		ageSTR = "Youngster";
// 	} else if (36 <= age && age <= 80) {
// 		ageSTR = "Grownup";
// 	} else {
// 		ageSTR = "Old as fuck!";
// 		str1 = " is ";
// 	}
// 	return `${str0}"${name}"${str1}${ageSTR}`;
// }
// let output = (pName, pAge) => tagAgeRange`It seems that ${pName} is a ${pAge}`;
// console.warn(output("Til Lindermann", 90));
// console.warn(output("Pikachu"));
// console.warn(output("Elisa", 1));
// console.warn(output());
// hR();
// const howOldIsIt = (hoitBirthYear = null, hoitName = null) => {
// 	const hoitYear = new Date().getFullYear();
// 	if (hoitName == null && hoitBirthYear == null) {
// 		console.warn("No data");
// 		return;
// 	}
// 	let realAge = hoitYear - hoitBirthYear;
// 	console.warn(hoitName ? hoitName + " age is -> " + realAge : "" + "Years since -> " + realAge);
// };
// console.time('howOldIsIt');
// howOldIsIt(1986);
// howOldIsIt(1988);
// howOldIsIt(2017, "Elisa Victoria");
// howOldIsIt(1963, "Norma");
// howOldIsIt(1960, "Armando");
// howOldIsIt(1948, "Ligia");
// howOldIsIt(1959, "Rodrigo");
// howOldIsIt(2004, "Russia");
// howOldIsIt(2008, "Elisa");
// howOldIsIt(2011, "Melisa");
// console.timeEnd('howOldIsIt');
// hR("Imperative Multiples");
// // If we list all the natural numbers below 10 that are multiples of 3 or 5,
// // we get 3, 5, 6 and 9. The sum of these multiples is 23.
// // 5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, and 5 * 5 = 25.
// // Find the sum of all the multiples of 3 or 5 below 1000.
// const multiplesDP = limit => {
//   let sum = 0;
//   for (let index = 0; index < limit; index += 1) {
//     if (index % 3 === 0 || index % 5 === 0) {
//       sum += index;
//     }
//   }
//   return `Value is ${sum}`;
// };
// console.time("Mulpletes");
// console.warn(multiplesDP(1000));
// console.timeEnd("Mulpletes");
// hR("Functional Multiples");
// const range = baseNum => Array.from(new Array(baseNum), (x, z) => z);
// const getMultiples = (num, dividor) => num % dividor === 0;
// const dividerParams = aVal => getMultiples(aVal, 3) || getMultiples(aVal, 5);
// const divSum = (acc, val) => acc + val;
// const multiplesFP = toRange => {
//   console.warn(
//     range(toRange)
//       .filter(dividerParams)
//       .reduce(divSum)
//   );
// };
// console.time("Funtional Multiples");
// multiplesFP(1000);
// console.timeEnd("Funtional Multiples");
// const obj = { id: "mockId", name: "peter" };
// Object.entries(obj).map(([key, value]) => console.log(`${key} : ${value}`));
// hR("test");
// const subString = string => {
//   const uniqueChars = new Set([]);
//   let sbStrLength = 0;
//   let strStart = 0;
//   let strEnd = 0;
//   while (strStart <= strEnd && strEnd < string.length) {
//     const current = string[strEnd];
//     while (uniqueChars.has(current) && uniqueChars.size > 0) {
//       uniqueChars.delete(string[strStart]);
//       strStart += 1;
//     }
//     uniqueChars.add(current);
//     strEnd += 1;
//     sbStrLength = Math.max(sbStrLength, strEnd - strStart);
//   }
//   return `The lenght of the substring is ${sbStrLength}`;
// };
// console.warn(subString("abcabcbb"));
// console.warn(subString("bbbbb"));
// console.warn(subString("pwwkew"));
// hR();
// const pizzaObj = {
//   type: "vegetarian",
//   size: "Gigantic",
//   prices: {
//     small: "5.00",
//     medium: "6.00",
//     large: "7.00",
//   },
// };
// const deepClone = object => {
//   if (object == null || typeof object !== "object") return object;
//   // Handle Date
//   if (object instanceof Date) {
//     const copy = new Date();
//     copy.setTime(object.getTime());
//     return copy;
//   }
//   if (object instanceof Array) {
//     return object.map(item => deepClone(item));
//   }
//   const newObject = {};
//   for (const key in object) {
//     if (typeof object[key] === "object") {
//       newObject[key] = deepClone(object[key]);
//     } else {
//       newObject[key] = object[key];
//     }
//   }
//   return newObject;
// };
// const deepClones = obj => {
//   const clone = Object.assign({}, obj);
//   Object.keys(clone).forEach(key => {
//     const keyCloned = (clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]);
//     return keyCloned;
//   });
//   const flatObj = Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
//   return flatObj;
// };
// const newPizza = deepClone(pizzaObj);
// console.warn(pizzaObj);
// console.warn(newPizza);
// console.warn("update...");
// newPizza.prices.large = 500000;
// console.warn(pizzaObj);
// console.warn(newPizza);
// const getDaysDiffBetweenDates = (dateInitial, dateFinal) => {
//   const yearsDiff = (dateFinal - dateInitial) / (1000 * 3600 * 24);
//   const daysDiff = yearsDiff * 0.0027;
//   let yearsStr = "Year";
//   const daysDiffFixed = daysDiff.toFixed();
//   daysDiffFixed <= 1 ? yearsStr : (yearsStr += "s");
//   console.log(yearsStr);
//   return `There are ${yearsDiff} days of difference or ${daysDiff.toFixed()} ${yearsStr}`;
// };
// const dateDiff = (start, end) => getDaysDiffBetweenDates(new Date(start), new Date(end));
// console.warn(dateDiff("1963-06-12", "1988-03-26"));
// console.warn(dateDiff("1960-09-09", "1988-03-26"));
// console.warn(dateDiff("1986-12-03", "1988-03-26"));
// console.warn(dateDiff("1986-12-03", "1988-03-26"));
// console.warn(dateDiff("1988-03-26", "2017-03-19"));
// // 479 Days = 1.3123 Years = 1 Year, 3 Months, 3 Weeks, 1 Day, 16 Hours and 20 Minutes
// // Use FP and recursion to flat array independent of nested values deepth
// const arrayToFlatted = arrParam =>
//   [].concat(...arrParam.map(values => (Array.isArray(values) ? arrayToFlatted(values) : values)));
// const testArray = [1, [2], [[3, [3.5, [3.8594]]], 4], 5];
// console.warn(arrayToFlatted(testArray));
// CENTURY
const centuryFromYear = x => (x != undefined ? Math.trunc((param1 + 99) / 100) : undefined);
