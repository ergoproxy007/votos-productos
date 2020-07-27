import React, { Component } from "react";

import SimpleCard from "../SimpleCard/SimpleCard";
import BloqueLeft from "../BloqueLeft/BloqueLeft.jsx";
import BloqueRigh from "../BloqueRight/BloqueRight.jsx";
import BloqueImagen from "../BloqueImagen/BloqueImagen.jsx";
import Vendedor from "../vendedor/Vendedor.jsx";
import Descripcion from "../Descripcion/Descripcion.jsx";

class ItemProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BloqueLeft>
          <BloqueImagen foto={this.props.producto.foto} />
        </BloqueLeft>
        <BloqueRigh>
          <SimpleCard>
            <p>Componente 1 Productos</p>
            <Descripcion 
              nombre={this.props.producto.nombre}
              descripcion={this.props.producto.descripcion}
            />
            <Vendedor
              fotoPerfil={this.props.producto.fotoPerfil}
              infoVendedor={this.props.producto.infoVendedor}
            />
          </SimpleCard>
        </BloqueRigh>
      </>
    );
  }
}

ItemProducto.propTypes = {};

export default ItemProducto;
