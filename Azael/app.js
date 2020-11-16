// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// i.e.

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

let findGreatest = (array, number) => {
  let filteredArray = array.filter((num) => num > number);
  return filteredArray.join(", ");
};
console.log("findGreatest() :>> ", findGreatest([3, 4, 5], 4));
console.log("findGreatest() :>> ", findGreatest([10, 20, 30], 12));
console.log("findGreatest() :>> ", findGreatest([0, 10, 3], 4));

// **2. For the longest word.**
// Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞  "development"

const longestWord = (string) => {
  // reduce is reducing the array to a single value
  return string.split(" ").reduce((returnValue, currentValue) => {
    if (returnValue.length < currentValue.length) {
      returnValue = currentValue;
    }
    return returnValue;
  }, "");
};
// I cheated haha

console.log(
  "longestWord :>> ",
  longestWord("this is a web development course")
);

// **3. Reverse.**
// Create a function to reverse a number.

// i.e. reverse(34532) ➞ 23543
const reverse = (number) => {
  return number.toString().split("").reverse().join("");
};
console.log("reverse :>> ", reverse(34532));

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
const vowels = (string) => {
  return string
    .split("")
    .filter(
      (elem) =>
        elem === "a" ||
        elem === "e" ||
        elem === "i" ||
        elem === "o" ||
        elem === "u"
    ).length;
};
console.log("vowels :>> ", vowels("this is a string")); //vowels :>>  4
// i.e. findVowels("this is a string") ➞ 4

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

const missingNums = (array) => {
  return array
    .sort((a, b) => a - b)
    .reduce((returnValue, currentValue) => {
      if (returnValue === currentValue) {
        returnValue++;
      }
      return returnValue;
    }, 1);
};

console.log("missingNums :>> ", missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log("missingNums :>> ", missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log("missingNums :>> ", missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

const sumOfCubes = (numbers) => {
  if (numbers.length == 0) {
    return 0;
  } else {
    let cubes = numbers
      .map((num) => num ** 3)
      .reduce((returnValue, currentValue) => returnValue + currentValue);
    return cubes;
  }
};
console.log("sumOfCubes :>> ", sumOfCubes([1, 5, 9])); //sumOfCubes :>>  855
console.log("sumOfCubes :>> ", sumOfCubes([2])); //sumOfCubes :>>8
console.log("sumOfCubes :>> ", sumOfCubes([])); //sumOfCubes :>>0

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

const dictionary = (string, array) => {
  let filterArray = array.filter((word) => word.includes(string));
  return filterArray;
};

console.log(
  "dictionary :>> ",
  dictionary("bu", ["button", "breakfast", "border"]) //dictionary :>>  [ 'button' ]
);

console.log(
  "dictionary :>> ",
  dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) //dictionary :>>  [ 'triplet', 'tries', 'trip' ]
);

console.log(
  "dictionary :>> ",
  dictionary("beau", ["pastry", "delicious", "name", "boring"]) //dictionary :>>  []
);

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:**
// * If there are no even numbers, return an empty array.
// * Do not include 0.

const evenNums = (number) => {
  let boxEvens = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      boxEvens.push(i);
    }
  }
  return boxEvens;
};
console.log("evenNums(8) :>> ", evenNums(8)); //evenNums(8) :>>  [ 2, 4, 6, 8 ]
console.log("evenNums(4) :>> ", evenNums(4)); //evenNums(4) :>>  [ 2, 4 ]
console.log("evenNums(2) :>> ", evenNums(2)); //evenNums(2) :>>  [ 2 ]

// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

const sortAlpha = (string) => string.split("").sort().join("");
console.log(sortAlpha("webdev"));
// i.e. alphaOrder("webdev") ➞ "bdeevw"
