import React, { Component } from 'react';

import listado from './listado.json';
import ItemProducto from '../ItemProducto/ItemProducto';

class ListaProductos extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        const itemsProductos = listado;
        return (
            <>
                {
                    itemsProductos.map(item => (
                       <ItemProducto producto={item} />
                    ))
                }
            </>
        )
    }
}

ListaProductos.propTypes = {

};

export default ListaProductos;