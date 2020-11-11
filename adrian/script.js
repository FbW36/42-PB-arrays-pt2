//1
const findGreatest = (array, num) => array.filter((el) => el > num);
// console.log(findGreatest([3, 4, 5], 4));

//2
const longestWord = (string) => {
  return string.split(" ").reduce((acc, curr) => {
    if (acc.length < curr.length) {
      acc = curr;
    }
    return acc;
  }, "");
};
// console.log(longestWord("this is a web development course"));

//3
const reverse = (num) => Number(num.toString().split("").reverse().join(""));
// console.log(reverse(34532));

//4
function findVowels(string) {
  let vowels = "aeiouAEIOU";
  return string.split("").reduce((acc, curr) => {
    if (vowels.includes(curr)) acc++;
    return acc;
  }, 0);
}
// console.log(findVowels("this is a string"));

//5
function missingNums(array) {
  let filtered = array.filter((_, i) => !array.includes(i + 1));
  return filtered[0] - 1 || 10;
}
// console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6
const sumOfCubes = (array) =>
  array.reduce((acc, curr) => acc + Math.pow(curr, 3));
// console.log(sumOfCubes([1, 5, 9]));

//7
const dictionary = (query, array) =>
  array.filter((word) => word.includes(query));
// console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));

//8
function evenNums(num) {
  let evens = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) evens.push(i);
  }
  return evens;
}
// console.log(evenNums(8));

//Bonus
const sortAlpha = (string) => string.split("").sort().join("");
console.log(sortAlpha("webdev"));
