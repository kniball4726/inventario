import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';
import Navbar from './components/Navbar';
import Agregar from './components/Agregar';
import Modificar from './components/Modificar';
import Eliminar from './components/Eliminar';
import Inventario from './components/Inventario';
import Descuento from './components/Descuento';
import Ingreso from './components/Ingreso';
import Diario from './components/Diario';
import Stock from './components/Stock';
import Lista from './components/Lista';

function App() {
return(
    <div className='App'>
      <Navbar brand={'WebSup'}/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>} exact></Route>
            <Route path='/lista' element={<Lista/>} exact></Route>
            <Route path='/agregar' element={<Agregar/>} exact></Route>
            <Route path='/modificar' element={<Modificar/>} exact></Route>
            <Route path='/eliminar' element={<Eliminar/>} exact></Route>
            <Route path='/inventario' element={<Inventario/>} exact></Route>
            <Route path='/descuento' element={<Descuento/>} exact></Route>
            <Route path='/ingreso' element={<Ingreso/>} exact></Route>
            <Route path='/diario' element={<Diario/>} exact></Route>
            <Route path='/stock' element={<Stock/>} exact></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;