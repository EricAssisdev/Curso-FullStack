
// Calcular quantos multiplos X numero tem
let resposta = 0

let numero = 1

while (numero <= 1000) {
  if (numero % 17 === 0) {
    resposta += 1
  }
  numero += 1
}

console.log(`${resposta} numeros são multiplos de 17`)