import React, { useEffect, useState , FC} from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/service/currency';
import { ListCurrencies } from 'src/components/List-currencies/List-currencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([''])
  const [leftInputValue, setLeftInputValue] = useState<string>('')
  const [rightInputValue, setRightInputValue] = useState<string>('')
  const [isReversed, setIsReversed] = useState<boolean>(false)

  useEffect(() => {
    const getCurrencies = async () => {
      const currencies = await getAllCurrencies()
      setAllCurrencies(currencies)
    }
    getCurrencies()
  }, [])

  return (
    <div className="App">
      <h1>Change money</h1>

      <ListCurrencies allCurrencies={allCurrencies} />
      <div>
          <input type="text" onClick={() => setIsReversed(prev => !prev)} onChange={(e) => setLeftInputValue(e.target.value)}/>
          <input type="text" onClick={() => setIsReversed(prev => !prev)} onChange={(e) => setRightInputValue(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
