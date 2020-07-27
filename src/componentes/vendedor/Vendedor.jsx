import React, { Component } from "react";
import PropTypes from "prop-types"; //ES6
import "./vendedor.css";

class Vendedor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h5 className="vende">Vende: </h5>
        </div>
        <div className="col-md-3">
          <img
            className="rounded-circle"
            src={this.props.fotoPerfil}
            data-holder-rendered="true"
            width="50px"
            height="50px"
          />
        </div>
      </div>
    );
  }
}

Vendedor.propTypes = {};

export default Vendedor;
