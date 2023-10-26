
import React,{ useId } from 'react';


function InputBox({
    label,
    amount  ,
    onAmntchange,
    onCurrchng,
    currOptions = [],
    selectCurren = "usd",
    amtdis = false,
    cuurendis= false,
    className = "",
}) {
   
    const amtInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amtInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    id={amtInputId}
                    type="number"
                    placeholder="Amount"
                    disabled= {amtdis}
                    value={amount}
                    onChange={(e)=>onAmntchange && onAmntchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurren}
                    onChange={(e)=>onCurrchng && onCurrchng(e.target.value) }
                    disabled = {cuurendis}
                >
                    
                      {currOptions.map((cur)=>(

                        <option key={cur} value={cur}>{cur}</option>
                      ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;



