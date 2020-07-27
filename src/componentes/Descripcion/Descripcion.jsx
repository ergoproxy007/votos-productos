import React, { Component } from 'react';
import "./estilos.css";

class Descripcion extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <>
              <span className="nombre">{this.props.nombre}</span>
              <span className="descripcion">{this.props.descripcion}</span>
            </> 
        )
    }
}

Descripcion.propTypes = {

};

export default Descripcion;