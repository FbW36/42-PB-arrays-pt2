let log = console.log;
//  Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument
const greaterThanA = (arr, num) =>
  arr.filter((item) => {
    if (item > num) {
      return item;
    }
  });
log(greaterThanA([3, 4, 5, 77, 3, 81], 4));

// Create a function to find the longest word in a given string
const longestWord = (str) => {
  let wordContainer = "";
  const strToArr = str.split(" ");
  strToArr.filter((word) => {
    if (wordContainer.length < word.length) {
      wordContainer = word;
    }
  });
  return wordContainer;
};
let theWord = longestWord("Are You Experienced");
log("longestWord -->", theWord);

// Create a function to reverse a number
const reverse = (number) => {
  return number.toString().split("").reverse().join("");
};
log(reverse(1984));

// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string
const countVowels = (str) => {
  let count = 0;
  const strToArr = str.toLowerCase().split("");
  strToArr.filter((letter) => {
    switch (letter) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return count++;
    }
  });
  return count;
};
log("countVowels -->", countVowels("is it tomorrow or just the end of time"));

// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer
const missingNums = arr => {
  result = []
  for(i=1;i<11;i++) {
   if(!arr.includes(i)) {
    result.push(i)
   }
  }
  return result
}
log('missing numbers -->', missingNums([7, 2, 3, 5, 9, 1, 4, 8]))

// Create a function that takes in an array of numbers and returns the sum of its cubes
function sumOfCubes(arr) {
  let sum = 0;
  arr.map((item) => {
    sum += Math.pow(item, 3);
  });
  return sum;
}
log(sumOfCubes([1, 5, 9]));

// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string
const dictionary = (str, arr) => {
  const box = arr.filter((item) => str === item.slice(0, str.length));
  return box;
};
log("dictionary -->", dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));

// Create a function that finds all even numbers from 1 to the given number
const evenNums = (num) => {
  const box = [];
  for (i = 1; i <= num; i++) {
    box.push(i);
  }
  return box.filter((item) => item % 2 === 0);
};
log("even numbers -->", evenNums(10));

// Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string
const alphaOrder = (str) => {
  return str.split("").sort().join("");
};
log(alphaOrder("webdev"));
