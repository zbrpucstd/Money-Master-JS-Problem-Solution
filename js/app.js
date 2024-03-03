document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeField = document.getElementById("income");
  const foodField = document.getElementById("food");
  const rentField = document.getElementById("rent");
  const clothesField = document.getElementById("clothes");

  const incomeString = incomeField.value;
  const foodString = foodField.value;
  const rentString = rentField.value;
  const clothesString = clothesField.value;

  const income = parseInt(incomeString);
  const food = parseInt(foodString);
  const rent = parseInt(rentString);
  const clothes = parseInt(clothesString);

  const totalExpense = food + clothes + rent;
  const totalExpenseCalc = income - totalExpense;

  const totalExpenseField = document.getElementById("total-expense");
  totalExpenseField.innerText = totalExpense;

  const balanceField = document.getElementById("balance");
  balanceField.innerText = totalExpenseCalc;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const totalExpenseField = document.getElementById("balance");
  const totalExpenseString = totalExpenseField.innerText;
  const totalExpense = parseInt(totalExpenseString);

  const saveField = document.getElementById("save");
  const saveString = saveField.value;
  const save = parseInt(saveString);
  const savingAmount = totalExpense * (save / 100);

  const SavingAmountField = document.getElementById("saving-amount");
  SavingAmountField.innerText = savingAmount;

  const remainingBalance = totalExpense - savingAmount;
  const remainingBalanceField = document.getElementById("remaining-balance");
  remainingBalanceField.innerText = remainingBalance;
});
