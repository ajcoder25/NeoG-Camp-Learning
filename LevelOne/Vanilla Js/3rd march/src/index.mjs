console.log("Program 1");
const nums = [12, 5, 20, 7, 8, 15, 30];

let filterOutEven = nums.filter((num) => num % 2 === 0);
console.log(filterOutEven);

console.log("Program 2");

const words = ["kiwi", "mango", "apple", "orange", "banana"];

let greterthan5 = words.filter((word) => word.length > 5);

console.log(greterthan5);

console.log("Program 3");

const plannet = ["Sun", "Moon", "Star", "Planet", "Saturn"];

let startwithS = plannet.filter((word) => word.startsWith("S"));

console.log(startwithS);

console.log("Program 4");

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let threeMultiple = threeMultiples.filter((check) => check % 3 !== 0);

console.log(threeMultiple);

console.log("Program 5");

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let numberDivisible = numbs.filter((num) => num % 7 == 0 && num % 3 == 0);
console.log(numberDivisible);

console.log("Program 6");

const fruitwords = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];

const findLowerCase = fruitwords.filter((word) => word === word.toLowerCase());
console.log(findLowerCase);

console.log("Program 7");

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

let findwordA = wordsY.filter(
  (word) => word.includes("a") && word.includes("y")
);
console.log(findwordA);

console.log("Program 8");

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let checkmultiply = numsOnetoTen.filter(
  (num) => num % 2 === 0 || num % 3 === 0
);

console.log(checkmultiply);

console.log("Program 9");

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];

let includeWord = feelingWords.filter(
  (word) => word.includes("a") || word.includes("y")
);

console.log(includeWord);

console.log("Program 10");

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];

let filter = newNums.filter((num) => num >= 20 && num <= 40);

console.log(filter);
