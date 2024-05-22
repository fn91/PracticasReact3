import React, { useState } from "react";

function Formulario (){

const [formData,setFormData]=useState({
nombre:"Jandro",
email:"pepgale@gmail.com",
mensaje:"Este es el mensaje que tiene que aparecer correo",


});

const handleInputChange=  (event) => {
const {name,value} = event.target ;
setFormData[{
[name]:value,


}];




}


const handleSubmit = (event)=>{

event.preventDefault ();
console.log(formData);
}

return (

<div>
<h2>Formulario</h2>
<form onSubmit={handleSubmit}>
<label>
Nombre:
<input type="text"
name="nombre"
value={formData.nombre}
onChange={handleInputChange}
/>


</label>

<br />
<label >
Email
<input 
type="text"
name="email"
value={formData.email}
onChange={handleInputChange}
/>


</label>

<br />
<label>
Mensaje
<input 
type="text"
name="mensaje"
value={formData.mensaje}
onChange={handleInputChange}
/>

</label>

<br />

<button
type="submit"

>Enviar</button>


</form>




</div>




)


}

export default Formulario