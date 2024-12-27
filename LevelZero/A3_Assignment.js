console.log('A3_Assignment')
console.log('--------------------------')


let salary = 50000
let sideHustles = 10000
let groceries = 5000
let utilities = 2000
let rent = 20000
let transportation = 3000

let budgetStatus = ''
let spendingInsights= ''
let budgetTips = ''

let totalIncome = salary + sideHustles
let totalExpenses = groceries + utilities + rent + transportation

let budgetSurplusDeficit = totalIncome - totalExpenses





// if(budgetSurplusDeficit >=0){
//   budgetStatus = "Oops! you have a budget deficit.Consider reducing it expenses or increasing income."
// }
// if(totalExpenses <= 10000){
//   spendingInsights = 'Great job! you have manintained a low expense level.'
  
// }

if(totalExpenses >= 10000 && totalExpenses <=20000){
  spendingInsights = 'Your expenses are moderate. Look for opportunities to reduce unnecessary spending.'
}

else if(totalExpenses >=20000 && totalExpenses <=30000){
  spendingInsights = 'Your expenses are on the higer side. It is essential to analyze your spending habits and make necessary adjustment.'
}
else{
  spendingInsights  = 'Your expenses are quite high. It is essential to analyze your spending habits and make necessary adjustments.'
}


if(budgetSurplusDeficit >= 0){
  budgetStatus = 'Congratulations! you have budget surplus'
}
if(budgetSurplusDeficit >= 10000){
  budgetTips = "You have a significant budget surplus. Consider allocating the surplus towards savings or debt repayment."
}
else if(budgetSurplusDeficit < 10000 && budgetSurplusDeficit >= 10000){
  budgetTips = 'Your budget is relatively balanced.Focus on maintaining your current financial habits.'
}
else{
  budgetTips = 'You have a budget deficit. Evaluate your expenses and indentify areas where you can cut back.'
}


console.log('Monthly Budget Analysis Report')
console.log('---- ---- ----')
console.log('Total Income: '+'₹' + totalIncome)
console.log('Total Expenses: '+'₹'+ totalExpenses)
console.log('Budget surplus/deficit: '+'₹' +budgetSurplusDeficit)

console.log('\n')

console.log('Budget Status: ', budgetStatus)

console.log('\n')

console.log('Spending insights: ', spendingInsights)

console.log('\n')

console.log('Budget Management tips: ', budgetTips)