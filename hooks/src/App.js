import React, { useEffect, useState } from 'react';

const App = () => {
  const [myNumber, setMyNumber] = useState();

  useEffect(() => {
  console.log("number is change");
  }, [myNumber]);
  return (
    <div className="app">
      <h1>FLY</h1>
      <p>{myNumber}</p>
      <button onClick={() => setMyNumber(myNumber + 1)}>incrementer + 1</button>
    </div>
  );
};

export default App;
