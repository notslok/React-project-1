import React, { useState } from "react";

import Card from "../UI/Card.js";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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

  // const expenseDisplayComponent =
  //   filteredExpenses.length === 0 ? (
  //     <p>No items found!!!</p>
  //   ) : (
  //     filteredExpenses.map((expense) => {
  //       return (
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       );
  //     })
  //   );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          currentFilter={filter}
          onFilterSelect={filterSelectHandler}
        />
        {/* transforming each element in expense array into a component and rendering it */}

        {/* {expenseDisplayComponent} */}
        <ExpensesList items={filteredExpenses}/>
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
