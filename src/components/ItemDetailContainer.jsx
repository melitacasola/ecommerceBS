import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosHC } from './data';
import ItemDetail from './ItemDetail';


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
      


    return (
        <div className="container m-auto py-auto flex flex-col bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center align-center">
            <div className='m-2'>
                {greeting}

            </div> 
            
            
            <ItemDetail producto={producto} />
        </div>
    );
}
 
export default ItemDetailContainer;