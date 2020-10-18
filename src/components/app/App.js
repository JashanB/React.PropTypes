import React from 'react';
import './App.css';
import Display from '../display';

function App() {
  const displayNum = 'bobb';

  return (
    <div className="App">
      <Display displayNum={displayNum} />
    </div>
  );
}

export default App;
