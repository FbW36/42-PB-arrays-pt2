// ** 1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number.The function should return the elements of the array which are greater than the second argument.

function findGreatest(arr, num) {
  let greater = [];
  arr.map(function (item) {
    if (item > num) {
      greater.push(item);
    }
  });
  return greater.join(", ");
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// ** 2. For the longest word.**
// Create a function to find the longest word in a given string.

function longestWord(string) {
  const stringArr = string.split(" ");
  let word = "";
  stringArr.map(function (item) {
    if (item.length > word.length) {
      word = item;
    }
  });
  return word;
}

console.log(longestWord("this is a web development course"));

// ** 3. Reverse.**
// Create a function to reverse a number.

function reverse(num) {
  let numStr = num.toString();
  const numArr = numStr.split("");
  const reverseNum = numArr.reduce(function (box, item) {
    box.unshift(item);
    return box;
  }, []);
  return reverseNum.join("") * 1;
}

console.log(reverse(34532));

// ** 4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels(i.e.in English, "a, e, i, o, u") in the string.

function findVowels(str) {
  const strArr = str.split("");
  let vowelCount = 0;
  let vowels = "aeiouAEIOU";
  strArr.map((item) => {
    if (vowels.includes(item)) {
      vowelCount++;
    }
  });
  return vowelCount;
}

console.log(findVowels("this is a string"));

// ** 5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10(excluding one) and returns the missing integer.

function missingNums(arr) {
  let missing = [];
  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// ** 6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
  const newArr = arr.map((item) => Math.pow(item, 3));
  const sum = newArr.reduce(function (box, item) {
    box += item;
    // console.log(box);
    return box;
  }, 0);
  return sum;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

// ** 7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

function dictionary(str, arr) {
  const newArr = [];
  arr.map((item) => {
    if (item.slice(0, str.length) === str) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// ** 8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.
function evenNums(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

// * If there are no even numbers, return an empty array.
// * Do not include 0.

// Create a function to sort a string into alphabetical order. ** NB:** assume numbers, symbols and punctuation are not included in the string.

function alphaOrder(str) {
  const strArr = str.split("");
  strArr.sort();
  return strArr.join("");
}
console.log(alphaOrder("webdev"));
