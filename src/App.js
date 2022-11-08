
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Item from './components/Item';
// import TestPromesa from './components/TestPromesa';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/store-jersey' element={<Store />} />
        <Route path='/store-jersey' element={<Store />} />
        <Route path='/store-jersey' element={<Store />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/categoria/:idcategoria' element={<ItemListContainer />} />
        {/* <Route path='/item/:iditem' element={<ItemDetailContainer />} /> */}
      </Routes> 

        <Item/>
        <Footer/>
    </BrowserRouter>



    
    </>
  );
}

export default App;
