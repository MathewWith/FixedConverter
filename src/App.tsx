import React, { useEffect, useState } from 'react';
import './App.scss';
import {reverseButton} from './helpers/reverseButton';
import { getAllCurrencies, getConvertedValue } from 'src/service/CurrencyService';
import { ListCurrencies } from 'src/components/ListCurrencies/ListCurrencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([''])
  const [leftInputValue, setLeftInputValue] = useState<string|number>('')
  const [rightInputValue, setRightInputValue] = useState<string|number>('')
  const [isReversed, setIsReversed] = useState<boolean>(false)
  const [leftCurrency, setLeftCurrency] = useState<string>('')
  const [rightCurrency, setRightCurrency] = useState<string>('')

  useEffect(() => {
    const getCurrencies = async () => {
      const currencies = await getAllCurrencies()
      setAllCurrencies(currencies)
    }
    getCurrencies()
  }, [])

  useEffect(() => {
    const setConvertedValue = async () => {
      const response = await getConvertedValue(leftCurrency, rightCurrency, leftInputValue)
      setRightInputValue(response)
    }
    setConvertedValue()
  }, [leftInputValue])

  useEffect(() => {
    const setConvertedValue = async () => {
      const response = await getConvertedValue(rightCurrency, leftCurrency, rightInputValue)
      setLeftInputValue(response)
    }
    setConvertedValue()
  }, [rightInputValue])

  return (
    <div className="App">
      <h1>Change money</h1>

      <ListCurrencies 
        allCurrencies={allCurrencies} 
        setLeftCurrency={setLeftCurrency} 
        setRightCurrency={setRightCurrency}
        leftCurrency={leftCurrency}
        rightCurrency={rightCurrency}/>
      <div>
          <input type="text" onClick={() => setIsReversed(prev => !prev)} onChange={(e) => setLeftInputValue(e.target.value)}/>
          <input type="text" onClick={() => setIsReversed(prev => !prev)} onChange={(e) => setRightInputValue(e.target.value)}/>
      </div>
      <button 
        onClick={() => 
          reverseButton({ isReversed, 
                          setRightInputValue, 
                          setIsReversed, 
                          setLeftInputValue, 
                          leftInputValue, 
                          rightInputValue,
                          leftCurrency,
                          rightCurrency,
                          setLeftCurrency,
                          setRightCurrency })
        }
      >Reverse</button>
        
    </div>
  );
}

export default App;
