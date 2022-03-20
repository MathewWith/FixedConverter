import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/helpers/getAllCurrencies';
import { ListCurrencies } from 'src/helpers/List-currencies/List-currencies';

function App() {
  
  const [allCurrencies, setAllCurrencies] = useState([])
  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')
  const [reversed, setReversed] = useState(false)

  useEffect(() => {
    getAllCurrencies(setAllCurrencies)
  }, [])

  return (
    <div className="App">
      <h1>Change money</h1>
      {ListCurrencies(allCurrencies)}
      <div>
          <input type="text" onClick={() => setReversed(prev => !prev)} onChange={(e) => setFirstInputValue(e.target.value)}/>
          <input type="text" onClick={() => setReversed(prev => !prev)} onChange={(e) => setSecondInputValue(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
