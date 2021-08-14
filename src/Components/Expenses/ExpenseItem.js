import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  console.log("ExpenseItem evaluated by React");
  
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
