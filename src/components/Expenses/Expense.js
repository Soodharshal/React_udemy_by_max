import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
const Expense = (props) => {
  const [year,setYear] =useState('2021')
  const filterSelectedYear = (year)=>{
    setYear(year)
  }
  return (
    <div>
      <ExpensesFilter defaultYear = {year} getSelectedYear={filterSelectedYear} />
      <Card className="expenses">
       {props.items.map(items =>
        <ExpenseItem
          title={items.title}
          amount={items.amount}
          date={items.date}
        />)
    }
      </Card>
    </div>
  );
};
export default Expense;
