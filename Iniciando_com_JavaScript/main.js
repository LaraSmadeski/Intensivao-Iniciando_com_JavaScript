alert('Hello World!')

const numberOne = 12
const numberTwo = 7
const sum = numberOne + numberTwo
alert(sum)

const isNumber = 12
if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

const isString = 'Isso é uma string'
if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

const isBoolean = true
if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

const sub = numberOne - numberTwo
alert(sub)

const mult = numberOne * numberTwo
alert(mult)

const div = numberOne / numberTwo
alert(div)

const isEvenNumber = 20
if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

const isOddNumber = 13
if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}