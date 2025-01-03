console.log("A5.10_HW1")
console.log('---- ---- ----')
console.log("Exercise 1")
console.log('---- ---- ----')
console.log('1.1')

let scoreofCrickter = [

  {
   name: 'Virat',
  edengardens: 72,
  wankhedestadium: 88,
  ferozshahkotla: 45,
   chepauk: 74

  },
  {
     name : 'Rohit',
    edengardens: 64,
    wankhedestadium: 41,
     ferozshahkotla: 68,
     chepauk : 34
    
  },

  {
      name: 'Shikhar',
    edengardens: 54,
    wankhedestadium: 38,
      ferozshahkotla: 72,
      chepauk: 44
  },
  {
       name: 'Rishbh',
    edengardens: 22,
    wankhedestadium: 27,
        ferozshahkotla:34,
        chepauk: 51
     
  }
    
  
]







for(let i = 0; i < scoreofCrickter.length; i++){

    
console.log('Cricketer: ' + scoreofCrickter[i].name + '\n'
           + 'Eden Garden: ' + scoreofCrickter[i].eden + '\n'
           + 'Wankhede Stadium: ' + scoreofCrickter[i].wan + '\n'
           + 'Feroz Shah Kotala: ' + scoreofCrickter[i].feroz + '\n'
           + 'Chepauk: ' + scoreofCrickter[i].chepauk + '\n')
 

  
}

console.log('---- ---- ----')
console.log('1.2')

let chinnaswamystadiumscore = [54, 82,49,45]



for(let i = 0; i < scoreofCrickter.length; i++){
  scoreofCrickter[i].chinnaswamystadium = chinnaswamystadiumscore[i]

console.log(scoreofCrickter[i])
}



console.log('---- ---- ----')
console.log("Exercise 2")
console.log('---- ---- ----')
console.log('2.1')


let newCrickter = 
  {
         name: 'KL Rahul',
         edengardens: 34,
         wankhedestadium: 56,
         ferozshahkotla: 42,
         chepauk: 31,
         chinnaswamystadium: 68
  }
  

// for(let i = 0; i < newCrickter.length; i++){

//     console.log( "KL Rahul's Data " + 
//                 " {" + '\n'  +
//                 'name: '+ newCrickter[i].name +'\n'+
//                 'edengarden: ' + newCrickter[i].eden + '\n'
//                 + 'wankhedeStadium: ' + newCrickter[i].wan +'\n'
//                 + 'ferozShahKotla: ' + newCrickter[i].feroz + '\n'
//                 + 'chepauk: ' + newCrickter[i].chepauk +'\n'
//                + 'ChinnaswamyStadium: ' + newCrickter[i].chinna + '\n' 
//                 +'}')
// }

console.log('---- ---- ----')
console.log('2.2')

scoreofCrickter.push(newCrickter)


console.log('Updated Data:', scoreofCrickter)


console.log('---- ---- ----')
console.log('2.3')



for (let i = 0; i < scoreofCrickter.length; i++) {
  // Calculate the total score for the current cricketer
  let totalscore =
    scoreofCrickter[i].edengardens +
    scoreofCrickter[i].wankhedestadium +
    scoreofCrickter[i].ferozshahkotla +
    scoreofCrickter[i].chepauk + scoreofCrickter[i].chinnaswamystadium

  // Add totalscore as a new property to the current object
  scoreofCrickter[i].totalscore = totalscore;
}

console.log('Updated Cricketer Scores: ', scoreofCrickter)

console.log('---- ---- ----')
console.log('2.4')

for(let i = 0; i< scoreofCrickter.length; i++){
  let numberofstadium = 5

  let avgscores = scoreofCrickter[i].totalscore/numberofstadium

  scoreofCrickter[i].avgscores = avgscores
}

console.log('updated Data: ', scoreofCrickter)



console.log('---- ---- ----')
console.log('Exercise 3')
console.log('---- ---- ----')


for(let i = 0; i < scoreofCrickter.length; i++){

      generatescoreCard(scoreofCrickter[i])
}


function generatescoreCard(score){

  console.log('===== ' + 'Score Card' + ' for ' + score.name + '===== ' + '\n' +
             'Eden Gardens: ' + score.edengardens + '\n'+
              'Wankhede Stadium:' + score.wankedestadium +'\n' +
             'Feroz Shah Kotla: ' + score.ferozshahkotla + '\n' +
             'Chepauk: ' + score.chepauk + '\n' +
             
            'Chinnaswamystadium:' +score.chinnaswamystadium + '\n'+
             '-----------' + '\n'
              + 'Total: ' + score.totalscore + '\n' 
              + 'Average: ' + score.avgscores + '\n' +
               'Performance: ' + checkperformance(score.avgscores) + '\n'
              + '----- ----- ----- -----  -----' + '\n'
             
              
             )
  
}


function checkperformance(avg) {
  if (avg >= 80) {
    return 'Good';
  } else if (avg >= 60 && avg < 80) {
    return 'Above Average';
  } else if (avg >= 45 && avg < 60) {
    return 'Average';
  } else {
    return 'Bad';
  }
}