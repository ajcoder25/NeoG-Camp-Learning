console.log('A5_Exercise2')
console.log('---- ---- ----')
console.log('1.1')
console.log('---- ---- ----')


const data = [
  {
     name: 'Rajesh Kumar',
     department: 'Marketing',
     hourlySalary: 250,
     week1Hours: 40,
     week2Hours: 42,
     week3Hours: 38,
     week4Hours: 39,
    bonusMultiplier: 0.65
    
  },
  {
    name: 'Priya Gupta',
    department: 'Sales',
    hourlySalary: 220,
    week1Hours:38,
    week2Hours:40,
    week3Hours:37,
    week4Hours:41,
    bonusMultiplier: 0.5
  },

  {
     name: 'Ankit Sharma',
     department: 'Finance',
     hourlySalary: 280,
     week1Hours: 35,
     week2Hours: 36,
     week3Hours: 39,
     week4Hours: 38,
     bonusMultiplier: 0.8,
    
  },
  {
        name: 'Ritu Singh',
        department: 'Operation',
        hourlySalary: 300,
        week1Hours: 42,
        week2Hours: 41,
        week3Hours: 43,
        week4Hours: 40,
        bonusMultiplier: .45,
  },
  { 
    name: 'Rahul Verma',
    department: 'IT',
    hourlySalary: 260,
    week1Hours: 37,
    week2Hours: 39,
    week3Hours: 38,
    week4Hours: 36,
    bonusMultiplier: 0.7,

  }
]


console.log(data)


console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')



//Calculate the bonus hours per person

function calculateBonusHours(data){

  let bonusThreshold = 4 * 40
  let bonusHours = 0
  
  let bonus = 0

  for(let i = 0; i < data.length; i++){
    
      
// calculating the total hours worked
      let totalHours = data[i].week1Hours + data[i].week2Hours + data[i].week3Hours + data[i].week4Hours
      

    // calculate bonus hours
    
    if(totalHours > bonusThreshold){

      bonusHours = totalHours - bonusThreshold
      bonus = bonusHours * data[i].hourlySalary * data[i].bonusMultiplier
      
    }
    else{
      bonus = 0
      
    }
    
    // calculate total salary for 4 weeks

    let totalSalaryForFourWeek = totalHours * data[i].hourlySalary

    // adding these fielf to object

    data[i].totalSalaryForFourWeeks = totalSalaryForFourWeek;
    data[i].bonus = bonus
    data[i].totalHoursWorked = totalHours
   

    
    
  }

   return data
  
}

console.log(calculateBonusHours(data))

console.log('---- ---- ----')
console.log('1.3')
console.log('---- ---- ----')

function createReport(data){

  let result = '===== ' + 'Employee Payslip ' + '=====' + '\n'
   result += 'Name: ' + data.name + '\n'
   result += 'Department: ' + data.department + '\n'
   result += 'Total Hours Worked: ' + data.totalHoursWorked + '\n'
  result += 'Total Salary: ' + data.totalSalaryForFourWeeks + '\n'
  result += 'Bonus: ' + data.bonus + '\n'
  result += '------' + '\n'



  return result


}


for(let i = 0; i< data.length; i++){

   console.log(createReport(data[i]))
  
}


console.log('---- ---- ----')
console.log('1.4')
console.log('---- ---- ----')


function humanResourceReport(data){
  let mostPaidEmployee = findingMostpaidEmployee(data)
  let totalHoursWorked = totalHours(data)
  let averageweek1Hours = findingAverageEachWeek(data, 'week1Hours')
  let averageWeek2Hours = findingAverageEachWeek(data, 'week2Hours')
  let averageWeek3Hours = findingAverageEachWeek(data, 'week3Hours')
  let averageWeek4Hours = findingAverageEachWeek(data, 'week4Hours')

  let result = '====== ' + 'Human Resource Report ' + '====='
       result += '\n'
       result += '------' +'\n'
       result += 'Most Paid Employee \n'
       result += '------' +'\n'
       result += 'Name: '  + mostPaidEmployee.name +'\n'
       result += 'Department: ' + mostPaidEmployee.department + '\n'
       result += 'Total Hours Worked: ' + mostPaidEmployee.totalHoursWorked + '\n'
       result += 'Total Salary: ' + mostPaidEmployee.totalSalaryForFourWeeks+ '\n'
       result += '------\n'
       result += 'Company Average' +'\n'
       result += '------\n'
       result += 'Total Hours Worked by All: '  + totalHoursWorked +'\n'
       result += 'Total Average hours of company: ' + totalHoursWorked/data.length + '\n'
       result += '------' + '\n'
       result += 'Total Average of Week One: ' + averageweek1Hours + '\n'
       result += 'Total Average of Week Two: ' + averageWeek2Hours + '\n'
       result += 'Total Average of Week Three: ' + averageWeek3Hours + '\n'
       result += 'Total Average of Week Four :' + averageWeek4Hours + '\n'
  


  return result
}


console.log(humanResourceReport(data))

// find the most payed employee 

function findingMostpaidEmployee(data){
  let highestPay = data[0]
  
  for(let i = 0; i< data.length; i++){
    if(data[i].totalSalaryForFourWeeks > highestPay.totalSalaryForFourWeeks){

        highestPay = data[i]
    }
  }
  return highestPay
}

// end of most paid employee

// finding total hours worked by each employee

function totalHours(data){

  let totalHours = 0
  for(let i = 0; i < data.length; i++){

    totalHours = totalHours + data[i].week1Hours + data[i].week2Hours + data[i].week3Hours + data[i].week4Hours
    
  }
  return totalHours
}

// End finding the totalHours


//Finding Average for the each week

function findingAverageEachWeek(data, week){

  let totalHours  = 0
  
  for(let i = 0; i< data.length; i++){
   
    totalHours = totalHours + data[i][week]
  }

  return totalHours/ data.length
}