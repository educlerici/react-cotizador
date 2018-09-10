import React, { Component } from "react";

class Resultado extends Component {
  render() {
    return ( 
      <div className="alert alert-primary mt-5">      
        <p>El total es $ {this.props.resultado}</p>
      </div>
    );
  }
}

export default Resultado;
