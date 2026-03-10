import React, { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNUmberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passwoed, setPassword] = useState("")

const passRef = useRef(null);



const passGen = useCallback(()=>{

let pass = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (let i = 0; i <= length; i++) {
let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setPassword(pass)
},[length, numberAllowed, charAllowed, setPassword])

useEffect(()=>{
passGen()
},[length, numberAllowed, charAllowed, setPassword])


const copyPasswordToClipBoard = useCallback(()=>{
  passRef.current.select();
passRef.current.setSelectionRange(0, 6)
  window.navigator.clipboard.writeText(passwoed);
},[passwoed])

  return (
<div className='w-full max-w-md bg-gray-700 text-red-700 mx-auto my-8 rounded-lg px-4 py-1'>
<h1 className='text-white text-center py-2'>Password Generator</h1>

<div className='flex rounded-lg overflow-hidden mb-4'>
<input type="text" ref={passRef}
value={passwoed}
className='outline-none bg-white w-full px-4 py-1'
 />
 <button onClick={copyPasswordToClipBoard} className='bg-red-700 text-white px-4 py-1'>Copy</button>
</div>


<div className='flex  text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={8}
    max={100}
    value={length}
 onChange={(e)=>{
  setLength(e.target.value)
 }}
 
  />
  <label htmlFor="">Length:{length}</label>
  </div>





<div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={numberAllowed}
onChange={()=>{
  setNUmberAllowed(prev => !prev)
}}

/>
<label htmlFor="">Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={charAllowed}
onChange={()=>{
  setCharAllowed(prev => !prev)
}}

/>
<label htmlFor="">Characters</label>
</div>

</div>
  </div>
  )
}

export default App













