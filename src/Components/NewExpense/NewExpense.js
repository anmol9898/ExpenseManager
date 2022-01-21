import './NewExpense.css';
import "./ExpenseForm";
import ExpenseForm from './ExpenseForm';

const NewExpense= (props)=>{

const saveExpenseDataHandler=(expenseData)=>{
const enteredData={
    ...expenseData,
    id:Math.random().toString()
}
console.log("in newExpense.js",enteredData);
props.onAddExpense(enteredData);
}
return(
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
);

}

export default NewExpense;