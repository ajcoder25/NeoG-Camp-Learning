console.log('A4.3_HW1')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('---- ---- ----')

let day1Burnt = 400
let day1Intake = 1500

let day2Burnt = 450
let day2Intake = 1800

let day3Burnt = 300
let day3Intake = 1600

let day4Burnt = 500
let day4Intake = 2000


let baseCalorieBurn = 1500

function calculateSurplusDeficit(day,dayBurnt,dayIntake,baseCalorieBurn){


let surplus = dayBurnt - (dayIntake + baseCalorieBurn)
  
let status 
  if(surplus < 0){
    status = 'Deficit'
  }
else{
   status = 'Surplus'
}


  return  day  + status +': ' + surplus
 
}


console.log(calculateSurplusDeficit('Day 1: ', day1Burnt, day1Intake, baseCalorieBurn))
console.log(calculateSurplusDeficit('Day 2: ', day2Burnt, day2Intake, baseCalorieBurn))
console.log(calculateSurplusDeficit('Day 3: ', day3Burnt, day3Intake, baseCalorieBurn))
console.log(calculateSurplusDeficit('Day 4: ', day4Burnt, day4Intake, baseCalorieBurn))

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

function totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt){
      return day1Burnt + day2Burnt + day3Burnt + day4Burnt
}

let totalCalorieBurnt = totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt)

console.log('Total Calorie Burn: ', totalCalorieBurnt)

console.log('---- ---- ----')
console.log('Exercise 3')
console.log('---- ---- ----')

function totalCalorieIntake(day1Intake, day2Intake, day3Intake, day4Intake){
  return day1Intake + day2Intake + day3Intake + day4Intake
}

let totalcalorieIntake = totalCalorieIntake(day1Intake, day2Intake, day3Intake, day4Intake)

console.log('Total calorie Intake: ', totalcalorieIntake)
                                       

console.log('---- ---- ----')
console.log('Exercise 4')
console.log('---- ---- ----')

function totalSurplus(totalCalorieBurnt, totalcalorieIntake,baseCalorieBurn ){

  return   totalCalorieBurnt - (totalcalorieIntake + 4 * baseCalorieBurn)
}

let calculateTotalSurplus = totalSurplus(totalCalorieBurnt,totalcalorieIntake,baseCalorieBurn)

 console.log('Total Surplus/Deficit: ', calculateTotalSurplus)


console.log('---- ---- ----')
console.log('Exercise 5')

console.log('---- ---- ----')

function generateWeeklySummary(totalCalorieBurnt,totalcalorieIntake,calculateTotalSurplus ){
  let  standingGoalAwards
  
  if(totalCalorieBurnt > 1000){
    standingGoalAwards = 'Congratulations! You have kept moving throughout.Keep it up!'
  }
  else{
    standingGoalAwards  = 'No Award yet'
  }

  let summary = 'Weekly Summary: ' +'\n'+ 
                'Total Calories Burnt: ' + totalCalorieBurnt + '\n'+
                 'Total Calories Intake: ' + totalcalorieIntake + '\n' + 
                'Total surplus/Deficit: ' + calculateTotalSurplus + '\n'
                 + '\n' +
  
                'Standing Goal Award: '+ standingGoalAwards

  return summary
}



 let getWeeklySummary = generateWeeklySummary(totalCalorieBurnt, totalcalorieIntake, calculateTotalSurplus)
console.log(getWeeklySummary)