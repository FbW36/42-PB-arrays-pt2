/* 1. The Greater Numbers.Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number.The function should return the elements of the array which are greater than the second argument.

    i.e.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10 */

function getGreatest(arr, number) {
  let greatestNumbers = arr.filter((item) => item > number);
  return greatestNumbers;
}

let arr = console.log(getGreatest([10, 20, 30], 12));

// -----------------------------------------------

/**2. For the longest word. Create a function to find the longest word in a given string.

i.e. longestWord("this is a web development course") ➞ "development" */

function longestWord(string) {
  let stringArray = string.split(" ");

  let stringArraySorted = stringArray.sort((a, b) => b.length - a.length);
  return stringArraySorted[0];
}

console.log(longestWord("this is a web development course"));

// 3. Reverse.Create a function to reverse a number.
//    i.e.reverse(34532) ➞ 23543

number = 34532;

let reverseNumber = (number) => {
  let reverseNumber = number.toString().split("").reverse().join("");
  return reverseNumber;
};

console.log(reverseNumber(number)); // 23543

//-----------------------------------------------------

/* 4. AEIOU: Vowels.Create a function that takes a string in its parameters and counts the number of vowels(i.e.in English, "a, e, i, o, u") in the string.

    i.e.findVowels("this is a string") ➞ 4 */

function getVowels(string) {
  let stringArray3 = string.split("");

  let count = 0;
  let vowels = "aeiouAEIOU";

  stringArray3.map((item) => {
    if (vowels.includes(item)) {
      count++;
    }
  });
  return count;
}

console.log(getVowels("this is a string"));

/* 6. Cubed.Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples:
sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0*/

function sumCubes(arr) {
  let Cubes = arr.map((item) => Math.pow(item, 3));
  let sumCubes = 0;
  for (item of Cubes) {
    sumCubes += item;
  }
  return sumCubes;
}

console.log("sumCubes==>", sumCubes([1, 5, 9]));

/**7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

Notes:
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.
Examples:

dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ [] */

function dictionary(string, array) {
  let matchWords = array.filter((item) => item.includes(string));

  return matchWords;
}

console.log("dictionary:", dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// ------------------------------------------------------

/*8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

Examples:

evenNums(8) ➞ [2, 4, 6, 8]
evenNums(4) ➞ [2, 4]
evenNums(2) ➞ [2] Notes:
If there are no even numbers, return an empty array.
Do not include 0.*/

let box = [];

let evenNums = (number) => {
  for (i = 1; i <= number; i++) {
    if ([i] % 2 === 0) {
      box.push([i]);
    }
  }
  return box;
};

console.log(evenNums(5));

/*Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.

i.e. alphaOrder("webdev") ➞ "bdeevw"
*/

function getOrder(string) {
  let stringArr = string.split("");
  let order = stringArr.sort();
  return order.join("");
}

console.log(getOrder("webdef"));
