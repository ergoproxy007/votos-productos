import React, { Component } from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import BloqueLeft from '../BloqueLeft/BloqueLeft';
import BloqueRigh from '../BloqueRight/BloqueRight';
import BloqueImagen from '../BloqueImagen/BloqueImagen';

class ListaProductos extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <>
                <BloqueLeft>
                    <BloqueImagen foto="a30s-2.jpg" />
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

ListaProductos.propTypes = {

};

export default ListaProductos;