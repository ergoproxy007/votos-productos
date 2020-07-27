import React, { Component } from "react";
import "./vendedor.css";
import Modal from "react-responsive-modal";

class Vendedor extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div className="contenedor">
      <div className="row">
        <div className="col-md-3">
          <h5 className="vende">Vende: </h5>
        </div>
        <div className="col-md-9">
          <img className="rounded-circle c-pointer"
            onClick={() => {
              this.setState({ open: true });
            }}
            src={this.props.fotoPerfil}
            data-holder-rendered="true"
            width="40px"
            height="40px"
          />
        </div>
        <Modal
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <div className="infoVendedor">
            <h2>{this.props.infoVendedor}</h2>
          </div>
        </Modal>
      </div>
      </div>
    );
  }
}

Vendedor.propTypes = {};

export default Vendedor;
