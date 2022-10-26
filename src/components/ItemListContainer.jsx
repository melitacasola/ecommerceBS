import Logo from '../assets/Logo.jpeg'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container my-auto py-auto flex flex-col bg-white shadow-md  rounded-xl font-bold text-center w-1/2 justify-center items-center">
            <div className='m-2'>
                {greeting}
            </div> 
            <img src={Logo} alt="logo" className='flex w-1/2 rounded-lg justify-center m-5' />
        </div>
    );
}
 
export default ItemListContainer;