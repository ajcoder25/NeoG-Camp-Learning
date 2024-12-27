console.log('A3.1_HW_2')

console.log('---- ---- ----')

console.log('1.1')

let personAge = 15
let isAdult = false
if (!isAdult) {
    console.log("Not an Adult")
    console.log('Age: ', personAge)
}

console.log('---- ---- ----')
console.log('1.2')


let passengerAge = 65
let orginalTicketPrice = 150

if (passengerAge > 60) {
    orginalTicketPrice = orginalTicketPrice - (orginalTicketPrice * .15)

    console.log('Ticket price for age greater than 60: ' + '₹ ' + orginalTicketPrice)
}
else {
    console.log('Ticket price for age less than or equal to 60: ' + '₹' + orginalTicketPrice)
}

console.log('---- ---- ----')

console.log('1.3')

let student1 = 85
let student2 = 90
let student3 = 78

let score1 = student1
let score2 = student2
let score3 = student3



if (student2 > score1 && student2 > score3) {
    console.log('Student 2 has the highest score:' + score2)
}
else {
    console.log('Student 2 does not have the highest score')
}

console.log('---- ---- ----')
console.log('1.4')

let item1 = 'Mobile Phone'
let item2 = 'Headphone'
let item3 = 'Laptop'
let item4 = 'Smartwatch'


let price1 = 15000
let price2 = 2500
let price3 = 45000
let price4 = 8000
let deliveryChargeStatus = ''
let totalCartPrice = price1 + price2 + price3 + price4


if (totalCartPrice < 1999) {
    let deliveryCharge = 99
    totalCartPrice = totalCartPrice + deliveryCharge
    deliveryChargeStatus = 'Optional Delivery Charge: ' + deliveryCharge
}
else {
    deliveryChargeStatus = 'No Delivery Charge'
}

console.log('*** ' + 'Shopping Cart Summary  ' + '***')
console.log('-----------------------------------')
console.log('Item 1 '+ item1  + ' Price'+': ' + '₹'+ price1)
console.log('Item 2 ' + item2 + ' Price'+ ': ' + '₹'+ price2)
console.log('Item 3 ' + item3 + ' Price'+ ': ' + '₹'+ price3)
console.log('Item 4 ' + item4 + ' Price'+ ': ' + '₹'+ price4)
console.log('----------------------------')

console.log('Total Cart Price: ' +'₹'+ totalCartPrice)
console.log('Delivery Charges: '+'No Delivery Charge')