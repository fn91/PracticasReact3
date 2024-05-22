import React, {useState,useEffect} from "react";
import { useRef } from "react";

const Formulario = () => {

const [inputValueState, setinputValueState] =useState ("");
const inputRef = useRef(null);
const prevRef= useRef ('');
console.log(inputRef)

useEffect(()=>{
    prevRef.current=inputValueState
},[inputValueState])

const handleChangeState = (e) =>{
    setinputValueState(e.target.value)

}


const handleChangeRef= (e) => {

inputRef.current = e.target.value


}

return (

<div>
<h2>useState</h2>
<input
type="text"
value={inputValueState}
onChange={handleChangeState}
placeholder="useState"
/>
<h2>useRef</h2>
<input
 type="text"
ref={inputRef}
 onChange={handleChangeRef} 
 placeholder="useRef" />

    <div>El estado es {inputValueState}pero antes era{prevRef.current} </div>
</div>




)

}



export default Formulario