import React, { Component } from "react";
import PropTypes from "prop-types"; //ES6
import "./producto.css";
import Vendedor from "../vendedor/Vendedor";

class Producto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-4">
        <div className="row text-center">
          <div className="col-md-4">
            <img
              className="rounded-corners"
              src="https://thumbs.dreamstime.com/b/caja-de-papel-marr%C3%B3n-abierta-con-la-sombra-33123153.jpg"
              data-holder-rendered="true"
              width="200px"
              height="200px"
            />
          </div>
          <div className="col-md-8">
            <Vendedor fotoPerfil={this.props.producto.fotoVendedor} />
          </div>
        </div>
      </div>
    );
  }
}

Producto.propTypes = {};

export default Producto;
