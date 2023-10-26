import {  useState } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/currenInfo';

function App() {

  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [conamt, setConamt] = useState(0);

  const currencyInfo = useCurrencyinfo(from)

const option =   Object.keys(currencyInfo)

console.log(option);
    const swap = ()=>{

      setFrom(to)
      setTo(from)
      setConamt(amt)
      setAmt(conamt)
    }
 
    const convert = ()=>{
      setConamt(amt*currencyInfo[to])
      console.log(setConamt);
    }
console.log(InputBox);
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(https://media.istockphoto.com/id/818517624/photo/world-currency-exchange-table-graph.webp?b=1&s=170667a&w=0&k=20&c=8kqSHELNHxnYZfF5j6kP9C9YEbcRH1CERPMDPVCHX2k=)`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={ amt}
                              currOptions={option}
                              onCurrchng={(cur)=>setAmt(cur)}
                              selectCurren={from}
                            onAmntChange={(amout) => setAmt(amout)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                              amount={ conamt}
                              currOptions={option}
                              onCurrchng={(cur)=>setTo(cur)}
                              selectCurren={to}
                          amtdis
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                          
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App























