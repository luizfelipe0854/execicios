// Adição de string ES6

// É fácil juntar duas strings assim string1 + string2.

// Outra forma de obter o resultado desejado seria com string1.concat(string2)

// ES6 introduziu outra forma de unir strings. Sua tarefa é descobrir o que é isso e escrever uma função que irá somar duas strings, deve haver um espaço entre as duas strings.

// +, .concat()& .join()não será permitido neste exercício. Também removi alguns outros métodos que podem ser usados ​​para trapacear!

// Se um dos argumentos for um número, seu código deverá forçá-lo a ser uma string.

function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }