// importa o validator que tem dentro o isValid e o maskify
import validator from './validator.js'

const campoNumeros = document.getElementById('campoNumeros')  // guardando o campo dono da informação pra depois avisar de onde a informação virá
const formulario = document.getElementById('formulario')  // guardando o dono do evento pra depois avisar de onde vai partir do evento
const txtResposta = document.getElementById('txtResposta')  // campo onde vai o texto de resposta -> uma variável pra facilitar o resultado true or false

formulario.addEventListener('submit', function(event){  // no formulario estou adicionando uma escuta pra quando ocorrer o evento submit o JS executar a função especificada
  event.preventDefault()  // dizendo pro JS não recarregar a págica automaticamente, que é o que ele faz sempre que se envia um formulário
  if (validator.isValid(campoNumeros.value)) {  // o primeiro retorno do resultado da função será sempre true, por isso aqui não precisa especificar === true
    txtResposta.innerText = 'Seu cartão é válido!'
  } else {
    txtResposta.innerText = 'Este número de cartão não é válido, tente novamente.'
  }
}) 
