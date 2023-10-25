import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")

  console.log({color});
  return (
    <div className=" w-full h-screen  flex justify-center items-center duration-1000 "
    style={{backgroundColor : color}}>

        <div className=" circle gap-7 h-56 rounded-full flex justify-center items-center flex-col   bg-cyan-50  flex-wrap tr ">
       <p>
        <button onClick={()=>(setColor("green"))} className=" text-center border-black rounded-full bg-green-500 w-14 h-6 text-white  ">Green</button>
        </p> 
<p className='  '>

        <button onClick={()=>setColor("blue")} className=" text-center m-2 border-black rounded-full bg-blue-500 w-14 h-6 text-white  ">Blue </button>

        <button onClick={()=>setColor("red")} className=" text-center m-2 border-black rounded-full  bg-red-500 w-14 h-6 text-white  ">Red</button>

        <button onClick={()=>setColor("yellow")} className=" text-center m-2 border-black rounded-full bg-yellow-400 w-14 h-6 text-white  ">Yellow</button>
</p>
<p>
        <button onClick={()=>setColor("black")} className=" text-center border-black rounded-full bg-black w-14 h-6 text-white  ">black</button>
</p>

       </div>
    </div>
    

  )
}

export default App
