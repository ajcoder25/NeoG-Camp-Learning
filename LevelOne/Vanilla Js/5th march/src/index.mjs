// step 1 select the element
let listItem = document.getElementById("listItem");
let selectedCheckbox = document.getElementById("selectedCheckbox");
// step 2nd create the array of the object

let employee = [
  { id: 1, name: "Alice", experience: "2 years" },
  { id: 2, name: "Bob", experience: "9 years" },
  { id: 3, name: "John", experience: "19 years" },
];
// step 3rd show the data

function generateData() {
  // filter it steps

  let checkvalue = selectedCheckbox.checked;
  console.log("checked", checkvalue);

  let filterSelection = employee.filter((person) =>
    checkvalue ? parseInt(person.experience) > 5 : employee
  );

  console.log(filterSelection);

  const showData = filterSelection.map(
    (data) => `<li><strong>ID:</strong> ${data.id}<br>
                                              <strong>Name:</strong> ${data.name}<br>
                                              <strong>Experience:</strong>${data.experience}
                                              </li>
                                              <hr>
     
    `
  );

  listItem.innerHTML = showData.join(" ");
}
// step 4th add event listener

generateData();

selectedCheckbox.addEventListener("change", generateData);
