import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import Resultado from "./Resultado";

import {
  diferenciaAno,
  obtenerDiferenciaAno,
  calcularMarca,
  obtenerPlan
} from "../helper";

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
      <div className="App">
        <h1>Desde el componente App</h1>
        <Header titulo="Cotizador de Autos" />
        <Formulario cotizarSeguro={this.cotizarSeguro} />
        <Resumen datos={this.state.datos} resultado={this.state.resultado} />
        <Resultado resultado={this.state.resultado} />
      </div>
    );
  }
}

export default App;
