import React, { Component } from 'react';

class BloqueImagen extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div class="card border-0">
                <img src={require('./'+this.props.foto)} class="img-fluid" width="120px" />
            </div>
        )
    }
}

BloqueImagen.propTypes = {

};

export default BloqueImagen