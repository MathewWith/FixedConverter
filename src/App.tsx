import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from './helpers/getAllCurrencies';

function App() {
  const [allCurrencies, setAllCurrencies] = useState([])

  useEffect(() => {
    getAllCurrencies(setAllCurrencies)
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
