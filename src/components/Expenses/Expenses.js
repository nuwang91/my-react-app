import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const listOfExpenses = filteredExpenses.map((e) => {
    return (
      <ExpenseItem
        key={e.id} // Key is added as an performance improvement in order to make list render less frequently
        title={e.title}
        amount={e.amount}
        date={e.date}
      ></ExpenseItem>
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      {listOfExpenses}
    </Card>
  );
}

export default Expenses;
