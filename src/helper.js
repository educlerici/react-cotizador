export function obtenerDiferenciaAno(ano) {
  return new Date().getFullYear() - ano;
}

export function calcularMarca(modelo) {
  let incremento;

  switch (modelo) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
