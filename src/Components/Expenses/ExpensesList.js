import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{

    if(props.filteredExpenses.length===0)
    {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    }

    // let expensesContent = <p>No content found</p>;
    // if(props.filteredExpenses.length>0)
    // {
    //     expensesContent=props.filteredExpenses.map((elem,index)=>  
    //     <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>);
    // }

    return(
        // <div className='expenses-list'>

        props.filteredExpenses.map((elem,index)=>  
        <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>)
        // </div>
    );
   

    // return(expensesContent);
    
}
export default ExpensesList;