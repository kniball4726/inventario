import React from 'react'

const Navbar = ({brand}) =>{
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">{brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/Lista">Lista de productos</a></li>
                  <li><a className="dropdown-item" href="/Agregar">Agregar productos</a></li>
                  <li><a className="dropdown-item" href="/Modificar">Modificar productos</a></li>
                  <li><a className="dropdown-item" href="/Eliminar">Eliminar productos</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Inventario
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/Inventario">Inventario real</a></li>
                  <li><a className="dropdown-item" href="/Descuento">Descuento</a></li>
                  <li><a className="dropdown-item" href="/Ingreso">Ingreso</a></li>
                  <li><a className="dropdown-item" href="/Diario">Diario</a></li>
                  <li><a className="dropdown-item" href="/Stock">Cargar Stock</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Navbar;