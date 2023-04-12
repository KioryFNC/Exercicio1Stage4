let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = (firstNumber / secondNumber).toFixed(2)
const rest = firstNumber % secondNumber
let total = sum / 2;
let resultado = total % 2 == 0 ? 'Par' : 'Impar';

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da Divisão: ' + rest)
alert(total + ' é ' + resultado);

if(firstNumber == secondNumber) {
  alert('os dois números inseridos são iguais')
} else {
  alert('Os dois números inseridos são Diferentes')
}