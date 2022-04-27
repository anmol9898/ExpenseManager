import './NewExpense.css';
import "./ExpenseForm";
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense= (props)=>{
const [showForm,setShowForm] = useState(false);

const saveExpenseDataHandler=(expenseData)=>{
const enteredData={
    ...expenseData,
    id:Math.random().toString()
}
console.log("in newExpense.js",enteredData);
props.onAddExpense(enteredData);
setShowForm(false);
}
  const addNewExpenseHandler = () => {
    setShowForm(true);
  };
  const triggerStateOnCancel=()=>{
      setShowForm(false);
  }
return(
    <div className='new-expense'>
        {!showForm && <button onClick={addNewExpenseHandler}> Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={triggerStateOnCancel}></ExpenseForm>}
    </div>
);

}

export default NewExpense;