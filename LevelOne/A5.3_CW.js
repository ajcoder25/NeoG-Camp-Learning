console.log('A5.3_CW')
console.log('---- ---- ----')
console.log('1.1')


let output = ''
function number(n,m){
  
  for(let i = 1; i <= n; i++){

    output = output + i
    
    if(i % m === 0 && i !== n){
      output = output + '#'
    }
    
  }
  console.log(output)
}


number(9,3)

console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')

function checkdivisble(n,m){

  let divisble3 = ''
  let notdivisble3 = ''
  for(let i = 1; i<=n; i++){

    if(i % m === 0 ){
      divisble3 = divisble3 + ' ' + i
      
     
    }

    else{

      notdivisble3 = notdivisble3 + ' ' + i
       
    }

    
    }
    console.log('Divisble by 3: ', divisble3)
    console.log('Not divisible by 3: ', notdivisble3)
   
  }

checkdivisble(10,3)

console.log('---- ---- ----')
console.log('1.3')


function printDivisibleNumberBetween(p,n,m){
  if(p < n && n < m){
    
    for(let i = n; i <= m; i++){

      if(i % p === 0)
      console.log(i)
    }
  }
}


printDivisibleNumberBetween(2,3,9)