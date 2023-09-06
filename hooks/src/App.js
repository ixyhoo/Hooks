import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [myNumber, setMyNumber] = useState();
  const selectedNumber = useRef();
  useEffect(() => {
  console.log("number is change");
  }, [myNumber]);
  return (
    <div className="app">
      <h1>FLY</h1>
      <p>{myNumber}</p>
      <button onClick={() => setMyNumber(Number(myNumber) + 1)}>incrementer + 1</button>
      <label htmlFor="">Number beguin</label>
      <input 
      type="number" 
      defaultValue={0} 
      ref={selectedNumber}
      onChange={(e) => setMyNumber(selectedNumber.current.value)}/>
    </div>
  );
};

export default App;
