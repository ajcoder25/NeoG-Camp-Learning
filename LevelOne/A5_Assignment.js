console.log('A5_Assignment')
console.log('---- ---- ----')
console.log('1.1')
console.log('---- ---- ----')

let data = [

  {
    name: 'Kabhi khushi Kabhi Gham',
    genre: 'Drama',
    boxOffice: 500,
    satelliteRights: 120,
    ottRights: 70,
    musicRights:20
  },
  {
    name: 'Dilwale Dulhania Le Jayenge',
    genre: 'Romance',
    boxOffice: 550,
    satelliteRights: 130,
    ottRights: 80,
    musicRights:25
  },

  {
    name: '3 Idiots',
    genre: 'comedy',
    boxOffice: 600,
    satelliteRights: 140,
    ottRights: 90,
    musicRights:30
  },
  {
    name: 'Bajrangi Bhaijaan',
    genre: 'action',
    boxOffice: 500,
    satelliteRights: 120,
    ottRights: 70,
    musicRights:20
  },
  {
    name: 'Padmaavat',
    genre: 'historical',
    boxOffice: 800,
    satelliteRights: 180,
    ottRights: 110,
    musicRights:45
  }
  ]

  console.log(data)


console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')

for(let i = 0; i< data.length; i++){
  let totalCost = 0

  totalCost = totalCost + data[i].boxOffice + data[i].satelliteRights + data[i].ottRights + data[i].musicRights


data[i].totalCost = totalCost

  console.log(data[i])
  
}

console.log('---- ---- ----')
console.log('1.3')
console.log('---- ---- ----')

function costCard(data){

  let result = '======' + 'Movie Cost Card' + '======' + '\n'
      result += 'Name: ' + data.name +'\n'
      result += 'Genre ' + data.genre + '\n'
      result += 'Total Cost: ' + data.totalCost + '\n'
  
  return result
  
}


for(let i = 0; i< data.length; i++){

 console.log(costCard(data[i]))
}

console.log('---- ---- ----')
console.log('1.4')
console.log('---- ---- ----')

function reportForAllMovie(data){
 let mostExpensiveMovie = findingMostExpensiveMovie(data)
 let totalCostAllMovie = findingTotalCost(data)
 let totalBoxOfficeAverage = totalBoxOffice(data)
 let totalSatelliteRightsAverage = findingTotalSatelliteAverage(data)
 let totalOttAverage = totalOttRight(data)
 let averageMusicRight = findingMusicRight(data)
  
  let result = '======' + 'Movie Report' + '======' +'\n'
      result += 'Most Expensive Movie \n'
      result += '-------\n'
      result += 'Name: ' + mostExpensiveMovie.name +'\n'
      result += 'Genre: ' + mostExpensiveMovie.genre + '\n'
      result += 'Total Cost: ' + mostExpensiveMovie.totalCost + '\n'
      result += '\n'
      result += 'Movie Average' + '\n'
      result += '------\n'
      result += 'Total Cost of All Movies: ' + totalCostAllMovie +'\n'
      result += 'Total Average Cost of all movies: ' + totalCostAllMovie/data.length +'\n'

      result += '------\n'
      result += 'Total Box Office Average: ' +  totalBoxOfficeAverage +'\n'
      result += 'Total Satellite Rights Average: ' + totalSatelliteRightsAverage +'\n'

      result += 'Total OTT Average: ' + totalOttAverage + '\n'
      result += 'Total Music Rights Average: ' +  averageMusicRight

     



  
  return result
}


// finding the most expensive movie

function findingMostExpensiveMovie(data){

  let expensiveMovie = data[0]
  for(let i = 0; i < data.length; i++){
    if(data[i].totalCost > expensiveMovie.totalCost){
      expensiveMovie = data[i]
    }

    
  }
  return expensiveMovie
}

// calling card for all movie

console.log(reportForAllMovie(data))


//finding total cost for the movie


function findingTotalCost(data){
  let totalCost = 0
  for(let i = 0; i< data.length; i++){

    totalCost = totalCost + data[i].totalCost 

    
  }

  return totalCost
}

//End of totalCost

// finding Total Box Office Average 

function totalBoxOffice(data){
  let totalBoxOffice = 0

  for(let i = 0; i< data.length; i++){
    totalBoxOffice = totalBoxOffice + data[i].boxOffice 
  }
  return totalBoxOffice/data.length
}

// End total Box office Average

//finding totalSatellite Average 

function findingTotalSatelliteAverage(data){
  let totalsatelliteAverage = 0

  for(let i = 0; i< data.length; i++){
    totalsatelliteAverage = totalsatelliteAverage + data[i].satelliteRights
  }
  return totalsatelliteAverage/data.length
}

//End of totalsatellite Right


// finding totalOttRight

function totalOttRight(data){
  let totalRight = 0
  for(let i = 0; i< data.length; i++){
    totalRight = totalRight + data[i].ottRights
  }
  return totalRight/data.length
}

// end totalOttRight

//finding music Rights

function findingMusicRight(data){
  let totalMusicRight = 0
  for(let i = 0; i<data.length; i++){
    totalMusicRight = totalMusicRight + data[i].musicRights
  }
  return totalMusicRight/data.length
}

