import React from 'react';
import {useState} from 'react'

function ChildComponent({parentFunction}) {
  const [childName, setChildName] = useState("")
  return (
    <div className="App">
      {/* function is passed as a prop and can be called here and run in the parent component */}
      <input type="text" name="name" value={childName} onChange={(e) => setChildName(e.target.value)}/>
      <button onClick={()=> parentFunction(childName)}>Baby Cries</button>
    </div>
  );
}

export default ChildComponent;
