import {Link} from "react-router-dom";

const Footer  = () => {
    return (  
    <footer className="py-11 px-10 mt-12 bg-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center" >
            <div>
                <h3 className="uppercase mx-4 text-xs font-bold text-lime-500">Banana Sprint - Córdoba</h3>
            </div>
            <div className="flex flex-col lg:text-row gap-4 lg:mt-0">
                
                <div className="flex align-baseline">
                    <Link to="/" className="uppercase mx-4 text-xs font-bold text-pink-500">Facebook</Link>
                    <Link to="/" className="uppercase mx-4 text-xs font-bold text-pink-500">Instagram</Link>
                    <Link to="/" className="uppercase mx-4 text-xs font-bold text-pink-500">Twitter</Link>
                    
                </div>
            </div>
            <div>
                <h3 className="uppercase mx-4 text-xs font-bold text-lime-500">Términos & Condiciones  - Todos los Derechos Reservados</h3>
            </div>
        </div>

    </footer>

);
}
 
export default Footer ;