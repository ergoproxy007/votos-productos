import React, { Component } from 'react';

class SimpleCard extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="card border-0">
                {this.props.children}
            </div> 
        )
    }
}

SimpleCard.propTypes = {

};

export default SimpleCard;