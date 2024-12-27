

console.log('A3.3_CW')
console.log('---- ---- ----')



let product1Stock = 50
let product2Stock = 20
let product3Stock = 10
let product4Stock = 0

let product1Status = ""

if(product1Stock >= 30){
  product1Status = 'In Stock'
}
else if(product1Stock >= 10 && product1Stock < 30){
  product1Status = 'Low Stock'
}

else if(product1Stock <10){
  product1Status = 'Out of stock'
}

//Product 2
let product2Status = ""

if(product2Stock >=30){
  product2Status= 'In Stock'
}

else if(product2Stock >=10 && product2Stock < 30){
  product2Status = 'Low Stock'
}

else if(product2Stock < 10){
  product2Status =  'Out of stock'
}

let product3Status = ""

if(product3Stock >= 30){
  product3Status = 'In Stock'
}

else if(product3Stock >=10 && product3Stock <30){
  product3Status = 'Low Stock'
}

else if(product3Stock < 10){
  product3Status = 'Out of stock'
}

//product4

let product4Status = ''

if(product4Stock >= 30){
  product4Status = 'In stock'
}
else if(product4Stock >=10 && product4Stock < 30){
  product4Status = 'Low Stock'
}

else if(product4Stock < 10){
  product4Status = 'Out of Stock'
}


console.log('Inventory Status Report')
console.log('-----------------------')

console.log('Product1: ', product1Status)
console.log('Product2: ' , product2Status)
console.log('Product3: ', product3Status)
console.log('Product4: ', product4Status)