// Complete a função que recebe um número inteiro não negativo n como entrada 
// e retorna uma lista de todas as potências de n com o expoente variando de 0 a n(inclusive).

function powersOfTwo (n){
    let results = []
    let number = 0
    for(let i = 0; i <= n; i++){
        number = 2**i;
        results.push(number)
    }
    return results
}
