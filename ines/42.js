//1
const greaterNumber = (array, rangeNumber) => {
    const filteredNumber = array.filter( number => number > rangeNumber)
    return filteredNumber;
}

console.log("1==>",greaterNumber([10, 20, 30], 12));

//2
function longestWord (string){
    // let string= "this is a web development course";
    const stringArray = string.split(" ");
    let biggest = stringArray.reduce((acc, curr)=>{
        if(curr.length > acc.length){
            acc = curr;
        }
        return acc;
    }, "")
    return  biggest;
}
console.log("2==>",longestWord("this is a web development course"));

//3
function reverseNumber(number) {
    const reversed = number.toString().split("").reverse().join("") * 1;
    return reversed;
  }
  console.log("3==>", reverseNumber(34532));
  
//4
  let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  function findVowels(string) {
    stringArray = string.split("");
    return stringArray.reduce(function (acc, curr) {
      if (
        curr === "a" ||
        curr === "e" ||
        curr === "i" ||
        curr === "o" ||
        curr === "u"
      ) {
        acc++;
      }
      return acc;
    }, 0);
  }
  console.log("4==>", findVowels("this is a string"));


//5  
function missingNums (arrayNum) {
  reduced = arrayNum.reduce( function (acc, curr) {
    acc += curr ;
    return acc;
  }, 0)
  return 55 - reduced;
}

console.log("5==>",missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
  
//6
  function sumOfCubes(numbers) {
    const cubes = numbers.map((num) => Math.pow(num, 3));
    return cubes.reduce(function (acc, curr) {
      acc += curr;
      return acc;
    }, 0);
  }
  console.log("6==>", sumOfCubes([1, 5, 9]));
  
  //7
  function dictionary (letters, array){
   return result = array.reduce((acc, curr)=> {
    if(curr.startsWith(letters)){
      acc.push(curr);
    }
    return acc;
   },[]);
  }

  console.log("7==>",dictionary("bu", ["button", "breakfast", "border"]));

  //8
  function evenNums(num){
    const nums = []
    for(i=1; i<=num; i++){
      nums.push(i)
    }
    const filtered = nums.filter(num => num%2===0);
    return filtered;
  }
  console.log(evenNums(10));

  //Bonus
  const alphaOrder = (string) =>{
    const stringArray = string.split("");
    const sorted = stringArray.sort();
    const sortedString = sorted.join("");
    return sortedString;
  }

  console.log(alphaOrder("webdev") );
