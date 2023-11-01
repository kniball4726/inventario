//import axios from 'axios'
import React, {useState, useEffect} from 'react'


function Lista() {
    
    const [listau, setListau]=useState([])

    useEffect(()=>{
        const getLista = () =>{
        fetch('https://websupapi.onrender.com/api/products')
        .then(res => res.json())
        .then(res => setListau(res))
        
    }
    getLista()
}, [])


    return(
        
        <table className='table'>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {listau.map(producto =>(
                    <tr style={{textAlign:'center', padding:'50', marginTop:30}}>
                        <th>{producto.codigo}</th>
                        <th>{producto.producto}</th>
                        <th>{producto.precio}</th>
                        <th>{producto.stock}</th>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Lista;