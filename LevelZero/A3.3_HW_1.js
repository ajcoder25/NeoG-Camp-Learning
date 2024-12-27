console.log('A3.3_HW_1')
console.log('---- ---- ----')

let employee1Name = 'Rahul'
let emloyee1Grade = 90
let employee1HoursWorked = 27
let employee1Salary = 45000
let employee1VacationLeaveTaken = 2
let employee1SickLeaveTaken = 1


let employee1Bonus


if(employee1HoursWorked > 30 && emloyee1Grade > 75){

  employee1Bonus = 0.2
   
}
else if(employee1HoursWorked > 25 && emloyee1Grade > 95){
  employee1Bonus = 0.15
}

else if(employee1HoursWorked > 25 && emloyee1Grade > 85){
  employee1Bonus = 0.1
}



// 1.3

let employee1PFDeduction 
if(employee1Salary > 35000){
  employee1PFDeduction = employee1Salary * 0.125
}
else {
  employee1PFDeduction = 2500
}

// TDS

let employee1TDSDeduction

if(employee1Salary > 40000){
  employee1TDSDeduction = employee1Salary * 0.1
}
else{
  employee1TDSDeduction = 199
}

let employeeVacationLeaveTaken = 2 * 1500

let employee1SickDeduction = 1500

// 1.5
let deduction = employee1SickDeduction + employeeVacationLeaveTaken + employee1TDSDeduction + employee1PFDeduction

let addingBonus = employee1Salary + employee1Salary * 0.1

let employee1NetSalary = addingBonus - deduction








console.log('Payslip for Employee 1:')
console.log("Employee Name: ", employee1Name)
console.log('Grade: ', emloyee1Grade)
console.log('Hours Worked: ', employee1HoursWorked)
console.log('Salary: ', employee1Salary)
console.log('Bonus: ', employee1Bonus)
console.log('PF Deduction: ', employee1PFDeduction)
console.log('TDS Deduction: ', employee1TDSDeduction)
console.log('Vacation Deduction: ', employeeVacationLeaveTaken)
console.log('Sick Deduction: ', employee1SickDeduction)
console.log('Net Salary', employee1NetSalary)
console.log('---------------------------')