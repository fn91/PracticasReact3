
import React, {useState,useEffect} from "react";


const MousePositionComponent = () =>{
    const[isSuscribed,setisSuscribed] = useState (false);
    const[mousePosition,setmousePosition] = useState ({x:0, y:0});


    useEffect (() => {

     
        const updateMousePosition =(e)=> {
            setmousePosition ({x:e.clientX , y:e.clientY})
        };
            console.log("useEffect")

        if (isSuscribed){

            window.addEventListener("mousemove",updateMousePosition)
        
        }
        return () => {
                console.log("limpieza")

                window.removeEventListener("mousemove,",updateMousePosition)

        }

    }, [isSuscribed])

    const toggleSubscription = () =>{
        setisSuscribed((prevState) => !prevState);

    }

    

    return (
        <div
        style={{
            width:"100 px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",

        }}
        >
            <p>Posicion del raton en la pantalla </p>
            <p>X: {mousePosition.x}</p>
            <p>X: {mousePosition.y}</p>
            <button onClick={toggleSubscription}>
            {isSuscribed ? "Cancelar suscripcion": "Suscribir"}
            </button>



        </div>

    )
  


    }

        export default MousePositionComponent