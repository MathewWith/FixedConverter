import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/service/getAllCurrencies';

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
         <h1>Change money</h1>
    </div>
  );
}

export default App;
