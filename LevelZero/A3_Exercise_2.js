console.log('A3_Exercise_2')
console.log('-----------------------')

let day1Burnt = 400
let day1Intake = 1500
let day2Burnt = 450
let day2Intake = 1800
let day3Burnt = 300
let day3Intake = 1600
let day4Burnt = 500
let day4Intake = 2000
let day5Burnt = 350
let day5Intake = 1700

let baseCalorie = 1500

let day1Surplus = day1Burnt - (day1Intake + baseCalorie)

let standingGoalAwards = ''


console.log('Day 1: ' +' Deficit: ', day1Surplus + ' (Deficit)')

let day2Surplus = day2Burnt - (day2Intake +baseCalorie)

console.log('Day 2: ' + ' Deficit: ', day2Surplus + ' (Deficit)')

let day3Surplus = day3Burnt - (day3Intake + baseCalorie)

console.log('Day 3: ' + ' Deficit: ', day3Surplus + ' (Deficit)')




let day4Surplus = day4Burnt -(day4Intake + baseCalorie)

console.log('Day 4: ' + ' Deficit: ', day4Surplus + ' (Deficit)')


let day5Surplus = day5Burnt -(day5Intake + baseCalorie )
console.log('Day 5: ' + ' Deficit: ', day5Surplus + ' (Deficit)')




let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake
let totalSurplus = day1Surplus + day2Surplus + day3Surplus + day4Surplus + day5Surplus


//////////

if(totalBurnt >=1000){
  standingGoalAwards = 'Congratslations! You have kept moving throughout.Keep it up!'
}

else{
   standingGoalAwards = 'No Award yet'
}

console.log('\n')
console.log('Weekly Summary:')

console.log('Total calories Burnt: ', totalBurnt)
console.log('Total Calories Intake: ', totalIntake)
console.log('Total Surplus/Deficit: ', totalSurplus + ' (Deficit)')
console.log('Standing Goal Award: ', standingGoalAwards)

