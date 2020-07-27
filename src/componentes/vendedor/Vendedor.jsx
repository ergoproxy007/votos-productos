import React, { Component } from "react";
import PropTypes from "prop-types"; //ES6
import "./vendedor.css";
import Modal from "react-responsive-modal";

class Vendedor extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h5 className="vende">Vende: </h5>
        </div>
        <div className="col-md-3">
          <img
            onClick={() => {
              this.setState({ open: true });
            }}
            className="rounded-circle"
            src={this.props.fotoPerfil}
            data-holder-rendered="true"
            width="50px"
            height="50px"
          />
        </div>
        <Modal
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          Informacion del vendedor y del producto escogido: ;
        </Modal>
      </div>
    );
  }
}

Vendedor.propTypes = {};

export default Vendedor;
