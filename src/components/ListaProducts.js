import React from 'react'

const ListaProducts = ({productos}) =>{
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr key={producto.codigo}>
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

export default ListaProducts;