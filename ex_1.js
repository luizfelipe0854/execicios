// Calculo básico

// Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.

// A função deve receber três argumentos - operação(string/char), valor1(número), valor2(número).
// A função deve retornar resultado de números após aplicar a operação escolhida.

// Exemplos (Operador, valor1, valor2) -> saída
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    return eval(value1+operation+value2);
  }
