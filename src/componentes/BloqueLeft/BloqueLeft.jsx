import React, { Component } from 'react';
import "./estilos.css";

class BloqueLeft extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="SplitPane-left">
                <div className="left-bloque">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

BloqueLeft.propTypes = {

};

export default BloqueLeft