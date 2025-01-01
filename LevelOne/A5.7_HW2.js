console.log('A5.7_HW2')
console.log('---- ---- ----')
console.log('1.1')

const numbersArray = [33,57,24,49,52,66]

function printOriginalArray(orginalArray){
 return orginalArray
}

console.log('Orginal Array:', printOriginalArray(numbersArray))

console.log('---- ---- ----')
console.log('1.2')

let divideby3 = []
function divideNumberByThree(array){

  for(let i = 0; i < array.length; i++){

    divideby3.push(array[i]/3)
  
  }
  return divideby3
}

console.log('Array with Numbers Divided by 3: ', divideNumberByThree(numbersArray))

console.log('---- ---- ----')
console.log('1.3')


function findNumInArray(array,searchnum){

  for(let i = 0; i< array.length; i++){

      if(array[i] === searchnum){
         return true
      }
  }

}

console.log('Num: 24', findNumInArray(numbersArray, 24))

console.log('---- ---- ----')
console.log('1.4')




function findLargestNumberDivisibleBy5(array){

 let largestNumber = array[0]

  for(let i = 0; i < array.length; i++){

    if(array[i] > largestNumber && array[i] % 5 ===0){

     return largestNumber = array[i]
        
      
      
    }
    else{
        return 0
    }
      
    }
 }


console.log('Largest number Divisible by 5: ', findLargestNumberDivisibleBy5(numbersArray))
