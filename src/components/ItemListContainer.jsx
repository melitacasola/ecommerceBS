import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { productosHC } from './data';
import { Link } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
    const {idcategoria} = useParams([]);

    const [productos, setProductos] = useState([]);
    //se inicializa en un array vacio

    useEffect(() => {
        const productosPromesa = new Promise((res, rej)=> {
            setTimeout(() => {
                res(productosHC)
            }, 2000);
    })
    productosPromesa.then((res) => {
        if(idcategoria){
            setProductos(res.filter((item) => item.categoria == idcategoria))
        }else {
            setProductos(res);
        }
    });
}, [idcategoria]);
      


    return (
        <div className="container my-auto py-auto flex flex-col bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center">
            <div className='m-2'>
                {greeting}

            </div> 
            <ItemList productos={productos}/>
            <div>
                {!productos.length && "login...."}
                
            

            </div>
        </div>
    );
}
 
export default ItemListContainer;