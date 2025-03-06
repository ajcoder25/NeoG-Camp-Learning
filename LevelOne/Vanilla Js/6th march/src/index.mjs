const expenses = [
  { id: 1, name: "Groceries", amount: 150 },
  { id: 2, name: "Utilities", amount: 80 },
  { id: 3, name: "Dining Out", amount: 120 },
  { id: 4, name: "Transportation", amount: 50 },
];

let expenseList = document.getElementById("expenseList");
let showPrice = document.getElementById("showPrice");
let selected = document.getElementById("selected");

let checkValue = selected.checked;

function showData() {
  expenseList.innerHTML = "";
  let filteredExpenses = checkValue
    ? expenses.filter((expense) => expense.amount > 100)
    : expenses;

  let total = filteredExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  filteredExpenses.forEach((expense) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>Expense:</strong> ${expense.name} <br>
        <strong>Amount:</strong> $${expense.amount}
        <hr>`;
    expenseList.appendChild(li);
  });

  showPrice.textContent = `Total: $${total}`;
}

showData();

selected.addEventListener("click", () => {
  checkValue = selected.checked; //
  showData();
});
