var data = [];

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

function onSelectType(e) {
  let type = document.getElementById("budgetType").value;

  if (type === "income") {
    document.getElementById("addButton").style.background = "green";
  } else {
    document.getElementById("addButton").style.background = "#dc0000";
  }
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

function getTotalSum(type) {
  let sum = 0;
  data.map((item) => {
    if (item.type === type) {
      sum += item.value;
    }
  });
  return sum;
}

function updateTotalValues() {
  document.getElementById("incomeTotal").textContent = `+ ${getTotalSum(
    "income"
  ).toFixed(2)}`;
  document.getElementById("expenseTotal").textContent = `- ${getTotalSum(
    "expense"
  ).toFixed(2)}`;
  document.getElementById("totalBudget").textContent = `${(
    getTotalSum("income") - getTotalSum("expense")
  ).toFixed(2)}`;
}

function addToBudget() {
  let budgetEntry = getEntryDetails();
  addRow(budgetEntry);
  data.push(budgetEntry);
  updateTotalValues();
}

function removeFromBudget(id) {
  const itemId = `item-${id}`;
  data = data.filter((item) => item.id !== id);
  removeRow(itemId);
  updateTotalValues();
}

function addRow(budgetEntry) {
  const { description, value, type, id } = budgetEntry;
  var html;
  if (type === "income") {
    html = `<div class="budgetEntry incomeText" id="item-${id}">
    <span class="salaryText">${description}</span>
    <div class="leftContainer"> 
    <span class="salaryAmount">${value.toFixed(2)}</span>
    <div class="deleteIcon" onClick="removeFromBudget(${id})"><i class="fa fa-trash"></i></div>
    </div>
    </div>`;
    document
      .querySelector(".incomeContainer")
      .insertAdjacentHTML("beforeend", html);
  } else {
    html = `<div class="budgetEntry expenseText" id="item-${id}">
    <span class="salaryText">${description}</span>
    <div class="leftContainer"> 
    <span class="salaryAmount">${value.toFixed(2)}</span>
    <div class="deleteIcon" onClick="removeFromBudget(${id})"><i class="fa fa-trash"></i></div>
    </div>
    </div>`;
    document
      .querySelector(".expenseContainer")
      .insertAdjacentHTML("beforeend", html);
  }
}

function removeRow(itemId) {
  document.getElementById(itemId).remove();
}
