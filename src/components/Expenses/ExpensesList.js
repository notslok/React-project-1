import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {

  let expenseDisplayComponent =
    props.items.length === 0 ? (
      <p>No items found!!!</p>
    ) : (
      props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })
    );

      return (
      <ul className="expenses-list">{expenseDisplayComponent}</ul>);
};


export default ExpensesList;
