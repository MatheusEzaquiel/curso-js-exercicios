//Como descobrir se exister tal valor em um array


numero = Number(12)

lista = [10,12,24,32,46]
console.log(`Lista de números: ${lista}`)
console.log(`Existe o número ${numero} na lista?`)

//Forma 1
console.log(`Forma 1: ${lista.includes(numero)}`) //nomeDoArray.includes(valor-para-verificar)

//Forma 2
console.log(`Forma 2: ${lista.indexOf(numero)}`) //indexOf retorna a posição(índice) do número, caso ele não exista no array, é retornado o valor -1


//Descobrir o último valor do array
console.log(lista.lastIndexOf(32))