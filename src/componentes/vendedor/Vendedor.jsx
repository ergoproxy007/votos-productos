import React, { Component } from "react";
import PropTypes from "prop-types"; //ES6

class Vendedor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container my-4">
        <div class="row text-center">
          <div class="col-md-6 mb-4">
            <h6 class="my-5 h2">Componente 1</h6>
            <img
              class="rounded-circle"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              data-holder-rendered="true"
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
    );
  }
}

Vendedor.propTypes = {};

export default Vendedor;
