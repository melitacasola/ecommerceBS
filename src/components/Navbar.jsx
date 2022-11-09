import { Link } from "react-router-dom";
import Cartwidget from "./Cartwidget";

const Navbar = () => {

    return (
        <header className="py-10 px-10 mb-12 bg-gray-900 h-1/4">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <Link to="/">
                <h1 className="font-bold text-2xl text-pink-500 text-center">BANANA <span className="text-lime-500">SPRINT!</span> </h1>
                </Link>
                <nav className="flex flex-col lg:text-row gap-4 lg:mt-0">               
                    <div className="flex align-baseline">
                        <Link to="/categoria/jerseys" className="uppercase mx-4 text-xl font-bold text-pink-500">Jersey & Calzas</Link>
                        <Link to="/categoria/accesorios" className="uppercase mx-4 text-xl font-bold text-pink-500">Medias & Accesorios</Link>
                        <Link to="/store-jersey" className="uppercase mx-4 text-xl font-bold text-lime-500">Login</Link>
                        <Link to="/store-jersey" className="uppercase mx-4 text-xl font-bold text-lime-500">Checkout</Link>
                        <Link to="/store-jersey" className="uppercase mx-4 text-xl font-bold text-lime-500"><Cartwidget/> </Link>
                    </div>
                    
                </nav>
            </div>
        </header>
    );
}

export default Navbar;