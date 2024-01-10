
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
 const [amount,setAmount]=useState(0)
 const [year,setYear]=useState(0)
 const [rate,setRate]=useState(0)
 const [intrest,setIntrest]=useState(0)
 
 const calculate=e=>{
   const output=amount*year*rate/100;
   setIntrest(output)


  }
  const reset=e=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setIntrest(0)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Intrest Calculator</h1>
          <p>Calculate your simple intrest with us ❤️</p>
        </div>
        <div className="total">
          <h3>&#8377;{intrest}</h3>
          <p>Your Total Intrest</p>
        </div>
        <div className="form">
          <form action="">
            <div className="input">
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" /><br />
            <TextField id="filled-basic"  value={year|| ""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="standard" /><br />
            <TextField id="standard-basic" value={rate || ""}  onChange={(e)=>setRate(e.target.value)} label="Rate" variant="standard" /><br />
            </div>
          </form>
          <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

