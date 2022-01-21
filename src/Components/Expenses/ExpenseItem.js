import "./ExpenseItem.css";
import {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {

// const [title,setTitle]=useState(props.title);

  // const clickHandler =()=>{
  //   setTitle("anmol");
  
  //   console.log(title);
  // }
 
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
      
      </div>
    </Card>
  );
}

export default ExpenseItem;
  {/* <button  onClick={clickHandler}>Change title</button> */}