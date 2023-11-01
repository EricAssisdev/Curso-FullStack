//calculadora de rendimento anual 

const deposito = 800;
const objetivo = 100000;
const rendimentoAnual = 0.16;

let conta = 0;
let meses = 0;

while (conta < 100000) {
  conta += deposito;
  conta += conta * rendimentoAnual / 12;
  meses += 1;
}

console.log("demorou", meses, "meses");
console.log("demorou", meses/12, "anos");