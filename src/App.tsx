import React , {useState, useEffect} from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/service/api/get-all-currencies';
import { ListCurrencies } from 'src/components/List-currencies/List-currencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState([''])
  const [leftInputValue, setLeftInputValue] = useState('')
  const [rightInputValue, setRightInputValue] = useState('')
  const [isReversed, setIsReversed] = useState(false)

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

      {ListCurrencies(allCurrencies, leftInputValue, rightInputValue, isReversed, setLeftInputValue, setRightInputValue)}
      <div>
          <input type="text" onClick={() => setIsReversed(true)} onChange={(e) => setLeftInputValue(e.target.value)}/>
          <input type="text" onClick={() => setIsReversed(false)} onChange={(e) => setRightInputValue(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
