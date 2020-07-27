import React, { Component } from 'react';
import "./Tarjeta.css";

class Tarjeta extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="row">
                <div className="container-fluid">
                    <div class="alert alert-light title" role="alert">
                        {this.props.titulo}
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Tarjeta.propTypes = {

};

export default Tarjeta;