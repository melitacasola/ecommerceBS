import Logo from '../assets/Logo.jpeg';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

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
            

            <img src={Logo} alt="logo" className='flex w-1/2 rounded-lg justify-center m-5' />
            <ItemCount inicial={1} stock={5} onAdd={onAdd} />

        </div>
    );
}
 
export default ItemListContainer;