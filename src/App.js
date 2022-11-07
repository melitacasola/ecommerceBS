
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Item from './components/Item';
// import TestPromesa from './components/TestPromesa';
import Footer from './components/Footer';


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
      </Routes> 

        <Item/>
        <Footer/>
    </BrowserRouter>



    
    </>
  );
}

export default App;
