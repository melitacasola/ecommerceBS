import Item from "./Item";
import { useState, useEffect } from "react";

const ItemList = () => {
     // USEEFFECT solo una SOLA VEZ para qe no sea siempre - rompo recursos
     const [arrayPoke, setArrayPoke] = useState([]);

     useEffect(() => {
         setTimeout(() => {
 
             fetch("http://localhost:4000/posts")
             .then((res) => res.json())
             .then((resJson) => {
                 console.log(resJson);
                 setArrayPoke(resJson)
             })
             .catch((e) =>{
                 console.log(e);
             })
             }, 2000);
       
     }, []);

    return ( 
        <>
        
        {arrayPoke && arrayPoke.map((item) =>{
             <Item item = {item}/>
        })}
        </>
     );
}
 
export default ItemList;