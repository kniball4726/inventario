import React, { useState } from 'react'
import axios from 'axios'

function Agregar() {

    const [codigo, setCodigo]=useState([])
    const [producto, setProducto]=useState([])
    const [precio, setPrecio]=useState([])
    const [stock, setStock]=useState([])

    function agregarUsuario() {
        const productos = {
            codigo: codigo,
            producto: producto,
            precio: precio,
            stock: stock
        }
        console.log(productos)
        axios.post('https://websupapi.onrender.com/api/add/', productos)
        .then(res =>{
            alert('Producto agregado con exito')
        })
        .then(err => {console.log(err)})
    }

    

    return(
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4' style={{textAlign:'center'}}>Agregar producto</h2>
            </div>            
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='codigo' className='form-label'>Codigo</label>
                        <input type='number' className='form-control' value={codigo} onChange={(e) => {setCodigo(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='producto' className='form-label'>Producto</label> 
                        <input type='text' className='form-control' value={producto} onChange={(e) => {setProducto(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='stock' className='form-label'>Existencia</label>
                        <input type='number' className='form-control' value={stock} onChange={(e) => {setStock(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='precio' className='form-label'>Precio</label>
                        <input type='price' className='form-control' value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                    </div>
                    
                    <div className='mb-3'>
                        <button onClick={agregarUsuario} className='btn btn-success'>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agregar;