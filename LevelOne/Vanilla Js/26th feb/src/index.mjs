console.log("Program 1");

const averageNumber = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};

console.log(averageNumber([5, 10, 15]));

console.log("Program 2");

const reverseString = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
};

console.log(reverseString("world"));

console.log("Program 3");

const longestWord = (word) => {
  let longestWord = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i] > longestWord) {
      longestWord = word[i];
    }
  }
  return longestWord;
};

console.log(longestWord(["apple", "banana", "grapefruit"]));

console.log("Program 4");
const calculatecharacter = (word) => {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum++;
  }
  return sum;
};

console.log(calculatecharacter("hello"));
