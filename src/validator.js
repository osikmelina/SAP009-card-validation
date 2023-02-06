const validator = {
  isValid: function(numeroDoCartao) { // (numeroDoCartao) -> representacao do numero do cartao (variavel)
    const arrayInvertido = numeroDoCartao.split('').reverse() // criando um array a partir do split -> automaticamente sera uma string pq so funciona em string
    // split -> separa em array ; reverse -> inverte o array (metodo reverse so funciona em array) 
    let soma = 0

    for (let posicao = 0; posicao < arrayInvertido.length; posicao++) {  // loop de 0 até o tamanho total do array invertido
      let unidadeDoArray = Number(arrayInvertido[posicao])  // pega uma posicao por vez do array invertido (que e string) e transformando em numero

      if ((posicao + 1) % 2 === 0) {
        unidadeDoArray *= 2  // pegando o resultado do primeiro if, multiplicando por 2 e guardando nele mesmo
        if (unidadeDoArray > 9) {
          soma += unidadeDoArray - 9  // método pra somar sem precisar de fato fazer a soma, jogando o resultado na variavel soma e ja somando
        } else {
          soma += unidadeDoArray  // joga o else (< 9) direto na variavel ja somando com o que mais tiver dentro
        }
      } else {
        soma += unidadeDoArray  // joga o else (impares) direto na variavel ja somando com o que mais tiver dentro
      }
      
    }

    if (soma % 10 === 0) {  // condicao fora do loop pq agora pega o valor total p verificar se é multiplo de 10
      return true
    } else {
      return false
    }

  },
  maskify: function(numeroDoCartao) {
    if (numeroDoCartao.length >= 4) {
      const quatroUltimosDigitos = numeroDoCartao.slice(-4);
      const simbolo = "#";
      const quantidadeDeSimbolos = numeroDoCartao.length - 4
      const numeroMascarado = simbolo.repeat(quantidadeDeSimbolos) + quatroUltimosDigitos
      return numeroMascarado
    } else {
      return numeroDoCartao
    }
  },
};

export default validator;





















// // soma final das condicoes
// let result = 0

// // loop da numeracao recebida comecando com o index 0
// // index = posicao
// for (let index = 0; index < cardNumber.length; index++) {
//   // pega um valor do numero inteiro a partir do index
//   // usando [] por ser uma string/array
//   const value = cardNumber[index]

//   // testa se o index e par
//   if (index % 2 === 0) {
//     // multiplica o valor da posicao par por 2
//     const multipliedFor2 = value * 2
//     // testa se o valor multiplicado e menor que 9
//     if (multipliedFor2 > 9) {
//       // primeiro pega o valor e transforma numa string
//       // depois separa os valores com 'vazio' que faz com que tudo seja separado
//       // esse 'vazio' e um identificador requerido pela funcao split
//       const splitedValue = multipliedFor2.toString().split('')
//       // soma os valores separados anteriormente e guarda somando na variavel result
//       result += Number(splitedValue[0]) + Number(splitedValue[1])
//     } else {
//       // guarda somando o valor multiplicado por 2 e menor que 9 anteriormente
//       result += multipliedFor2
//     }
//   } else {
//     // guarda somando o valor pego inicialmente no loop do index impar
//     result += Number(value)
//   }
// }

// // testa se a soma e divisivel por 10
// // testa se a soma e maior que zero
// if (result % 10 === 0 && result > 0) {
//   return true
// } else {
//   return false
// }