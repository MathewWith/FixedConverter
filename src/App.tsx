import React, { useEffect, useState } from 'react';
import './App.scss';
import {reverseButton} from './helpers/reverseButton';
import { getAllCurrencies, getConvertedValue, getLatestPrice } from 'src/service/CurrencyService';
import { ListCurrencies } from 'src/components/ListCurrencies/ListCurrencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([''])
  const [leftInputValue, setLeftInputValue] = useState<string|number>('')
  const [rightInputValue, setRightInputValue] = useState<string|number>('')
  const [isReversed, setIsReversed] = useState<boolean>(false)
  const [leftCurrency, setLeftCurrency] = useState<string>(allCurrencies[0])
  const [rightCurrency, setRightCurrency] = useState<string>(allCurrencies[0])
  const [latestPrice, setLatestPrice] = useState<string>('')

  useEffect(() => {
    const getCurrencies = async () => {
      const currencies = await getAllCurrencies()
      setAllCurrencies(currencies)
    }
    getCurrencies()
  }, [])

  useEffect(() => {
      const setValueLatestPrice = async () => {
        const response = await getLatestPrice(leftCurrency, rightCurrency)
        setLatestPrice(response)
      }
      setValueLatestPrice()
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
      <h1 className='container-title'>Change money</h1>

      <ListCurrencies 
        allCurrencies={allCurrencies} 
        setLeftCurrency={setLeftCurrency} 
        setRightCurrency={setRightCurrency}
        leftCurrency={leftCurrency}
        rightCurrency={rightCurrency}/>
      <div className='container-inputs'>
          <input type="text" 
                 onClick={() => setIsReversed(true)} 
                 onChange={(e) => setLeftInputValue(e.target.value)}
                 value={leftInputValue}
          />
          <input type="text" 
                 onClick={() => setIsReversed(false)} 
                 onChange={(e) => setRightInputValue(e.target.value)}
                 value={rightInputValue}
          />
      </div>
      <button className='container-btn'
        onClick={() => 
          reverseButton({ leftCurrency,
                          rightCurrency,
                          setLeftCurrency,
                          setRightCurrency })
        }
      >Reverse</button>
    </div>
  );
}

export default App;
