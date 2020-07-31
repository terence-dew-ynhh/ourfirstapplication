import React from 'react';


function ChildComponent({parentFunction}) {
  return (
    <div className="App">
      {/* function is passed as a prop and can be called here and run in the parent component */}
      <button onClick={()=> parentFunction('Wahh')}>Baby Cries</button>
    </div>
  );
}

export default ChildComponent;
