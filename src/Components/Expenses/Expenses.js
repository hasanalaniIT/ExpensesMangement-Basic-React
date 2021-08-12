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
  return ( <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}        
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
    </div>
  );
};
export default Expenses;
