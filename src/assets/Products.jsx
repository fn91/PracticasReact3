import React from "react";


const Products = () =>{
    const products = [
{ id:1, name:"Productos1"},
{ id:2, name:"Productos2"},
{ id:3, name:"Productos3"}




    ]


    return (
        <div>
        <h1>Products Page</h1>
        <ul>
        {products.map((products) => (
            <li key={products.id}>
            <button>{products.name}</button>



            </li>



        ))}




        




        </ul>


        </div>





    )



}
export default Products