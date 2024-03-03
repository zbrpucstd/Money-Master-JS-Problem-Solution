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

  const totalExpenseCalc = income - (food + clothes + rent);

  const totalExpenseField = document.getElementById("total-expense");
  totalExpenseField.innerText = totalExpenseCalc;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const totalExpenseField = document.getElementById("total-expense");
});
