console.log('A5.3_HW1')
console.log('---- ---- ----')

console.log('Exercise 1')
console.log('---- ---- ----')

console.log('1.1')


let storingvalue = ''
function sepratewithhyphen(n,m){
  for(let i = 1; i<=n; i++){

    storingvalue = storingvalue + i
    if(i % m === 0){
     storingvalue = storingvalue + '-'
    }
  }

  console.log(storingvalue)
}

sepratewithhyphen(9,4)

console.log('---- ---- ----')
console.log('1.2')

let divisibleby = ''
let  notdivisible = ''

function checkdivisible(n,m){

  for(let i = 1; i<=n; i++){
    if(i % m === 0){
      divisibleby = divisibleby + ' ' +  i
    }
    else{
      notdivisible = notdivisible + ' ' + i
    }
   
  }

  console.log('Divisible by 6: ', divisibleby)
  console.log('Not divisible by 6: ', notdivisible)
  
}


checkdivisible(20,6)

console.log('--- ---- ----')
console.log('1.3')

function printDivisibleNumbersBetween(p,n,m){
  if(p < n && n < m){

       for(let i = n; i<=m; i++){

         if(i % p ===0){
           console.log(i)
         }
         
       }
      }
}


printDivisibleNumbersBetween(3,5,15)