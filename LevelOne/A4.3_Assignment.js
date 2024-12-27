console.log('A4.3_HW1')
console.log('---- ---- ----')
console.log('Exercise 1')

console.log('---- ---- ----')

let product1 = 'Laptop'
let price1 = 999
let category1 = 'Electronics'

let product2 = 'Running Shoes'
let price2 = 799
let category2 = 'Footwear'

let product3 = 'T-Shirt'
let price3 = 199
let category3 = 'Clothing'


function getTotalPrice(price1, price2, price3){
  
  return price1 + price2 + price3
}

let totalPrice = getTotalPrice(price1, price2, price3)

console.log('Total Price: ', totalPrice)

console.log('---- ---- ----')
console.log('Exercise 2')
console.log('---- ---- ----')

let discount = 0.1

function applyDiscount(category, price){
  if(category ==='Electronics'){
    return price - price * discount
  }
  else{
    return 0
  }

}

let checkdiscount = applyDiscount(category1, price1)

let checkDiscountProduct2 = applyDiscount(category2, price2)


let checkDiscountProduct3 = applyDiscount (category3,price3)

// TOtal price after deducted the discount price

let finalTotalPrice  = checkdiscount + price2 + price3


let summary1 = '=======' + 'Cart Summary ' + '======' + '\n' + 
  
               'Product 1: ' + product1 + '\n' + 
               'Price of Product 1: ' + '$' + price1 + '\n'+
               'Discount: ' + discount + '\n' + 
               'Final Price of Product 1: ' +'$'+checkdiscount 
console.log(summary1)

console.log('\n')

let summary2 = 'Product 2: ' + product2 +'\n'+
               'Price of product 2: ' + '$' + price2 +'\n' + 
                'Discount: ' + checkDiscountProduct2 + '\n' + 
               'Final Price of Product 2: ' + '$' + price2

console.log(summary2)

console.log('\n')

let summary3 = 'Product 3: ' + product3 + '\n' + 
               'Price of Product 3: ' + '$' + price3 + '\n' + 
                'Discount: ' + checkDiscountProduct3 + '\n' + 
                'Final Price of Product 3: ' + '$' + price3 
                

 console.log(summary3)    

console.log('\n')

let totalCartPrice = 'Total Cart Price: ' +'$' +finalTotalPrice
console.log(totalCartPrice)
