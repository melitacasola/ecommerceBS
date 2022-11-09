import {Link} from 'react-router-dom';


const loadImage = imageName => (require(`../assets/${imageName}`).default);

const Item = (props, key) => {
    const {producto} = props;
    return ( 

        <>
        <ul className="divide-y divide-slate-100">
        <article className="flex items-start space-x-6 p-6">
        <img src={producto && producto.img} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
        <div className="min-w-0 relative flex-auto">
            <h2 className="font-semibold text-slate-900 truncate pr-20">{producto && producto.nombre}</h2>
            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
                <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
                </dt>
                <dd>$ {producto && producto.precio}</dd>
            </div>
            <div>
                <dt className="sr-only">Rating</dt>
                <dd className="px-1.5 ring-1 ring-slate-200 rounded"> {producto && producto.detalle}</dd>
            </div>
            <div className="ml-2">
                <dt className="sr-only">{producto && producto.categoria}</dt>
                <dd>stock: {producto && producto.stock}</dd>
            </div>
            <Link to={`/item/${producto && producto.id}`} className="mx-4 font-bold text-emerald-600">Ir al Item</Link>
            </dl>
        </div>
        </article>
        </ul>
        
    
        </>
        
    );
}
 
export default Item;