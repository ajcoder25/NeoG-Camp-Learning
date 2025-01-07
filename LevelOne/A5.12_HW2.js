console.log("A5.12_HW2");
console.log("---- ---- ----");

const productsData = [
  {
    id: 101,
    name: "Laptop",
    price: 999.99,
    brand: "Dell",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 102,
    name: "Smartphone",
    price: 599.99,
    brand: "Samsung",
    category: "Electronics",
    rating: 4.0,
  },
  {
    id: 103,
    name: "Running Shoes",
    price: 79.99,
    brand: "Nike",
    category: "Footwear",
    rating: 4.8,
  },
  {
    id: 104,
    name: "T-shirt",
    price: 19.99,
    brand: "Adidas",
    category: "Apparel",
    rating: 4.2,
  },
  {
    id: 105,
    name: "Coffee Maker",
    price: 49.99,
    brand: "Hamilton",
    category: "Kitchen Appliances",
    rating: 4.6,
  },
];

// Finding most expensive item
function mostExpensive(productsData) {
  let expensive = productsData[0];

  for (let i = 0; i < productsData.length; i++) {
    if (productsData[0].price > expensive.price) {
      expensive = productsData[0];
    }
  }

  return expensive;
}

// end of most expensive item

//finding total average price of the object

function totalAveragePrice(productsData) {
  let total = 0;

  for (let i = 0; i < productsData.length; i++) {
    total = total + productsData[i].price;
  }
  return total / productsData.length;
}

// End average price

// finding how many electronics Item is there in the object

function totalElectronicsItem(productsName) {
  let count = 0;
  for (let i = 0; i < productsData.length; i++) {
    if (productsName[i].category === "Electronics") {
      count = count + 1;
    }
  }
  return count;
}

// End of finding the total electronics items

// findling the average Rating for all the product

function findingAverageRating(productsData) {
  let totalRating = 0;
  for (let i = 0; i < productsData.length; i++) {
    totalRating = totalRating + productsData[i].rating;
  }
  return totalRating / productsData.length;
}

// End Average Rating

//finding the product with highest Rating

function findingHighestRating(productsData) {
  let highestRating = productsData[0];
  for (let i = 1; i < productsData.length; i++) {
    if (productsData[i].rating > highestRating.rating) {
      highestRating = productsData[i];
    }
  }
  return highestRating;
}

//End Highest Rating

// Finding the product which is less than $50

function findingProduct(productsData, price) {
  let cheaperItem = [];
  for (let i = 1; i < productsData.length; i++) {
    if (productsData[i].price < price) {
      cheaperItem.push(productsData[i]);
    }
  }

  return cheaperItem;
}

console.log();
//End of cheaper Price

function printReport(productsData) {
  let findMostExpensive = mostExpensive(productsData);
  let findingElectronics = totalElectronicsItem(productsData);
  let averagePrice = totalAveragePrice(productsData);
  let averageRating = findingAverageRating(productsData);
  let higestRatingProduct = findingHighestRating(productsData);
  let findingCheaperProduct = findingProduct(productsData, 50);

  let report = "====== " + " Product Analysis " + "======" + "\n";
  report += "Most Expensive Product Details \n";
  report += "------\n";
  report += "Name: " + findMostExpensive.name + "\n";
  report += "Price: " + "$" + findMostExpensive.price + "\n";
  report += "Brand: " + findMostExpensive.brand + "\n";
  report += "Category: " + findMostExpensive.category + "\n";
  report += "Rating: " + findMostExpensive.rating + "\n";
  report += "---- ---- ----\n";
  report += "\n";
  report += "Totals and Averages" + "\n";
  report += "---------\n";
  report += "Total Electonics Products: " + findingElectronics + "\n";

  report += "Average Price: " + "$" + averagePrice + "\n";
  report += "Average Rating: " + averageRating + "\n";
  report += "---- ---- ----" + "\n";
  report += "\n";
  report += "Product with Highest Rating: " + "\n";
  report += "Name: " + higestRatingProduct.name + "\n";
  report += "Price: " + "$" + higestRatingProduct.price + "\n";
  report += "Brand : " + higestRatingProduct.brand + "\n";
  report += "Category: " + higestRatingProduct.category + "\n";
  report += "Rating: " + higestRatingProduct.rating + "\n";
  report += "---- ---- ----\n";
  report += "\n";
  report += "Products with Price Less Than $50:\n";
  report += "---- ---- ----" + "\n";
  report += "Name: " + findingCheaperProduct[0].name + "\n";
  report += "Price: " + "$" + findingCheaperProduct[0].price + "\n";
  report += "Brand: " + findingCheaperProduct[0].brand + "\n";
  report += "Category: " + findingCheaperProduct[0].category + "\n";
  report += "Rating: " + findingCheaperProduct[0].rating + "\n";
  report += "----\n";

  report += "Name: " + findingCheaperProduct[1].name + "\n";
  report += "Price: " + "$" + findingCheaperProduct[1].price + "\n";
  report += "Brand: " + findingCheaperProduct[1].brand + "\n";
  report += "Category: " + findingCheaperProduct[1].category + "\n";
  report += "Rating: " + findingCheaperProduct[1].rating + "\n";

  return report;
}

console.log(printReport(productsData));
