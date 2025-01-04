

console.log('A5.10_HW2')
console.log('---- ---- ----')
console.log('Exercise 1')
console.log('---- ---- ----')
console.log('1.1')



let foodTracker = [

  {
     day: 'Monday',
     Breakfast: 300,
     Lunch: 300,
     snacks: 150,
     dinner: 500
    
    
  },

  {
     day: 'Tuesday',
     Breakfast: 250,
     Lunch: 450,
     snacks: 200,
    dinner: 550
  },


  {
     day: 'Wednesday',
     Breakfast: 350,
     Lunch: 550,
     snacks: 100,
     dinner: 700
  },

  {
     day: 'Thursday',
     Breakfast: 400,
     Lunch: 600,
     snacks: 180,
     dinner: 650
  },

  {
     day: 'Friday',
     Breakfast: 280,
     Lunch: 480,
     snacks: 120,
     dinner: 580
    
  },

  {
     day: 'Saturday',
     Breakfast: 320,
     Lunch: 520,
     snacks: 160,
     dinner: 620

  }
  
       
]


for(let i = 0; i< foodTracker.length; i++){

  let easyprint = foodTracker[i]

  console.log('Day: ', easyprint.day + '\n'
              +'Lunch: ' + easyprint.Lunch + '\n'
             + 'Snacks: ' + easyprint.snacks + '\n'
             + 'Dinner: ' + easyprint.dinner + '\n')
  
}

console.log('---- ---- ----')
console.log('1.2')

const midAfternoonCalories = [100,120,105,110,100,130]


for(let i = 0; i< foodTracker.length; i++){

 foodTracker[i].midAfternoon = midAfternoonCalories[i]


}

console.log(foodTracker)

console.log('---- ---- ----')
console.log("Exercise 2")

console.log('2.1')

let sundayData = {
         day: 'Sunday',
         Breakfast: 370,
         Lunch: 430,
         snacks: 140,
         dinner : 530,
         midAfternoon: 150
}

foodTracker.push(sundayData)

console.log('Updated Data: ', foodTracker)

console.log('---- ---- ----')
console.log('2.3')

// add the total calories

for(let i = 0; i< foodTracker.length; i++){

   
    let totalCalorie = foodTracker[i].Breakfast + foodTracker[i].dinner + foodTracker[i].Lunch + 
      foodTracker[i].snacks + foodTracker[i].midAfternoon

  foodTracker[i].totalCalorie = totalCalorie

 
}



console.log('Array with total calories: ', foodTracker)



console.log('2.4')
console.log('---- ---- ----')

///
for(let i = 0; i< foodTracker.length; i++){

  let totalday = 5

  let avgcalorie = foodTracker[i].totalCalorie/totalday

  foodTracker[i].avgcalorie = avgcalorie
}

console.log(foodTracker)

console.log('---- ---- ----')
console.log("Exercise 3")


for(let i = 0; i< foodTracker.length; i++){


  calorieIntakeCard(foodTracker[i])
  
}


function calorieIntakeCard(card){

  console.log('====' + ' Calorie Card for ' + card.day + ' ==== ' + '\n '
             + 'Breakfast: ' + card.Breakfast + '\n'
             + 'Lunch: ' + card.Lunch + '\n'
             + 'Snacks:' + card.snacks + '\n'
             + 'Dinner: ' + card.dinner + '\n'
             + 'Mid Afternoon: '+ card.midAfternoon + '\n '
             + '---- ---- ----' + '\n '+ 
              
              'Total: ' + card.totalCalorie + '\n'
             + 'Average: ' + card.avgcalorie + '\n ' + 
              'Comment: '+ checkcalorie(card.totalCalorie) + ' \n')  
           

  
}


function checkcalorie(intake){
   if(intake <= 1500){
     return 'Your calorie intake was within limits'
   }
  else {
    return 'Your calorie intake was higher than recommended'
  }
}