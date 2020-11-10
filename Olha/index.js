//* 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const array = [0, 10, 3, 5, 6];
const numToCompare = 4;

function findGreatest(arr, num) {
	let list = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num) {
			list.push(arr[i]);
		}
	}
    return `${list}`;
}

const value = findGreatest(array, numToCompare);
console.log(value);


//* 2. For the longest word. Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course") ➞ "development"

let sentence = "Createee a function to find the longestt word in a givennn string.";

const longestWord = (str) => {
	const words = str.split(" ");

	let currLongest = "";

	const sorted = words.sort(
		(elOne, elTwo) => {
			return elOne.length - elTwo.length;
		}
	);
	console.log(sorted);

	currLongest = sorted[sorted.length - 1];
	
	const filtered = sorted.filter(
		(el) => {
			return el.length === currLongest.length;
		}
	);
	// const filtered = sorted.filter(el => el.length === currLongest.length);
	
	return `${filtered}`;
}

const theWord = longestWord(sentence);
console.log(theWord);


//* 3. Reverse. Create a function to reverse a number.
// i.e. reverse(34532) ➞ 23543

let number = 2170930;
const reverseTheNumber = (num) => {
	let numToPieces = num.toString().split("");
	console.log(numToPieces);
	let finalNumber = numToPieces.reverse().join("");
	console.log(finalNumber);
	return Number(finalNumber);
};
const answer = reverseTheNumber(number);
console.log(answer);

//* 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
// i.e. findVowels("this is a string") ➞ 4
let example = "PotatOs will potate";
const vowels = ["a", "e", "i", "o", "u"];

const countTheVowels = (str) => {
	str = str.toLowerCase();
    let counter = 0;
    for (let letter of str) {
        for (let individual of vowels) {
            if (letter == individual) {
                counter += 1;
            }
        }
    }
    return counter;
};
const theResult = countTheVowels(example);
console.log(theResult);

//* 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
const arrayOfNums = [7, 2, 3, 6, 5, 9, 1, 4, 8];

const missingNums = arr => {
	for (let num = 1; num <= 10; num++) {
		if (arr.indexOf(num) === -1) {
            // bc of this - console.log([1, 2, 3, 4].indexOf(5)); //-1
			return num;
		}
	}
}

const missingNumber = missingNums(arrayOfNums);
console.log(missingNumber);

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

//* 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.
const exampleArray = [1, 5, 9];
const cubedArray = exampleArray.map(
	num => {
		return num ** 3;
	}
);
console.log(cubedArray); // [ 1, 125, 729 ]

const cubedSum = cubedArray.reduce(
	(accumulator, currentVal) => {
		return accumulator + currentVal;
	}, 0
)
//currentval = 1, 125 729, accumulator 0 (first iteration)
console.log(cubedSum);

const cubedSum1 = exampleArray.map(num => num ** 3).reduce((acc, curr) => acc + curr, 0);
console.log(cubedSum1);

const cubedSum2 = (array) => {
	return array.reduce((acc, curr) => acc + curr**3, 0)
};
const sumOfCubes = cubedSum2(exampleArray);
console.log("sumOfCubes:", sumOfCubes);

// Examples:

// sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

//* 7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

let initialStr = "tri";
const arrayOfWords = ["triplet", "tries", "trip", "piano", "tree"];

const findWordsThatMatch = (arr, str) => {
	return arr.filter(word => word.indexOf(str) === 0);
}
const wordsThatMatch = findWordsThatMatch(arrayOfWords, initialStr);
console.log(wordsThatMatch);

// Examples:

// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

//* 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.
// If there are no even numbers, return an empty array.
// Do not include 0.

let numFrom = 1;
const findEvenNums = (from, to) => {
	const evenNumsArr = [];
	for (let i = from; i <= to; i++) {
		if (i % 2 === 0) {
			evenNumsArr.push(i);
		}
	}
	return evenNumsArr;
}

const evenNums = findEvenNums(numFrom, 10);
console.log(evenNums); // [ 2, 4, 6, 8, 10 ]

// evenNums(8) ➞ [2, 4, 6, 8]
// evenNums(4) ➞ [2, 4]
// evenNums(2) ➞ [2]

//* Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"

let unsortedWord = "Bundesausbildungsförderungsgesetz";

const sortWord = word => {
	let cleanWord = word.toLowerCase().replace(/[^a-zA-Z]/g, "");

	let sortedWord = cleanWord.split("").sort().join("");

	return sortedWord;
}

const sorted = sortWord(unsortedWord);
console.log(sorted);