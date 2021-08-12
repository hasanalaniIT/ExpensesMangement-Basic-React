import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};
export default Expenses;
