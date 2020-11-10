//1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
function findGreatest(array, num) {
  for (let item of array) {
    if (item > num) {
      return item;
    }
  }
}
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

//2. For the longest word. Create a function to find the longest word in a given string.
function longestWord(string) {
  let word = "";
  let wordArray = string.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    let individualWord = wordArray[i];
    if (individualWord.length > word.length) {
      word = individualWord;
    }
  }
  return word;
}
console.log(longestWord("this is a web development course"));

//3. Reverse. Create a function to reverse a number.
const reverse = (num) => {
  num1 = num.toString().split("").reverse().join("");
  return num1 * 1;
};
console.log(reverse(34532));

//4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
function findVowels(num) {
  let vowels = num.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}
console.log(findVowels("this is a string"));

//5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
const missingNumber = (array) => {
  let number = [];
  for (let i = 1; i <= 10; i++) {
    if (!array.includes(i)) {
      number.push(i);
    }
  }
  return number;
};

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(array) {
  const newArray = array.map((item) => Math.pow(item, 3));
  const sum = newArray.reduce(function (box, item) {
    box += item;
    return box;
  }, 0);
  return sum;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

//7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
function dictionary(str, array) {
  for (let item of array) {
    if (str === item.slice(0, str.length)) {
      return item;
    } else {
      return (item = []);
    }
  }
}
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

//8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.
const evenNumber = (num) => {
  let allEven = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      allEven.push(i);
    }
  }
  return allEven;
};
console.log(evenNumber(8));
console.log(evenNumber(4));
console.log(evenNumber(2));

//Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
function alphaOrder(string) {
  const newArray = string.split("");
  newArray.sort();
  return newArray.join("");
}
console.log(alphaOrder("webdev"));
