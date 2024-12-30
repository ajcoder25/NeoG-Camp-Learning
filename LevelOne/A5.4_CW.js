console.log('A5.4_CW')
console.log('---- ---- ----')

console.log('1.1')

function sumUpToN(n){

  let sum = 0
  for(let i = 1; i<=n; i++){
    sum = sum + i
  }
 return sum
}

console.log(sumUpToN(5))

//Dry run the code 
// sum 0; i = 1; sum = 0 + 1 => 1
// sum 1; i = 2; sum = 1 + 2 => 3
// sum 3; i = 3; sum = 3 + 3 => 6
// sum 6; i = 4; sum = 6 + 4 => 10
// sum 10; i = 5; sum = 10 + 5 => 15

console.log('---- ---- ----')

console.log('1.2')

let sumofoddNumber = 0

function sumOfOddNumbersUpToN(n){
  for(let i = 1; i <=n; i++){

       if( i % 2 !== 0){

          sumofoddNumber = sumofoddNumber + i
          
       }
  }

   return sumofoddNumber
}

console.log(sumOfOddNumbersUpToN(7))



// dry run 
// i = 1, true, sum = 0 + 1 => 1
// i = 2, false exit the code 
// i = 3  , true , sum = 1 + 3 ==> 4
// i = 4 , false 
// i = 5, true , sum = 4 + 5 ==> 9
// i = 6, false
// i = 7, true , sum = 9 + 7 ===> 16






console.log('---- ---- ----')
console.log('Exercise 1.3')

let sumofDivisibleby3 = 0
let sumofDivisibleby7 = 0

function sumDivisibleByThreeAndSevenUpToN(n){

  for(let i = 1; i <= n; i++){

    if(i % 3 === 0 ){
      sumofDivisibleby3 = sumofDivisibleby3 + i
    }
     if(i % 7 === 0){
      sumofDivisibleby7 = sumofDivisibleby7 + i
    }

    
  }


  console.log('Sum of divisible by 3: ', sumofDivisibleby3)
  console.log('Sum of divisible by 7: ', sumofDivisibleby7)
}


sumDivisibleByThreeAndSevenUpToN(21)

console.log('---- ----- ----')
console.log('1.4')

let result = 1
function factorial(n){
  for(let i = 1; i <=n; i++){
    result = result * i
  }

  return result
}

console.log(factorial(5))