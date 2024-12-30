console.log('A5.4_HW_2')
console.log('---- ---- ----')
console.log('1.1')

let sum = 0


function averageOfNumberuptoN(n){
  for(let i = 1; i <= n; i++){
   
   sum = sum + i
      
  }

   let average = sum /n
    return average

  

 
}

console.log('The average of numbers from 1 to 10 : ',averageOfNumberuptoN(10))

console.log('---- ---- ----')
console.log('1.2')

let sumNumber = 0

function sumOfNumbersGreaterThanSixUpTON(n){
  for(let i = 1; i <=n; i++){
    
   if(i > 6){

     sumNumber = sumNumber + i
      
    }
  
  }
return sumNumber
}

console.log(
  'The sum of numbers is: ',sumOfNumbersGreaterThanSixUpTON(12))

console.log('---- ---- ----')
console.log('1.3')
let addthedivisibleby8 = 0
function sumDivisibleByEightUpToN(n){
  for(let i = 10; i <= n; i++){

    if(i % 8 === 0){

      addthedivisibleby8 = addthedivisibleby8 + i

      
    }
  }
  return addthedivisibleby8
}

console.log(sumDivisibleByEightUpToN(40))

console.log('---- ---- ----')
console.log('1.4')

let storeEvenNumber = 0
let storeOddNumber = 0
function sumEvenAndOddUpToN(n){
  for(let i = 1; i <= n; i++){

     if(i % 2 === 0 ){

       storeEvenNumber = storeEvenNumber + i
       
     }
    else {
      storeOddNumber = storeOddNumber + i
      
    }
       
    
  }

  console.log('Sum of Even Numbers: ', storeEvenNumber)
  console.log('Sum of Odd Numbers: ', storeOddNumber)
}


sumEvenAndOddUpToN(30)