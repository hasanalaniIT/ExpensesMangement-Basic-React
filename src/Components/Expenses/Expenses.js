import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });
  let expenseContent = <p>No Expenses Found!!</p>;

  if (filterdExpenses.length > 0) {
    expenseContent = filterdExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
