

import React, {useState} from "react";



 export default function Hijo(onChangeColor,index) {

const colors = ["red","blue","green","yellow"];

const [SelectorColor,setSelectorColor]= useState("");
 
const handleColorChange=(color) => {
setSelectorColor(color,index);
onChangeColor(color,index)


 };   


return (

<div
style={{
border: `1px solid ${SelectorColor}`,


}}

>
<h3 style={{color:"white"}}>Elige un color:</h3>
<div style={{display:"flex"}}>
{colors.map((color) =>(
<div
 key={color}
 style={{
width: "50px",
height:"50px",
backgroundColor:color,
margin:"5px",
cursor:"pointer",


 }}
 onClick={()=>handleColorChange(color)}
 
 />

 ))}



 </div>



 </div>



);







}


