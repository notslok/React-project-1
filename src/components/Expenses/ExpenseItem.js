import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //passing parameters i.e. props
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "car insurance";
  //   const expenseAmt = 287.6;
  //   {console.log(props.date);}
  //   {console.log(props);}

  const [title, setTitle] = useState(props.title);//re-renders the component where this state variable is situated/ is registered

  const clickHandler = () => {
    // console.log("Clicked!!!");
    setTitle("Updated!!!");//updates the selected state
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
