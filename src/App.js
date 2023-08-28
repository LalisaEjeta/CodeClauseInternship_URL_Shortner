import './App.css';
import DisplayShorted from './Comps/DisplayShorted';
import InputURL from './Comps/InputURL';
import { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <header className="App-header bg-dark p-5 rounded-5">
        <InputURL setInputValue={setInputValue} />
        <DisplayShorted inputValue={inputValue} />
      </header>
    </div>
  );
}

export default App;
