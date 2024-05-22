import React, { useState, useEffect } from "react";


function UseEffect (){

const [notas,setNotas] = useState ([])
const [valorInput,setValorInput]=useState ("")


const agregarNota = () =>{
if (valorInput.trim() !== "") {

    setNotas((prevNotas)=> [
        ...prevNotas,

        {id:Date.now(),texto:valorInput, completada:false}

    ]);

    setValorInput("");
}
};

const eliminarNota = (id) =>{

const notasActualizadas = notas.filter((notas)=>notas.id !==id)
setNotas(notasActualizadas)



}

const completarNota = (id) =>{
const notasActualizadas =notas.map ((nota) => {

if (nota.id===id){
    return { ...nota, completada: !nota.completada};

}
return nota

});
setNotas(notasActualizadas)


}

const handleCheckboxChange = (id) => {
completarNota(id)

}

useEffect(() =>{
    console.log ("Effect!")
    // Lo que se ejecuta
return () => {
console.log("limpieza")


}

},[notas.length])

return (

<div style={{maxWidth:"400px",margin:"auto"}}>
<h2>Lista de notas</h2>
<input type="text" 
value={valorInput} 
onChange={(e) =>setValorInput(e.target.value)}
placeholder="Escribe una nota..."
/>

<button onClick={agregarNota}>Agrega una nota</button>     
<ul style={{listStyle:"none",padding:0}}>
    {notas.map((nota)=>(
        <li key={nota.id} style={{marginBottom:"8px"}}>
        {!nota.completada && (
        <input type="checkbox"
            checked={nota.completada}
            onChange={()=> handleCheckboxChange(nota.id)}
        />
        )}


        <span style={{textDecoration:nota.completada?"line-trough": "none", marginLeft:"8px"}}>


        {nota.texto}

        </span>


        <button style={{marginLeft:"8px"}}
        onClick={()=> eliminarNota(nota.id)}
      
        >
            Eliminar
        </button>




        </li>


    ))}



</ul>
    


</div>





)


}




export default UseEffect
