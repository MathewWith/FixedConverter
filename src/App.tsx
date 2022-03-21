import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/service/getAllCurrencies';
import { ListCurrencies } from 'src/components/List-currencies/List-currencies';

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
      <h1>Change money</h1>
      <ListCurrencies allCurrencies={allCurrencies} />
    </div>
  );
}

export default App;
