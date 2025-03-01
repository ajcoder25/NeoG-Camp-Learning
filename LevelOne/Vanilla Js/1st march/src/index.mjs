const getUserName = (firstName, callback) => {
  let message = `Hello, ${firstName}!`;

  callback(message);
};

const logMessage = (message) => console.log(message);

getUserName("Ajay", logMessage);

console.log("Program 2");

const calculateAge = (userBirth, callback) => {
  let currentYear = new Date().getFullYear();

  let checkBirth = currentYear - userBirth;

  callback(checkBirth);
};

const checkBirth = (age) => {
  console.log(`You are ${age} year old`);
};

calculateAge(1997, checkBirth);

console.log("Program 3");

const generateUsername = (firstName, callback) => {
  let username = "You username is " + "_" + firstName;
  callback(username);
};

const message = (message) => {
  console.log(message);
};

generateUsername("Ajay", message);

console.log("Program 4");

const checkTemperature = (celsius, callback) => {
  let fahren = (celsius * 9) / 5 + 32;

  return callback(fahren);
};

const displayTemperatureMessage = (temperature) => {
  if (temperature > 86) {
    return "Hot";
  } else if (temperature >= 50 && temperature <= 86) {
    return "Moderate";
  } else {
    return "Cold";
  }
};

console.log(checkTemperature(25, displayTemperatureMessage));

console.log("Program 5");

const processArray = (numbers, callback) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const squareNumber = (num) => num * num;

const numbersArray = [1, 2, 3, 4, 5];

processArray(numbersArray, squareNumber);

console.log("Program 6");

const processArraycheck = (numbers, callback) => {
  let sum = [];
  for (let i = 0; i < numbers.length; i++) {
    sum.push(callback(numbers[i]));
  }
  console.log(sum);
};

const double = (num) => num * num;
const numbersArray2 = [2, 4, 6, 8, 10];

processArraycheck(numbersArray2, double);
