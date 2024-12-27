console.log('A3.1_HW_1')
console.log('---- ---- ----')
console.log('1.1')


let personAge = 18
let isAdult = true

if(isAdult){
  console.log('Adult')
  console.log('Age: ',personAge)
}

console.log('---- ---- ----')
console.log('1.2')

let customerAge = 22
let baseTicketPrice = 200
if(customerAge <= 18 || customerAge ===18){
  let newTicketPrice = baseTicketPrice * 0.20
  console.log('Ticket Price: ' + ' ₹'+newTicketPrice)
  console.log('Ticket Price: '+' ₹', )
}
else{
  console.log('Ticket Price: '+ ' ₹ '+ baseTicketPrice)
}


console.log('---- ---- ----')

console.log('1.3')

let num1 = 25
let num2 = 50
let num3 = 20

if(num3 < num1 && num3 < num2){
  console.log('The third number' +', ' + num3  +' is the smallest.')
}
else{
  console.log('The third number'+ num3 + ',' + 'is not the smallest')
}


console.log('---- ---- ----')
console.log('1.4')

let book1  = "Harry potter and sorcerer's stone"
let book2 = 'The Great Gatsby'
let book3 = 'To Kill a Mockbird'
let book4 = 'The Lord of the rings'

let price1 = 400
let price2 = 300
let price3 = 250
let price4 = 500

let totalCartPrice = price1 + price2 + price3 + price4
let deliveryChargesStatus = ""

if(totalCartPrice < 799){
  let deliveryCharge = 50
  totalCartPrice = totalCartPrice + deliveryCharge
  deliveryChargesStatus = 'Optional Delivery Charge: ' + deliveryCharge
}
else{
  deliveryChargesStatus = 'No Delivery Charge'
}

console.log("***Bookstore Shopping Cart Summary ***")
console.log('----------------------------------')
console.log('Book 1: ' +  book1 +' Price' +': ' + '₹' + price1)
console.log('Book 2: ' +  book2 + ' Price'+': ' + '₹' + price2)
console.log('Book 3: ' +  book3 +' Price'+ ': ' + '₹' +price3)
console.log('Book 4: ' +  book4 +' Price'+ ': ' + '₹' + price4)
console.log('--------------------------')
console.log('Total Cart Price: ' + '₹' +totalCartPrice)
console.log('Delivery Charges: ', deliveryChargesStatus)