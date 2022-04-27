// import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import "../NewExpense/NewExpense";
import ExpenseFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props)
{
    const [yearFilterValue, setYearFiltervalue]=useState("2020");
    
    // var d1=props.exp[0].date , p1=props.exp[0].price, t1=props.exp[0].title;
    // var d2= props.exp[1].date, p2=props.exp[1].price, t2=props.exp[1].title;
    // var d3=props.exp[2].date, p3=props.exp[2].price, t3=props.exp[2].title;
    // var d4=props.exp[3].date, p4=props.exp[3].price, t4=props.exp[3].title;
   
    const filterValueHandler=(selectedYear)=>{      
        setYearFiltervalue(selectedYear);
    }
       
    const filteredExpenses=props.exp.filter((elem)=>elem.date.getFullYear()==yearFilterValue)
            
            // let expensesContent = <p>No content found</p>;
            // if(filteredExpenses.length>0)
            // {
            //     expensesContent=filteredExpenses.map((elem,index)=>  
            //     <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>);
            // }
        

    return(
        <div>

        <Card className="expenses">
        <ExpenseFilter selectedYear={yearFilterValue} onFilterSelect={filterValueHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
        
        {/* selected year sent also because we wanted to show that value  */}
        {/* {filteredExpenses.length===0 ? <p>No content found</p> :  filteredExpenses.map((elem,index)=>  
        <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>)} */}

        {/* {filteredExpenses.length===0  &&  <p>No content found</p>}
        {filteredExpenses.length>0 && filteredExpenses.map((elem,index)=>  
        <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>)} */}

        {/* <ExpenseItem date={d1} amount={p1} title={t1}/>
        <ExpenseItem date={d2} amount={p2} title={t2}/>
        <ExpenseItem date={d3} amount={p3} title={t3}/>
        <ExpenseItem date={d4} amount={p4} title={t4}/> */}

       
        </Card>
        </div>
      
        );
    }
export default Expenses;