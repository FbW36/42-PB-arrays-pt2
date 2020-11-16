// 1 find the greatest number
function greterNumbers(arr, num) {
  let gtn = [];
  for (item of arr) {
    if (item > num) {
      gtn.push(item);
    }
  }
  return gtn.join();
}

const result1 = greterNumbers([3, 4, 5, 6, 7], 4);
const result2 = greterNumbers([10, 20, 30], 12);
const result3 = greterNumbers([0, 10, 3], 4);

console.log("result1=", result1);
console.log("result2=", result2);
console.log("result3=", result3);

//-----------
// 2 Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course")

let givenWord = "this is a web development course";
let separet = givenWord.split(" ");
//console.log(separet);

function longestWord(spt) {
  lgw = "";
  for (item of separet) {
    if (item.length > lgw.length) {
      lgw = item;
    }
  }
  return lgw;
}
console.log("lgw=", longestWord(separet));

// 3 reverse(34532) ➞ 23543
let givenNum = 34532;
let newNum = givenNum.toString().split("").reverse().join("");
console.log("reverseNumber=", newNum);

// 4: findVowels("this is a string") ➞ 4
let givenStr = "This is a String";
let splt = givenStr.toLowerCase().split("");
// console.log(splt);
let Vowels = ["a", "e", "i", "o", "u"];
function findVowels(string) {
  let result = 0;
  for (item of splt) {
    for (element of Vowels) {
      if (item === element) {
        result += 1;
      }
    }
  }
  return result;
}

console.log("findVowels=", findVowels(givenStr));

// 5
let givingNums = [1, 2, 3, 4, 6, 7, 8, 9, 10];

function missingNums(givNum) {
  missingresult = [];
  for (i = 1; i <= 10; i++) {
    if (!givNum.includes(i)) {
      missingresult.push(i);
    }
  }
  return missingresult.join();
}

console.log("missingNums=", missingNums(givingNums));

// 6 . sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

let theNumbers = [1, 5, 9];
let theNumbersMap = theNumbers.map((item) => Math.pow(item, 3));
console.log(theNumbersMap); // [1,125,729]

function theFunc(j, k, l) {
  return j + k + l;
}

console.log("sum =", theFunc(...theNumbersMap)); // 855

// 6 another solution
const theNumArr = [1, 5, 9];

const sumOfcubes = theNumArr.reduce(
  (total, values) => total + Math.pow(values, 3)
);
console.log("sumOfcubes =", sumOfcubes);

// 7 ("tri", ["triplet", "piano",, "trip"])

function dic(intStr, words) {
  words.filter((item) => {
    return item.includes(intStr);
  });
}
console.log(dic("tri", ["triplet", "piano", "trip"]));

// 7 another solution
const theGivenArr = ["triplet", "piano", "trip"];

const theNewArr = theGivenArr.filter((items) => {
  return items.includes("tri");
});

console.log(theNewArr); // ["triplet", trip"]

// 8 : find all the even numbers 1 to 10

function evenNum(num) {
  let theEvens = [];
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) theEvens.push(i);
  }
  return theEvens;
}

console.log(evenNum(10)); // [2,4,6,8,10]

// Bonus i.e. alphaOrder("webdev") ➞ "bdeevw"

let givenAlpha = "webdev";
let alphaOrder = [...givenAlpha];
console.log(alphaOrder.sort().join("")); //bdeevw
