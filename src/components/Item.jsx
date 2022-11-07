import { useState } from "react";


const Item = (item) => {
    const [ite, setITem] = useState(item);
    console.log(item);

    return ( 
            
        <div>
                <div className="mx-5 border-gray-900 my-2">
                    <h2 className="font-bold mx-4"></h2>
                    <p>precio: $ <span className='font-bold'></span> </p>
                    <p>detalle: $ <span className='font-bold'></span> </p>
                    <p>stock: $ <span className='font-bold'></span> </p>
                </div>
            
        </div>
        
    );
}
 
export default Item;