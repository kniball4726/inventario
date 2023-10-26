import React, {Fragment, useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import ListaProducts from './components/ListaProducts';

function App() {
  
  const [productos, setproductos] = useState([])

  useEffect(() => {
    const getProducts = ()=>{
      fetch('https://websupapi.onrender.com/api/products')
      .then(res => res.json())
      .then(res => setproductos(res))
    }
    getProducts();
  }, [])
  

  return (
    <Fragment>
      <Navbar brand='Inventario Deposito Pasteur'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign:'center'}}>Lista de Productos</h2>
            <ListaProducts productos= {productos}/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign:'center'}}>Formulario</h2>
          </div>
        </div>
      </div>
      
    </Fragment>
      
  );
}

export default App;