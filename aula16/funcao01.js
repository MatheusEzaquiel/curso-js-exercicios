function parImpar(n){ //n é o parâmetro formal
    if(n%2 == 0){
        return 'Par'//retorno 1
    }else{
        return 'Impar'//retorno 2
    }
}
// parImpar(2) | Chamada, o 2 é o parãmetro real

let result = parImpar(556) //ou console.log(parImpar) | este param real é jogado para o param formal que está descrito como "n" no início da função

console.log(`Este número é ${result}`)


