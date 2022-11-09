import { useState, useEffect } from "react";


const ItemCount = ({inicial, stock, onAdd}) => {
    const [count, setCount] =useState(parseInt(inicial));
    const decremento = () =>{
        setCount(count - 1)
    };
    const incremento = () => {
        setCount(count + 1)
    };

    useEffect(()=>{
        setCount(parseInt(inicial))
    }, [inicial])

    return (  
        <>
            <div className="container my-auto py-auto flex flex-row bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center"> 
                <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg" onClick={decremento} disabled={ count <= 1}>-</button> 
                <span className="mx-3">en Stock: {count} </span> 
                <button onClick={incremento} disabled={count >= stock} className="bg-pink-600 text-white text-sm leading-6 font-medium py-2 px-3 my-2 rounded-lg">+</button>
                <div className="my-3">
                    <button disabled={stock <= 0} onClick={()=> onAdd(count)} className="h-auto w-auto px-6 mx-5 font-semibold rounded-md bg-black text-white">Agregar al Carrito</button>
                </div>
            </div>
        
        
        </>

    );
}
 
export default ItemCount;

//en itemListContainer
// recibe ITEMCOUNT - STOCK - ONADD