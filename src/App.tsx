import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from './service/getAllCurrencies';

function App() {
  const [allCurrencies, setAllCurrencies] = useState([''])

  useEffect(() => {
    const res = async () => {
      const data = await getAllCurrencies()
      setAllCurrencies(data)
    }
    res()
  }, [])

  return (
    <div className="App">
        {String(allCurrencies)}
    </div>
  );
}

export default App;
