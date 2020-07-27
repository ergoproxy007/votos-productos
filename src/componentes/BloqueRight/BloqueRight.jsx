import React, { Component } from 'react';
import "./estilos.css";

class BloqueRight extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="SplitPane-right">
                <div className="right-bloque">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

BloqueRight.propTypes = {

};

export default BloqueRight