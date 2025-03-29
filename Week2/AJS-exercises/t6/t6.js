'use strict';

// Sample expenses array
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transportation", amount: 30 },
  { category: "Entertainment", amount: 20 }
];

function calculateTotalExpenses(expenses) {
  return expenses.reduce((total,expense) => total + expense.amount, 0);
}

// Test the calculateTotalExpenses function
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses);

// Output should be:
// 100
