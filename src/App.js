
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './components/Store';
import Main from './components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/' element={<Main />} /> */}
        <Route path='/store-jersey' element={<Store />} />
        <Route path='/store-jersey' element={<Store />} />
        <Route path='/store-jersey' element={<Store />} />
      </Routes> 
    </BrowserRouter>
    {/* <Main/> */}
    
    </>
  );
}

export default App;
