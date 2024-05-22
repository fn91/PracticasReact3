import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ListadeNotas (){

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

    const valores = useContext(ThemeContext)
    console.log(valores)

    const {theme,toggleTheme} =useContext(ThemeContext)

    const styles ={
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color:theme === "dark" ? "#fff" :"#333",
    };

    const buttonStyles ={
        backgroundColor: theme ==="dark" ? "#444" : "#f4f4f4",
        color:theme === "dark" ?"#fff" :"#333",
        border:"1px solid",
        borderColor: theme === "dark" ? "#fff" : "#333",
        padding: "8px 16px",
        borderRadius:"4px",
        cursor:"pointer",
    };

    const inputStyles ={
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color:theme === "dark" ? "#fff" :"#333",     
        border:"1px solid",
        borderColor: theme === "dark" ? "#fff" : "#333",  
        padding: "8px 16px",
        borderRadius:"4px",
        cursor:"pointer", 


    }
    



return (

<div style={{maxWidth:"400px",margin:"auto", ... styles}}>
<h2>Lista de notas</h2>
<input type="text" 
value={valorInput} 
onChange={(e) =>setValorInput(e.target.value)}
placeholder="Escribe una nota..."
style={inputStyles}
/>

<button  style={buttonStyles} onClick={agregarNota}>Agrega una nota</button>     
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

<button style={buttonStyles} onClick={toggleTheme}>
    Cambiar tema {theme==="light" ? "oscuro" : "claro"}
</button>
    


</div>





)


        }




export default ListadeNotas
