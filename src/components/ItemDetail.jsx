import ItemCount from "./ItemCount";


const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) =>{
        console.log(`compraste ${cantidad} unidades`);
    }
    
    return ( 
        <>
            <div>
                {producto.id && (
                <>
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900 mx-7">
                        {producto.nombre}
                    </h1>
                    
                    <div class="text-lg font-semibold text-slate-500">
                    
                        $ {producto.precio}
                    </div>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        
                    </div>
                </div>
                </>
                )}
            </div>
            <img src={producto && producto.img} alt="logo" className='flex w-1/2 rounded-lg justify-center m-5' />
            <p class="text-sm text-slate-700 m-auto px-5">
                {producto.detalle}
            </p>
            <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd} />
        </>
     );
}
 
export default ItemDetail;