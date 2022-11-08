import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const {idcategoria} = useParams([]);

    console.log(idcategoria);

    const [productos, setProductos] = useState([]);

    let productosHC = [
        {
           "id":1,
           "nombre":"Jersey Grafity",
           "precio":7800,
           "detalle":"jersey grafity - negro - Disponibles en talles: de xxs - xs - s  - m -l - xl - xxl",
           "img":"image00008.png",
           "categoria": "jerseys",
           "stock":50
        },
        {
           "id":2,
           "nombre":"Jersey Pro",
           "precio":7800,
           "detalle":"jersey pro colores argetina - celeste y blanco. Disponible en talles: s - m - l - xl",
           "img":"image00010.jpeg",
           "categoria": "jerseys",
           "stock":20
        },
        {
           "id":3,
           "nombre":"Jersey Go Bike E",
           "precio":7800,
           "detalle":"Jersey pro go bike, mas slim que otros productos, talles: xs - s - m - l - xl",
           "img":"image00001.jpeg", 
           "categoria": "jerseys",
           "stock": 20
        },
        {
           "id":4,
           "nombre":"Jersey RyLe Checa",
           "precio":7800,
           "detalle":"Jersey pro go bike, mas slim que otros productos, talles: xs - s - m - l - xl",
           "img":"image00015.png",
           "categoria": "jerseys",
           "stock": 15
        },
        {
           "id":5,
           "nombre":"Jersey Purple",
           "precio":7800,
           "detalle":"Jersey pro go bike color purpura, mas slim que otros productos, talles: xxs - xs - s - m - l - xl - xxl",
           "img":"image00004.png", 
           "categoria": "jerseys",
           "stock":30
        },
        {
           "id":6,
           "nombre":"Conjunto Total Black",
           "precio":14000,
           "detalle":"jersey black, con calza con badana hombre y mujer - total black - negro. Talles Disponibles: s - m - l",
           "img":"total_black.jpeg",
           "categoria": "jerseys",
           "stock": 10
        },
        {
           "id":7,
           "nombre":"Jersey Yellow",
           "precio":7800,
           "detalle":"jersey amarillo. Talles disponibles: xs - s - m - l - xl",
           "img":"jersey_yellow.jpeg",
           "categoria": "jerseys",
           "stock": 18
        },
        {
           "id":8,
           "nombre":"Casco SBK",
           "precio":6500,
           "detalle":"casco SBK - color blanco rojo azul talle s - m- l - xl",
           "img":"cascos.jpeg",
           "categoria": "accesorios",
           "stock": 10
        },
        {
           "id":9,
           "nombre":"Medias",
           "precio":1100,
           "detalle":"medias de ciclismo, excelente agarra. Talles: 1 (35 a 37) 2 (38 a 40) 3 (41 a 44)",
           "img":"medias_bike.jpeg",
           "categoria": "accesorios",
           "stock":25
    
        }
      ];

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
      

    //onAdd() --> callback

    const onAdd = (cantidad) =>{
        console.log(`compraste ${cantidad} unidades`);
    }

    return (
        <div className="container my-auto py-auto flex flex-col bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center">
            <div className='m-2'>
                {greeting}

            </div> 
            <ItemList/>
            <div>
                {!productos.length && "login...."}
                {productos.map((item) => (
                <div key ={item.id}>
                {JSON.stringify(item)}
                <Link to={"/item/" + item.id} className="mx-4 font-bold text-emerald-600">Ir al Item</Link>
                <br/>
                <br/>
                </div>
            ))}
            
            <img src={Logo} alt="logo" className='flex w-1/2 rounded-lg justify-center m-5' />
            <ItemCount inicial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    );
}
 
export default ItemListContainer;