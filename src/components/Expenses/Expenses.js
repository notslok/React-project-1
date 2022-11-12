import React, { useState } from "react";

import Card from "../UI/Card.js";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState("2020");

  const filterSelectHandler = (event) => {
    console.log(event); //filter data being returned
    setFilter(event); //here event = selected year
  };

  //
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter; //creating a new auxiliary array to store filtered data
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          currentFilter={filter}
          onFilterSelect={filterSelectHandler}
        />
        {/* transforming each element in expense array into a component and rendering it */}

        {/* {expenseDisplayComponent} */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
      </Card>
    </div>
  );
}

export default Expenses;
