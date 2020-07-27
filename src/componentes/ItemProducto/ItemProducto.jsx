import React, { Component } from 'react'

import SimpleCard from '../SimpleCard/SimpleCard';
import BloqueLeft from '../BloqueLeft/BloqueLeft.jsx';
import BloqueRigh from '../BloqueRight/BloqueRight.jsx';
import BloqueImagen from '../BloqueImagen/BloqueImagen.jsx';

class ItemProducto extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <>
                <BloqueLeft>
                    <BloqueImagen foto={this.props.producto.foto} />
                </BloqueLeft>
                <BloqueRigh>
                    <SimpleCard>
                        <p>Componente 1 Productos</p>
                        <p>Componente 2 Productos</p>
                        <p>Componente 3 Productos</p>
                    </SimpleCard>
                </BloqueRigh>
            </>
        )
    }
}

ItemProducto.propTypes = {

};

export default ItemProducto;