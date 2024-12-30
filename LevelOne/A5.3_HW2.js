console.log('A5.3_HW2.js')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('---- ---- ----')

console.log('1.1')

let output = ''
function takes2Number(n,m){
  for(let i = 1; i <= n; i++ ){

    output = output + i

    if(i % m === 0  && i !== 20){

      output = output + '%'
    }
  }

  console.log(output)
}


takes2Number(20,5)


console.log('---- ---- ----')
console.log('1.2')


let divisiblebym = ''
let notdivisiblebym = ''
function checking(n,m){
  for(let i = 10; i <= n; i++){

   
    
    if(i % m === 0){
       divisiblebym = divisiblebym+ ' ' + i
    }
   else{
    notdivisiblebym = notdivisiblebym + ' '+ i
   }
    
  }
  console.log('Divisible by 5: ', divisiblebym )
  console.log('Not divisible by 5: ', notdivisiblebym)
}

checking(30,5)

console.log('---- ---- ----')
console.log('1.3')

function printEvenNumbersBetween(p,n,m){

  if(p > n && n < m){

      //print
      for(let i = p; i<=m; i++){
        if(i % 2 === 0){
          console.log(i)
        }
      }
  }
}

printEvenNumbersBetween(8,5,15)