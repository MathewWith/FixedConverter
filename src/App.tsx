import {useState, useEffect} from 'react';
import './App.scss';
import { getAllCurrencies } from 'src/service/api/requests-to-api';
import { ListCurrencies } from 'src/components/List-currencies/List-currencies';


function App() {
  
  const [allCurrencies, setAllCurrencies] = useState<string[]>([])
  const [leftInputValue, setLeftInputValue] = useState<string>('')
  const [rightInputValue, setRightInputValue] = useState<string>('')
  const [isReversed, setIsReversed] = useState<boolean>(false)

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

      <ListCurrencies allCurrencies={allCurrencies} 
                      leftInputValue={leftInputValue} 
                      rightInputValue={rightInputValue} 
                      isReversed={isReversed} 
                      setLeftInputValue={setLeftInputValue} 
                      setRightInputValue={setRightInputValue} />
      <div>
          <input  type="text" 
                  onClick={() => setIsReversed(true)} 
                  onChange={(e) => setLeftInputValue(e.target.value)} 
                  value={leftInputValue}/>
          <input  type="text" 
                  onClick={() => setIsReversed(false)} 
                  onChange={(e) => setRightInputValue(e.target.value)} 
                  value={rightInputValue}/>
      </div>
    </div>
  );
}

export default App;
