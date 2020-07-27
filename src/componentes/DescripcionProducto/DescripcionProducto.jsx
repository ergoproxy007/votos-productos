import React, { Component } from 'react';
import "./estilos.css";

class DescripcionProducto extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <>
              <span className="nombre">{this.props.producto.nombre}</span>
              <span className="descripcion">{this.props.producto.descripcion}</span>
            </> 
        )
    }
}

DescripcionProducto.propTypes = {

};

export default DescripcionProducto;