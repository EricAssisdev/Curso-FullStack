const listaDeNumeros = [34, 56, 768, 8, 81, 3, 6]
let soma = 0

  // 1. Qual a soma deles?
  
  for(const numero of listaDeNumeros) {
    soma += numero
    
  }
  
  console.log("A soma dele é", soma)
  
  // 2. Qual o menor numero entre eles?
  
  let menorNumero;
  
  for (const numero of listaDeNumeros) {
    if (menorNumero === undefined) {
      menorNumero = numero
    } else {
      if (menorNumero > numero) {
        menorNumero = numero
      }
    }
  }
  
  console.log("O menor numero é", menorNumero)