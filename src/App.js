import React from "react";
import {useState, useEffect} from 'react'
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  
  const [name,setName] = useState("");

  useEffect(() => {
    setName("Ismail")
  }, []);


  // Variable Assignments
  // Notice that none exist after the return statement
  let numArray = ["1", "2", "3", "4", "5"];
  let displayHidden = numArray || false;
 
  //map function as a higher order function which created <p> JSX
  let message = numArray.map((num) => {
    return <p key={num}>{num}</p>;
  });

  //function (expression) is defined here
  const parentFunction = (text) => {
      setName(text);
  };

  // TODO: This thing 

  return (
    <div className="App">
      <header className="App-header">
        <div hidden={displayHidden}>{message}</div>
        {/* function (expression) is passed here */}
        <ChildComponent parentFunction={parentFunction} />
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
