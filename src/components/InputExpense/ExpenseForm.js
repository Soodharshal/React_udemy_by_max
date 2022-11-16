import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
  
//   const [userInput, setTitle] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // Sol1
    // <------------------------------------------>
    // setTitle({
    //   title: event.target.value,
    //   amount: "",
    //   date: "",
    // });
    // or; // Sol2 using spread operator and then overide the new valeu
    // <------------------------------------------>
    // setTitle({
    //   ...userInput,
    //   title: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: parseInt(amount),
      date: new Date(date),
    };
    // console.log(expenseData)
    props.onSaveExpensionData(expenseData);
    setAmount('');
    setTitle('');
    setDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value = {title} 
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value = {amount} 
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value = {date} 
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expenses </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
