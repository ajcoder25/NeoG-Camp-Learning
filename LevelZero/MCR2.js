let budget = 4000
let expenseWeek1 = 700
let expenseWeek2 = 850
let expenseWeek3 = 900
let expenseWeek4 = 650
let earningWeek1 = 1000
let earningWeek2 = 1100
let earningWeek3 = 1200
let earningWeek4 = 900
let budgetStatus

let totalExpenses = expenseWeek1 + expenseWeek2 + expenseWeek3 + expenseWeek4


let totalEarning = earningWeek1 + earningWeek2 + earningWeek3 + earningWeek4


let remainingBudget = budget - totalExpenses

let percentageSpend = totalExpenses /budget * 100

if(percentageSpend<=50){
  budgetStatus = 'Great job! You have managed your expenses well within the budget.'
}

else if(percentageSpend <= 75){
  budgetStatus = 'You are doing Okay, but keep an eye on your spending to stay within the budget.'
}

else{
  budgetStatus = 'You have exceeded your budget. Consider reviewing your expenses and making adjustment.'
}

console.log('Monthly Expense Report')

console.log("---------------")
console.log('Budget: ' +'$' + budget)
console.log('Total Expenses: ' + totalExpenses)
console.log('Total Earning: ' + totalEarning)
console.log('Remaining Budget: ' + remainingBudget)
console.log('Percentage Spent: ' + percentageSpend)

console.log('\n')

console.log(budgetStatus)