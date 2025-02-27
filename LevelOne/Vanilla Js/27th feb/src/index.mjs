console.log("Program 1");

const addElement = (arr, newelement) => [...arr, newelement];

console.log(addElement(["apple", "orange"], "banana"));

console.log("Program 2");

const addElement2 = (arr, spread) => [...arr, spread];

console.log(addElement2([10, 20], 30));

console.log("Program 3");

const mergeOperator = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeOperator([10, 20], [30, 40, 50]));

console.log("Program 4");
const mergeName = (name1, name2) => [...name1, ...name2];

console.log(mergeName(["Alice", "Bob"], ["John", "Mac", "Maze"]));

console.log("Program 5");

const copyObj = (firstName, key, value) => ({ ...firstName, [key]: value });

console.log(copyObj({ firstName: "Alice", age: 20 }, "lastName", "Johnson"));

console.log("Program 6");

const copyEmployeeObject = (employeeId, key, value) => ({
  ...employeeId,
  [key]: value,
});

console.log(
  copyEmployeeObject(
    { employeeId: 243, name: "Bob", age: 20 },
    "department",
    "IT department"
  )
);

console.log("Program 7");

const mergeObjects = (x, y) => ({ ...x, ...y });

console.log(mergeObjects({ x: "hello" }, { y: "world" })); // Output: { x: "hello", y: "world" }

console.log("Program 8");

let modifyObjectProperties = (name, age) => ({ ...name, ...age });

console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 }));

console.log(
  modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" })
);

console.log("Program 9");

const mergeObject = (first, second) => ({ ...first, ...second });
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 }));

console.log("Program 10");

const mergeThreeArrays = (first, second, third) => [
  ...first,
  ...second,
  ...third,
];
console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

console.log("Program 11");

let mergeThreeArray = (first, second, third) => [...first, ...second, ...third];
console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));
