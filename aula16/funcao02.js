/*
função com os dois parâmetros informados
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 5))
*/


/*função sem um dos parâmetros informados
-> se houver algum parâmetro não estiver informado, ele ficará com o valor indefinido (NaN)

function soma(n1,n2){
    return n1 + n2
}


console.log(soma(2))
*/

/*Resolvendo o problema de um dos parâmetros não estar informado
-> caso algum parâmetro não for informado, coloque um valor predefinido*/

function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(2))