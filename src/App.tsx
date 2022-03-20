import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/helpers/getAllCurrencies';
import { ListCurrencies } from 'src/helpers/list-currencies/List-currencies';

function App() {
  const [allCurrencies, setAllCurrencies] = useState([])

  useEffect(() => {
    getAllCurrencies(setAllCurrencies)
  }, [])

  return (
    <div className="App">
      <h1>Change money</h1>
      {ListCurrencies(allCurrencies)}
    </div>
  );
}

export default App;
