console.log("A3_Exercise_1");

console.log("----------------");
let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSaleTarget = 150;
let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;
let rahulBonus;
let priyaBonus;
let amitBonus;

let rahulPerformance;
let amitPerformance;
let priyaPerformance;
// step2
let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100;
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100;

let amitSalesPercentage = (amitActualSales / amitSaleTarget) * 100;

if (rahulSalesPercentage > 90) {
  rahulPerformance = "High Performer";
  rahulBonus = rahulActualSales * 0.2;
} else if (rahulSalesPercentage >= 70) {
  rahulPerformance = "Average Performer";
  rahulBonus = rahulActualSales * 0.1;
} else if (rahulSalesPercentage < 70) {
  rahulPerformance = "Low Performer";
}

// Priya

if (priyaSalesPercentage >= 90) {
  priyaPerformance = "High Performer";
  priyaBonus = priyaActualSales * 0.2;
} else if (priyaSalesPercentage >= 70) {
  priyaPerformance = "Average Performer";
  priyaBonus = priyaActualSales * 0.1;
} else {
  priyaPerformance = "Low Performer";
}


//Amit

if (amitSalesPercentage >= 90) {
  amitPerformance = "High Performer"
  amitBonus = amitActualSales * 0.2;
} else if (amitSalesPercentage >= 70) {
  amitPerformance = "Average Performer";
  amitBonus = amitActualSales * 0.1;
} else if (amitSalesPercentage < 70) {
  amitPerformance = "Low Performer";
}

//Step 4

console.log("Sales Performance Report");
console.log("--------------------------");

console.log("Rahul");
console.log("Sales Target: " + rahulSalesTarget + " units");
console.log("Units Sold: " + rahulActualSales + " units");
console.log("Sales Percentage: ", rahulSalesPercentage + "%");
console.log("Performance: ", rahulPerformance);
console.log("Bonus Amount: ", rahulBonus + " units");

console.log("\n");

console.log("Priya");
console.log("Sales Target: " + priyaSalesTarget + " units");
console.log("Units Sold: " + priyaActualSales + " units");
console.log("Sales Percentage: ", priyaSalesPercentage + "%");
console.log("Performance: ", priyaPerformance);
console.log("Bonus Amount: ", priyaBonus + " units");

console.log("\n");
console.log("Amit");
console.log("Sales Target: " + amitSaleTarget + " units");
console.log("Units Sold: " + amitActualSales + " units");
console.log("Sales Percentage: ", amitSalesPercentage + "%");
console.log("Performance: ", amitPerformance);
console.log("Bonus Amount: ", amitBonus + " units");
