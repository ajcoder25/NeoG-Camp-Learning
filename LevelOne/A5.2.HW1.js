console.log('A5.2_HW1.js')
console.log('---- ---- ----')

console.log('Exercise 1')

console.log('---- ---- ----')

console.log('1.1')

for(let i = 20; i >= 1; i--){
  console.log(i)
}

console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')

for(let i = 10; i >=1; i--){
  let result = 6 * i

  let table6 = ' 6 ' + ' * ' + i + ' = ' + result

  console.log(table6)
}

console.log('---- ---- ----')
console.log('1.3')
console.log('---- ---- ----')

for(let i = 100; i >=1; i -= 10){
  console.log(i)
}

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')

console.log('---- ---- ----')

function printNumber (n){
  for(let i = 1; i <= n;  i++){
    console.log(i)
  }
  
}

printNumber(8)

console.log('---- ---- ----')
console.log('2.2')
console.log('---- ---- ----')

function checkevenNumber(n){
  for(let i = 1; i <=n; i++){
    if(i % 2 ===0){
      console.log(i)
    }
  }
}

checkevenNumber(15)

console.log('---- ---- ----')
console.log('2.3')
console.log('---- ---- ----')

function divisibleby510(n){

  for(let i =1; i<=n; i++){
    if(i % 5 === 0 && i % 10 === 0){
      console.log(i)
    }
  }
  
}

divisibleby510(50)