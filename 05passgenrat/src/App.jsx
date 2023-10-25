import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  // here i understand how to take number only between length and run loop
  // for differ position elements and store in var

  //   let more = ""
  //  for (let i = 1; i <=8; i++) {

  //   let check = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
  //  let ch =  Math.floor(Math.random() *check.length +1)
  //  let chetan  = check.charAt(ch)
  //  more +=chetan
  //  }

  //  console.log(more);

  const [length, setlength] = useState(8);

  const [numalow, setnumalow] = useState(false);

  const [charalow, setcharalow] = useState(false);

  const [password, setpass] = useState("");

  const [copy, copied] = useState("copy");

  const [isActive, setIsActive] = useState(false);

  const toggleStyle = () => {
    setIsActive(!isActive);
  };
  const passgen = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numalow) str += "1234567890OPASDFGHJKLZXCVBNMqwertyuiopasdfghjk852147863248636987412";
    if (charalow) str += "@#$%&*+-?=/OPASDFGHJKLZXCVBNMqwertyuiopasdfghjk@#$%&*+-?=/@#$%&*+-?=/";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    copied("copy")
    setIsActive(false)
    setpass(pass);
  }, [length, numalow, charalow, setpass]);


  const copyclipboard = useCallback(() => {
    copied("copied")
        setIsActive(true)
    window.navigator.clipboard.writeText(password);

  }, [password]);

  useEffect(() => {
    passgen();
  }, [length, numalow, charalow, setpass, passgen]);

  return (
    <>
      <div
        className=" w-full max-w-md mx-auto shadow-md bg-slate-500
     rounded-lg  px-4 my-8  text-orange-500    "
      >
        <h1 className=" text-4xl text-center ">Pass Genrator</h1>

        <div
          className=" flex items-center shadow-xl border
       border-black h-8 rounded-lg overflow-hidden  mb-4"
        >
          <input
            type="text"
            value={password}
            className=" w-full py-1 h-8  px-3 my-4  "
            placeholder="Password"
            readOnly
          />

          <button style={{ backgroundColor: isActive ? 'rgb(4, 209, 4)' : 'blue',
          color:isActive ? 'black' : 'white' }
          
        }
            className=" border-l
            border-black outline-none h-8  s
         bg-blue-600 px-3 py-0.5 shrink-0"
         onClick={copyclipboard }
           
          >
           {copy}
          </button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className="  flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className=" text-center">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numalow}
              onChange={() => {
                setnumalow((p) => !p);
              }}
            />
            <h2>Numbers</h2>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charalow}
              onChange={() => {
                setcharalow((p) => !p);
              }}
            />
            <h2>Character</h2>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
