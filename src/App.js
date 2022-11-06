// import logo from "./logo.svg";
import React,{useState} from "react";

import "./App.css";
import "./components/Expenses/Expenses.css";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New Desk (ply)",
      amount: 320,
      date: new Date(2022, 2, 12),
    },
  ];

  //legacy code...under the hood of jsx
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "lets get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);//using usestate/hooks to update expenses array
  
  const addExpenseHandler = (expense) => {
    //  console.log(expense);
     setExpenses((prevExpenses)=>{//extracting the prevExpense and then adding new expense to it
      return [expense,...prevExpenses]//doin it this way bcz the new state depends on the previous state value
     })
  }
  return (
    <div>
      <h2>lets get started</h2>
      {/* passing the addExpenseHandler fn down the chain for execution */}
      {/* for lifting state up */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
