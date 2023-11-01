// Desafio do jogo da forca

function solucao(palpite, palavra) {
  
    let quantidade = 0
    
    for(const letra of palavra) {
      
      if (letra === palpite){
          quantidade += 1
      }
    }
    
    console.log(quantidade)
  }
  
  solucao("e", "eric")