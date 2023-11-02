import React from 'react'
import Lista from './Lista'
import Agregar from './Agregar';

function Principal() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-7'>
                    <Lista/>
                </div>
                <div className='col-5'>
                    <Agregar/>
                </div>
            </div>
        </div>
    )
}

export default Principal;