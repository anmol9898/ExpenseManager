import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import "../NewExpense/NewExpense";
import ExpenseFilter from './ExpensesFilter';
import {useState} from 'react';
function Expenses(props)
{
    const [yearFilterValue, setYearFiltervalue]=useState("2020");
    // const [filteredExpenses,setFilteredExpenses]=useState(props.exp);

    // var d1=props.exp[0].date , p1=props.exp[0].price, t1=props.exp[0].title;
    // var d2= props.exp[1].date, p2=props.exp[1].price, t2=props.exp[1].title;
    // var d3=props.exp[2].date, p3=props.exp[2].price, t3=props.exp[2].title;
    // var d4=props.exp[3].date, p4=props.exp[3].price, t4=props.exp[3].title;
    console.log("in expenses.js--expenses array recieved-",props.exp);

    const filterValueHandler=(selectedYear)=>{
        console.log("in expenses");
        console.log(selectedYear);
        setYearFiltervalue(selectedYear);

        // const filteredExpensesArray=props.exp.filter((elem)=>elem.date.getFullYear()===yearFilterValue)
        // setFilteredExpenses(filteredExpensesArray);
    }

    
// props.exp.map((elem,index)=>  
{/* <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>) */}
    return(
        <div>

        <Card className="expenses">
        <ExpenseFilter selectedYear={yearFilterValue} onFilterSelect={filterValueHandler}/>
        {/* selected year sent also because we wanted to show that value  */}
        {
        props.exp.map((elem,index)=>  
        <ExpenseItem key={index} title={elem.title} date={elem.date} amount={elem.price}/>)
        }

        {/* <ExpenseItem date={d1} amount={p1} title={t1}/>
        <ExpenseItem date={d2} amount={p2} title={t2}/>
        <ExpenseItem date={d3} amount={p3} title={t3}/>
        <ExpenseItem date={d4} amount={p4} title={t4}/> */}

        {/* we can also transfer only the object here like:-
        <ExpenseItem obj={props.exp[0]}
        , and then distibute into date , title and amount  in the expenseItem component itself like:-
        props.obj.date */}
       
        </Card>
        </div>
      
        );
    }
export default Expenses;