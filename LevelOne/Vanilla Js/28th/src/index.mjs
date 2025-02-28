console.log("Program 1");

const displayWeather = (city, degree) => {
  return `The weather in ${city} is ${degree} degree Celsius`;
};

console.log(displayWeather("New York", 20));

console.log("Program 2");

const formatCurrency = (dollar, currency) => {
  return `You have ${dollar} ${currency}`;
};

console.log(formatCurrency(50.5, "USD"));
console.log(formatCurrency(100, "EUR"));

console.log("Program 3");

const displayBookSummary = (title, author, genre) => {
  return `The book ${title} written by ${author} belongs to the ${genre}`;
};

console.log(
  displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction")
);

console.log("Program 4");

const displayMovieInfo = (title, release, director) => {
  return `The movie ${title} was released in ${release} and directed by ${director}`;
};

console.log(displayMovieInfo("To Kill a Mockingbird", "Harper Lee", "Fiction"));

console.log("program 5");

const constructEmail = (email, subject) => {
  return `To: ${email}
            subject:${subject}
            Dear ${email},
            `;
};

console.log(constructEmail("alice@example.com", "Meeting Reminder"));

console.log("Program 6");

const assessGrade = (mark) => {
  return mark >= 60 ? "You are passing" : "You are failing";
};

console.log(assessGrade(75));
console.log(assessGrade(60));
console.log(assessGrade(45));

console.log("Program 7");

const showMessage = (name, total) => {
  return "You have " + total + " " + name + (total > 1 ? "s" : "");
};

console.log(showMessage("bangle", 10));
console.log(showMessage("lipstick", 1));

console.log("Program 8");

const assessMarks = (marks, grade) => {
  return marks > 60 && grade === "A" ? "You are passing" : "You are failing";
};

console.log(assessMarks(95, "A"));
console.log(assessMarks(62, "C"));
console.log(assessMarks(45, "D"));

console.log("Program 9");

const showMsg = (bangle, lipstick) => {
  return bangle > 10 && lipstick > 5
    ? "You have a good Collection"
    : "You need to update your collection";
};

console.log(showMsg(11, 6));
console.log(showMsg(5, 1));
console.log(showMsg(12, 4));

console.log("Program 10");

const shareStationeryMessage = (pencil, erasers) => {
  return pencil > 10 && erasers > 5
    ? "Please share stationery with friends."
    : "Please ask your friends for stationery";
};

console.log(shareStationeryMessage(12, 8));
console.log(shareStationeryMessage(7, 15));
console.log(shareStationeryMessage(5, 3));
