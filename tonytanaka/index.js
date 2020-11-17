// 1 The Greater Numbers
/*result = []
function findGreatest (a, b) {
for (i=0; i<=a.length; i++) {
    if (a[i] > b) {
        result.push(a[i])
        }
    }
    return result
}
*/
function findGreatest (a, b) {
    const result = a
        .filter(a => a > b)
    return result
}
console.log(findGreatest([3, 4, 5], 4))
console.log(findGreatest([10, 20, 30], 12))
console.log(findGreatest([0, 10, 3], 4))

// 2 For the longest word
function longestWord (str) {
    b = ''
    const strArr = str.split(' ')
        .map((a) => {
            if (a.length > b.length) {
                b = a
                }
        });
    return b
}
console.log(longestWord("this is a web development course"))
console.log(longestWord('These are the hardest subjects so far'))

// 3 Reverse
function reverse (num) {
    return numToStr = num.toString().split('').reverse().join('')
}
console.log(reverse(23543))

// 4 AEIOU
cont = 0
function findVowels(str){
    return str
    .split('')
    .filter((eachVowel) => 
        eachVowel === 'a' ||
        eachVowel === 'e' ||
        eachVowel === 'i' ||
        eachVowel === 'o' ||
        eachVowel === 'u'
    ).length;
    }

console.log(findVowels("this is a string"))
console.log(findVowels('Tony Hideki Tanaka'))

// 5
const missingNums = (arr) => {
    return arr
    .sort((a, b) => a - b)
    .reduce((prev, curr) => {
        if(prev === curr) {
            prev++;
        }
        return prev;
    },1);
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])) // 5
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8])) // 10
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9])) // 7

// 6
 const sumOfCubes = (arr) => {
     if (arr.length === 0) {
         return 0
     } else {
     return arr
     .map ((elem) => elem ** 3)
     .reduce((acc, curr) => acc + curr);
 }
}
 console.log(sumOfCubes([1, 5, 9])) // 855
 console.log(sumOfCubes([2])) // 8
 console.log(sumOfCubes([]))

// 7
const dictionary = (str, arr) => {
    return arr.filter((word) => word.includes(str))
}
console.log(dictionary("bu", ["button", "breakfast", "border"])) // ['button']
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])) // [ 'triplet', 'tries', 'trip' ]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])) // []

// 8 
const evenNums = (num) => {
    result = []
    for (i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }
    return result
}
console.log(evenNums(8)) // [ 2, 4, 6, 8 ]
console.log(evenNums(4)) // [ 2, 4 ]
console.log(evenNums(2)) // [ 2 ]

// Bonus
const alphaOrder = (str) => {
    return str.split('').sort().join('')
}
console.log(alphaOrder("webdev")) // bdeevw
