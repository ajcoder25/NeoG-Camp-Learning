// console.log("A5.2_HW2");
// console.log("---- ---- ----");
// console.log("Exercise 1");
// console.log("---- ---- ----");
// console.log("1.1");
// console.log("---- ---- ----");

// for (let i = 30; i >= 11; i--) {
//   console.log(i);
// }

// console.log("---- ---- ----");
// console.log("1.2");
// console.log("---- ---- ----");

// for (let i = 15; i >= 1; i--) {
//   let multiply = 9 * i;

//   let table9 = " 9 " + " * " + i + " = " + multiply;

//   console.log(table9)
// }

// console.log('---- ---- ----')
// console.log('1.3')
// console.log('---- ---- ----')


// for(let i = 50; i >= 1; i -=5){
//   console.log(i)
// }

// console.log('---- ---- ----')
// console.log('Exercise 2')
// console.log('---- ---- ----')

// console.log('2.1')
// console.log('---- ---- ----')

// function printNumber(n){
//   for(let i = 1; i<=n; i++){

//     if(i % 8 ===0 ){
//       console.log(i)
//     }
//   }
// }

// printNumber(30)

// console.log('---- ---- ----')
// console.log('2.2')
// console.log('---- ---- ----')

// function oddNumber (n){
//   for(let i = 5; i<= n; i++){
//     if(i % 2 !== 0){
//       console.log(i)
//     }
//   }
// }

// oddNumber(15)


// console.log('---- ---- ----')
// console.log('2.3')
// console.log('---- ---- ----')


// function divisibleby57(n){
//   for(let i = 1; i <= n; i++){
//     if(i % 5 == 0 &&  i % 7 == 0){
//       console.log(i)
//     }
//   }
// }

// divisibleby57(50)


let sum = 0;
function sumUpToN(n) {

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumUpToN(5))

