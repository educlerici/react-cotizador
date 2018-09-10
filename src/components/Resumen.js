import React, { Component } from "react";

class Resumen extends Component {
  mostrarResumen = () => {
    const { marca, plan, ano } = this.props.datos;

    if (!marca || !ano || !plan) return null;

    return (
      <div className="alert alert-info mt-5">
        <h2>Resumen de Cotizacion</h2>
        <li>
          <b>Marca:</b> {marca}
        </li>
        <li>
          <b>Año:</b> {ano}
        </li>
        <li>
          <b>Plan:</b> {plan}
        </li>
      </div>
    );
  };

  render() {
    return <div>{this.mostrarResumen()}</div>;
  }
}

export default Resumen;
