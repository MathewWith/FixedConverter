import React, { useEffect, useState } from 'react';
import './App.scss';
import {reverseButton} from './helpers/reverseButton';
import { getAllCurrencies, getConvertedValue, getCurrenciesSymbols, getExchangeRate } from 'src/service/CurrencyService';
import { ListCurrencies } from 'src/components/ListCurrencies/ListCurrencies';
import { addSymbolToInput } from './helpers/addSymbolToInput';
import {Symbol} from 'src/types/FunctionProps';

function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([''])
  const [leftInputValue, setLeftInputValue] = useState<number>(0)
  const [rightInputValue, setRightInputValue] = useState<number>(0)
  const [isReversed, setIsReversed] = useState<boolean>(false)
  const [leftCurrency, setLeftCurrency] = useState<string>('')
  const [rightCurrency, setRightCurrency] = useState<string>('')
  const [exchangeRate, setExchangeRate] = useState<string|number>('')
  const [allCurrenciesSymbols, setAllCurrenciesSymbols] = useState<Symbol[]>([])
  const [leftSymbol, setLeftSymbol] = useState<string|undefined>()
  const [rightSymbol, setRightSymbol] = useState<string|undefined>()

  useEffect(() => {
    addSymbolToInput({leftCurrency, rightCurrency, allCurrenciesSymbols, setLeftSymbol, setRightSymbol})
  },[allCurrenciesSymbols, leftCurrency, rightCurrency])

  useEffect(() => {
    const setSymbolsAndAllCurrencies = async () => {
      const response = await getCurrenciesSymbols()
      const currencies = await getAllCurrencies()
      setAllCurrencies(currencies)
      setAllCurrenciesSymbols(response)
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
        <div className='container__inputs-content'>
          <div className='container__symbol'>{leftSymbol}</div>
          <input type="text" 
                className='container__input' 
                onClick={() => setIsReversed(true)} 
                onChange={(e) => setLeftInputValue(+e.target.value)}
                value={leftInputValue}
          />
        </div>
        <div className='container__inputs-content'>
          <div className='container__symbol'>{rightSymbol}</div>
            <input type="text" 
                  className='container__input' 
                  onClick={() => setIsReversed(false)} 
                  onChange={(e) => setRightInputValue(+e.target.value)}
                  value={rightInputValue}
            />
        </div>
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
