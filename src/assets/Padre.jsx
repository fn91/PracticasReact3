import React, {useState} from "react";
import Hijo from "./Hijo";

export default function Padre (){

const [colores,setColores]=useState({})



const handleColorChange= (color,index)=>{
setColores({...colores,[index]:color})
console.log(colores)



}

return (

<div style={{border:"2px solid white",padding: "10px"}}>
<h2>Selecciona colores</h2>
<Hijo onChangeColor={handleColorChange} index={1}/>
<Hijo onChangeColor={handleColorChange} index={2}/>
<p>Color seleccionado Hijo 1: {colores[1]}</p>
<p>Color seleccionado Hijo 2: {colores[2]}</p>

</div>


)




}