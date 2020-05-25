var data = [];

// var DOMConstants = {
//   addButton,
// };

function Expense(description, value, type, id) {
  this.description = description;
  this.value = value;
  this.type = type;
  this.id = id;
}

function Income(description, value, type, id) {
  this.description = description;
  this.value = value;
  this.type = type;
  this.id = id;
}

function getEntryDetails() {
  let description = document.getElementById("descriptionInput").value;
  let value = parseInt(document.getElementById("valueInput").value);
  let type = document.getElementById("budgetType").value;
  document.getElementById("descriptionInput").value = "";
  document.getElementById("valueInput").value = "";

  const ID = data.length;
  if (type === "income") {
    return new Income(description, value, type, ID);
  } else {
    return new Expense(description, value, type, ID);
  }
}

function addToBudget() {
  let budgetEntry = getEntryDetails();
  addRow(budgetEntry);
  data.push(budgetEntry);
}

function removeFromBudget(id) {
  const itemId = `item-${id}`;
  data = data.filter((item) => item.id !== id);
  console.log("object", data, id);
  removeRow(itemId);
}

function addRow(budgetEntry) {
  const { description, value, type, id } = budgetEntry;
  var html = `<div class="budgetEntry" id="item-${id}">
<span class="salaryText">${description}</span>
<span class="salaryAmount">${value}/-</span>
<button onClick="removeFromBudget(${id})">delete</button>
</div>`;

  if (type === "income") {
    document
      .querySelector(".incomeContainer")
      .insertAdjacentHTML("beforeend", html);
  } else {
    document
      .querySelector(".expenseContainer")
      .insertAdjacentHTML("beforeend", html);
  }
}

function removeRow(itemId) {
  document.getElementById(itemId).remove();
}
