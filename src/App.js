import "./App.css";
import {useState} from 'react';
import Expenses from "./Components/Expenses/Expenses";
import React from "react";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { date: new Date(2021, 11, 19), title: "Car insurance 1", price: 4000 },
  { date: new Date(2021, 5, 20), title: "Food", price: 3000 },
  { date: new Date(2021, 6, 21), title: "Misc", price: 200 },
  { date: new Date(2021, 0, 22), title: "Work", price: 5000 },
];

const App=()=> {

  const [expenses,setExpenses] =useState(DUMMY_EXPENSES);
 

  const addExpenseHandler=(expense)=>{

    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    console.log("expense in app.js",expense);
   
  }
  

  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses exp={expenses} />
    </div>
  );
}

export default App;
