import React, { useState } from "react";
import './App.css';
import './index.css'
export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  //Logic

  let calBmi = (e) => {
     e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage('You are underweight')
      }else if(bmi>=25&&bmi<30){
        setMessage('You are Healthy')
      }
      else{
        setMessage('You are overweight')
      }
    }
  };

let reload=()=>{
  window.location.reload()
}
  return (
    <div className="App">
      <div className="container">
      
        <form className="body" onSubmit={calBmi}>
        <h2 className="heading">BMI calculator</h2>
          <div>
            <label>Weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn2 btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
