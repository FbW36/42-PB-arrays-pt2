// # 42-PB-arrays-pt2

// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// i.e.
function findGreatest(a, b) {
  let greater = [];
  for (let num of a) {
    if (num > b) {
      greater.push(num);
    }
  }
  return greater;
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

// **2. For the longest word.**
// Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞  "development"

function longestWord(string) {
  let arraystring = string.split(" ");
  let longWord = "";
  for (let word of arraystring) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

console.log(longestWord("this is a web development course"));

// **3. Reverse.**
// Create a function to reverse a number.

// i.e. reverse(34532) ➞ 23543

function reverse(number) {
  let num = number.toString().split("").reverse().join("");
  return num;
}

console.log(reverse(34532));
// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
function vowels(string) {
  let arraystring = string.split("");
  console.log(arraystring);
  let count = 0;
  for (let letter of arraystring) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log("2==>", vowels("this is a string"));

function findVowels(str) {
  let strArr = str.split("");
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (letter of strArr) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log("3==>", findVowels("this is a string"));

function findVowels(str) {
  let strArr = str.split("");
  let count = 0;
  let vowels = "aeiouAEIOU";

  strArr.map(function (letter) {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return count;
}

console.log("4==>", findVowels("this string"));

function findVowels2(str) {
  let strArr = str.split("");
  let vowels = "aeiouAEIOU";

  strArr.reduce(function (acu, letter) {
    if (vowels.includes(letter)) {
      acu++;
    }
  });
  return acu;
}

console.log("5==>", findVowels("this string"));

function findVowels3(str) {
  let strArr = str.split("");
  let vowels = "aeiouAEIOU";

  return strArr.reduce((acu, letter) => {
    if (vowels.includes(letter)) {
      acu++;
    }
  });
}

console.log("6==>", findVowels("this string"));

// i.e. findVowels("this is a string") ➞ 4

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
function missing(array) {
  let missingNum = [];
  let onetoten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let num of onetoten) {
    if (!array.includes(num)) {
      missingNum.push(num);
    }
  }
  return missingNum;
}

console.log(missing([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missing([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missing([10, 5, 1, 2, 6, 8, 3]));

// Examples:
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function cubes(array) {
  let sum = 0;
  for (let num of array) {
    sum += num * num * num;
  }
  return sum;
}
console.log(cubes([1, 5, 9]));

function cubes2(array) {
  let sum = 0;
  for (let num of array) {
    sum += Math.pow(num, 3);
  }
  return sum;
}
console.log(cubes2([1, 5, 9]));

function cubes3(array) {
  return array.reduce(function (acu, num) {
    acu += Math.pow(num, 3);
    return acu;
  });
}
console.log("3==>", cubes3([1, 5, 9]));

// Examples:
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
function dictionary(letters, array) {
  let filtered = [];
  for (string of array) {
    if (string.includes(letters)) {
      filtered.push(string);
    }
  }
  return filtered;
}
console.log("1==>", dictionary("bu", ["button", "breakfast", "border"]));

function dictionary2(letters, array) {
  return array.reduce((acu, cur) => {
    if (cur.slice(0, letters.length) === letters) {
      acu.push(cur);
    }
    return acu;
  }, []);
}
console.log("2==>", dictionary2("bu", ["button", "breakfast", "border"]));

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.
function evenNums(a) {
  let array = [];
  for (let i = 1; i < a; i++) {
    array.push(i);
  }
  return array.reduce((acu, cur) => {
    if (cur % 2 === 0) {
      acu.push(cur);
    }
    return acu;
  }, []);
}

console.log(evenNums(20));

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:**
// * If there are no even numbers, return an empty array.
// * Do not include 0.

// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw"

function alpha(string) {
  let array = string.split("").sort().join("");
  return array;
}

console.log(alpha("webdev"));
