import React, {useState, useEffect} from 'react'
import ListaProducts from './ListaProducts';
import Formulario from './Formulario';

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
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign:'center'}}>Lista de Productos</h2>
            <ListaProducts productos = {productos}/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign:'center'}}>Formulario</h2>
          <Formulario/>
          </div>
        </div>
      </div>      
  );
}

export default App;