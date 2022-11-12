import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // alternative way...using only one state.....
  // const [userInput,setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value); //always a string datatype by default
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //always a string datatype by default
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //always a string datatype by default
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);//passing expenseData up the component chain
    //drop/delete all values in form after submission by passing in emty string a.k.a "TWO WAY BINDING"
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" value = {userInput.enteredTitle} onChange={titleChangeHandler}/> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
