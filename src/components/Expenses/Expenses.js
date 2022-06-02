import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses;
  const listOfExpenses = expenses.map((e) => {
    return (
      <ExpenseItem
        title={e.title}
        amount={e.amount}
        date={e.date}
      ></ExpenseItem>
    );
  });
  return (
    <Card className="expenses">
      {listOfExpenses}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
