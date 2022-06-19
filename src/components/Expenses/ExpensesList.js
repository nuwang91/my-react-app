import "./ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((e) => {
        return (
          <ExpenseItem
            key={e.id} // Key is added as an performance improvement in order to make list render less frequently
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
