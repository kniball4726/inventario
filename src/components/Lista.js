//import axios from 'axios'
import React, {useState, useEffect} from 'react'


function Lista() {
    
    const [listau, setListau]=useState([])

    useEffect(() => {
        const getLista = () =>{
        fetch('https://websupapi.onrender.com/api/products')
        .then(res => res.json())
        .then(res => setListau(res))
        
    }
    getLista()
}, [])


    return(
        <div className='container'>
        <h2 className='mt-4' style={{textAlign:'center'}}>Lista de productos</h2>
        <table className='table mt-4 mb-4'>
            
            <thead>
                <tr style={{textAlign:'justify'}}>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {listau.map(producto =>(
                    <tr key={producto.codigo}>
                        <th>{producto.codigo}</th>
                        <th>{producto.producto}</th>
                        <th>{producto.precio}</th>
                        <th>{producto.stock}</th>
                    </tr>
                ))}

            </tbody>
        </table>
        </div>
    )
}

export default Lista;