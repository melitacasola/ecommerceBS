import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <>
            <Navbar/>  
        
            <div className="flex justify-center h-96">
                <ItemListContainer greeting={"Bienvenidos a la Tienda de Ropa de Ciclismo BANANA SPRINT"}/>
            </div>

            <Footer/>
        </>

        
    );
}
 
export default Main;