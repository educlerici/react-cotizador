import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import Resultado from "./Resultado";

import { obtenerDiferenciaAno, calcularMarca, obtenerPlan } from "../helper";

class App extends Component {
  state = {
    resultado: "",
    datos: {}
  };

  cotizarSeguro = datos => {
    const { marca, ano, plan } = datos;

    // Monto base de nuestro seguro
    let resultado = 2000;

    // Obtener Diferencia de Años
    const diferencia = obtenerDiferenciaAno(ano);
    //console.log("La diferencia es: ", diferencia);

    // Por cada año se resta el 3% del seguro
    resultado -= (diferencia * 3 * resultado) / 100;
    //console.log("El resultado es: ", resultado);

    // Americano 15%, Asiatico 5%, Europeo 30%, de incremento al valor
    resultado = calcularMarca(marca) * resultado;
    //console.log("El resultado es: ", resultado);

    // Basico incrementa 20%, Completo 50%
    let incrementoPlan = obtenerPlan(plan);
    // console.log(incrementoPlan);

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log("El resultado es: ", resultado);

    const datosAutos = {
      marca: marca,
      plan: plan,
      ano: ano
    };

    this.setState({
      resultado: resultado,
      datos: datosAutos
    });
  };

  render() {
    return (
      <div>
        <Header titulo="Cotizador de Autos" />

        <div className="container mb-4">
          <p className="font-weight-light">
            Seleccionar los valores en el siguiente formulario para cotizar tu
            vehiculo
          </p>
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} resultado={this.state.resultado} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
