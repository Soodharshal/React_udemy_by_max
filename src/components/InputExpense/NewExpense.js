import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const newExpense = props => {
  const SaveExpensionData = (args) => {
    const expenseData = {
        ...args,
        id:parseInt(Math.random().toString().fixed(2))
    }
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensionData={SaveExpensionData} />
    </div>
  );
};

export default newExpense;
