import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import {productosHC} from './data'
import Logo from '../assets/Logo.jpeg';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({ greeting }) => {
    const {iditem} = useParams([]);

    const [producto, setProducto] = useState({});

      useEffect(() => {
        const productoPromesa = new Promise((res, rej)=> {
            setTimeout(() => {
                res(productosHC.find((item) => item.id == iditem))
            }, 2000);
    })
    productoPromesa.then((res) => {    
        setProducto(res);      
    });
}, [iditem]);
      


    const onAdd = (cantidad) =>{
        console.log(`compraste ${cantidad} unidades`);
    }

    return (
        <div className="container my-auto py-auto flex flex-col bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center">
            <div className='m-2'>
                {greeting}

            </div> 
            
            <div>
                {producto.id && (
                <>
                {producto.id + 
                " " + 
                producto.nombre + 
                " " + 
                producto.precio + 
                " " + 
                producto.detalle + 
                " " + 
                producto.img}
                </>
                )}
            </div>
            <img src={Logo} alt="logo" className='flex w-1/2 rounded-lg justify-center m-5' />
            <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd} />

        </div>
    );
}
 
export default ItemDetailContainer;