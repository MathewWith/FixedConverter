import React, { useEffect, useState } from 'react';
import './App.scss';
import {reverseButton} from './helpers/reverseButton';
import { getAllCurrencies, getConvertedValue, getCurrenciesSymbols, getExchangeRate } from 'src/service/CurrencyService';
import { ListCurrencies } from 'src/components/ListCurrencies/ListCurrencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([''])
  const [leftInputValue, setLeftInputValue] = useState<string|number>('')
  const [rightInputValue, setRightInputValue] = useState<string|number>('')
  const [isReversed, setIsReversed] = useState<boolean>(false)
  const [leftCurrency, setLeftCurrency] = useState<string>(allCurrencies[0])
  const [rightCurrency, setRightCurrency] = useState<string>(allCurrencies[0])
  const [exchangeRate, setExchangeRate] = useState<string|number>('')
  const [currenciesSymbols, setCurrenciesSymbols] = useState<string[]>([])

  useEffect(() => {
    const setSymbolsAndAllCurrencies = async () => {
      const response = await getCurrenciesSymbols()
      const currencies = await getAllCurrencies()
      setAllCurrencies(currencies)
      setCurrenciesSymbols(response)
    }
    setSymbolsAndAllCurrencies()
  }, [])

  useEffect(() => {
      const updateExchangeRate = async () => {
        const response = await getExchangeRate(leftCurrency, rightCurrency)
        setExchangeRate(response)
      }
      updateExchangeRate()
  },[leftCurrency ,rightCurrency])

  useEffect(() => {
    const setConvertedValue = async () => {
      const response = await getConvertedValue(leftCurrency, rightCurrency, leftInputValue)
      setRightInputValue(response)
    }
    if(isReversed){
      setConvertedValue()
    } 
  }, [leftInputValue, leftCurrency])

  useEffect(() => {
    const setConvertedValue = async () => {
      const response = await getConvertedValue(rightCurrency, leftCurrency, rightInputValue)
      setLeftInputValue(response)
    }
    if(!isReversed){
      setConvertedValue()
    } 
  }, [rightInputValue, leftCurrency])

  return (
    <div className="container">
      <h1 className='container__title'>Change money</h1>

      <ListCurrencies 
        allCurrencies={allCurrencies} 
        setLeftCurrency={setLeftCurrency} 
        setRightCurrency={setRightCurrency}
        leftCurrency={leftCurrency}
        rightCurrency={rightCurrency}/>
      <div className='container__inputs'>
          <input type='text'
                 className='container__input' 
                 onClick={() => setIsReversed(true)} 
                 onChange={(e) => setLeftInputValue(e.target.value)}
                 value={leftInputValue}
          />
          <input type='text'
                 className='container__input' 
                 onClick={() => setIsReversed(false)} 
                 onChange={(e) => setRightInputValue(e.target.value)}
                 value={rightInputValue}
          />
      </div>
      <div className='container__content'>
        <button className='container__content--btn'
          onClick={() => 
            reverseButton({ leftCurrency,
                            rightCurrency,
                            setLeftCurrency,
                            setRightCurrency })
          }
        >Reverse</button> 
        
        <div className='container__content--rate'>{exchangeRate}</div>
      </div>
    </div>
  );
}

export default App;
