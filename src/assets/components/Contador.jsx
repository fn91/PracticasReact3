import React, {useReducer} from "react";

const contadorReducer =(state,action) => {

    switch (action.type){
        case "incrementar":
            return state + 1;

        case "decrementar":
            return state - 1;

        case "reiniciar":
            return 0;

            default:
           state;



    }


    return state;



}


    


const Contador = () =>{
    // const [contador,setContador] = useState(0);


    const [contador,dispatch]=useReducer(contadorReducer,0)

    const incrementar = () =>{
        dispatch({type:"incrementar"})


    }


  

    const decrementar = () =>{
        dispatch({type:"decrementar"})


    }

    const reiniciar = () =>{
        dispatch({type:"reiniciar"})


    }


        return (

            <div>
                <h2>Contador: {contador}</h2>
              <button onClick={incrementar}>Incrementar</button>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={reiniciar}>Reiniciar</button>


            </div>



        )


}


export default Contador