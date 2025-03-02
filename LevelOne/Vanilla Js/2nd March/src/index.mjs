// function greetUser(unsername, callback) {
//   let message = "Good Morning " + unsername;

//   callback(message);
// }

// function logMessage(message) {
//   console.log(message);
// }

// greetUser("Alice", logMessage);

const greetUser = (username, callback) => {
  let message = "Good Morning," + username;
  callback(message);
};

const logMessage = (message) => {
  console.log(message);
};

greetUser("alice", logMessage);

//You have a btn

btn.addEventListener("click", printMessage);
