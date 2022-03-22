import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from './service/getAllCurrencies';

function App() {
  const [allCurrencies, setAllCurrencies] = useState([''])

  useEffect(() => {
    const getArrayCurrencies = async () => {
      const arrayCurrencies = await getAllCurrencies()
      setAllCurrencies(arrayCurrencies)
    }
    getArrayCurrencies()
  }, [])

  return (
    <div className="App">
        {String(allCurrencies)}
    </div>
  );
}

export default App;
