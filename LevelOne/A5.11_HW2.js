console.log('---- ---- ----')
console.log('A5.11_HW_2')
console.log('---- ---- ----')
console.log('1.1')
const productsData = [
  {
    id: 1,
    productName: "Laptop",
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: "Dell",
    productRating: 5
  },
  {
    id: 2,
    productName: "Smartphone",
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: "Samsung",
    productRating: 4
  },
  {
    id: 3,
    productName: "Smartwatch",
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: "Apple",
    productRating: 4
  }
];

// I've to create a function where we insert the id and gets all the details








// I'll create a function where user put the id and we will get it's data


function generateReport(id){

  let check = checkProductwithId(id)

  console.log('==== ' + 'Details Card for ' + check.productName + ' ====' + '\n' 
             + 'ID: ' + check.id + '\n' + 

             '-----'+ '\n' +
             'Details: ' +  '\n' +
              '----'
             +'\n' + 
            'Product Name: ' + check.productName + '\n'
            + 'Price in 2021: ' + check.price2022 + '\n'
            + 'Price in 2022: ' + check.price2022 + '\n'
            + 'Price in 2023: ' + check.price2023 + '\n'
            + 'Brand: ' + check.brand + '\n'
            + 'Rating: ' + check.productRating + '\n'
            + '----' + '----' + '----')
  
   
  
}




function checkProductwithId (id){

  for(let i = 0; i< productsData.length; i++){
       if(id === productsData[i].id){
        return productsData[i]
       }
  }
}



generateReport(1)
generateReport(2)
generateReport(3)

console.log('---- ---- ----')
console.log('1.2')
console.log('---- ---- ----')

// create function that give us the array that has greater than minimum price
// itself



function findGreaterPrice(yearPrice, minimumprice){

  let result = []
 
  for(let i = 0; i < productsData.length; i++){

    let product = productsData[i]

    if(product[yearPrice] > minimumprice){

       result.push(product)
    }
    
  }
  return result
}

 console.log('Product with price in 2023 >= 25000' + '\n', findGreaterPrice('price2021', 25000))
console.log('Product with price in 2023 >= 16000 '+ '\n', findGreaterPrice('price2023', 16000))

console.log('---- ----- ----')
console.log('1.3')
console.log('---- ---- ----')

function checkCuttOff(productName){
  for(let i = 0; i< productsData.length; i++){

    let check = productsData[i]
    let totalProduct = 3
    // find the average price

    if(productName === check.productName){

      let averagePrice = (check.price2021 + check.price2022 + check.price2023) / totalProduct

      

       console.log('Average price of 3 years for ' + productName + ' is ' + averagePrice)
      
    }

   
    

   

    

  
  }
  
}

checkCuttOff('Laptop')
checkCuttOff('Smartphone')
checkCuttOff('Smartwatch')


console.log('---- ---- -----')
console.log('1.4')

console.log('---- ---- -----')


// Calculate the average price for each product
for (let i = 0; i < productsData.length; i++) {
  let check = productsData[i];
  let totalPrice = check.price2021 + check.price2022 + check.price2023; // Sum of prices for 3 years
  let averagePrice = totalPrice / 3; // Divide by 3 to get the average

  productsData[i].averagePrice = averagePrice; // Add the averagePrice to each product object
}



// Function to find the product with the highest average price
function findHighestPrice(productData) {
  let highestProduct = productData[0]; // Start with the first product as the highest
  let highestAverage = highestProduct.averagePrice; // Initialize the highest average

  for (let i = 1; i < productData.length; i++) {
    let currentProduct = productData[i]; // Current product being checked

    // If the current product has a higher average price, update the highestProduct
    if (currentProduct.averagePrice > highestAverage) {
      highestProduct = currentProduct;
      highestAverage = currentProduct.averagePrice;
    }
  }

  return highestProduct; // Return the product with the highest average price
}

// Call the function and log the result
console.log("Product with the highest average price: ", findHighestPrice(productsData));



