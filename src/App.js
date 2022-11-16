// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/InputExpense/NewExpense";
function App() {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "toilet paper",
      amount: 10.98,
      date: new Date(),
    },
    {
      id: 2,
      title: "Apples",
      amount: 5.03,
      date: new Date(),
    },
    {
      id: 3,
      title: "stationary items",
      amount: 20.5,
      date: new Date(),
    },
  ];

  const [expenses, SetNewExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    SetNewExpenses((prevExpense) => {
      return [expense,...prevExpense];
    });
    // SetNewExpenses([...expenses, expense]);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
