import React from 'react';
import './App.css';
import Display from '../display';

function App() {
  const displayNum = {
    number: 2
  };

  return (
    <div className="App">
      <Display displayNum={displayNum} />
    </div>
  );
}

export default App;
