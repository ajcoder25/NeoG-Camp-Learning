let array = [5, 12, 7, 25, 18, 3];

console.log("program 1");

function print(array) {
  return array;
}

console.log(print(array));

console.log("Program 2");

function add(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 10);
  }

  return newArray;
}

console.log(add(array));

console.log("Program 3");

function oddNumber(array) {
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i] + 1);
    } else {
      odd.push(array[i]);
    }
  }

  return odd;
}

console.log(oddNumber(array));

console.log("Program 4");

function divisibleBy2(array) {
  let divisible = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      divisible.push(array[i]);
    }
  }

  return divisible;
}

console.log(divisibleBy2(array));

console.log("Program 5");

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sum(array));

console.log("Program 6");

function checkNumber(array) {
  let oddNumber = [];
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumber.push(array[i]);
    } else {
      oddNumber.push(array[i]);
    }
  }
  console.log("Odd Number:", oddNumber);
  console.log("Even Number:", evenNumber);
}

checkNumber(array);
