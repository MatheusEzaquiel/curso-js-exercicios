//vetor criado
let num = [2,56,10,33] //índices[0,1,2,3]

//add novo elemento ao vetor
num[4] = 6 //cria um novo elemento com o índice 4, insere o valor 6 neste elemento
//[2,56,10,33,6]

console.log(num)//exibe todos os valores do vetor
//[2,56,10,33]

console.log(num[0]) //exibe o valor que está no elemento 1, o primeiro valor
//0

num.push(12)// é um método que coloca um valor na última posição de forma automática
//[2,56,10,33,6,12]
num.length//não é um método, é um atributo que mostra quantos elementos há no array.
// 6 elementos
num.sort()//altera o ordem dos valores no array, organiza de forma crescente, OBS.CONSIDERA OS VALORES COMO STRINGS, POR ISSO A ORGANIZAÇÃO DE NÚMERO NÃO É EXATA
//[10,12,2,33,56,6]

num.sort(function(a, b){return a-b})//altera o ordem dos valores no array, organiza de forma crescente OBS. AGORA SIM COMO NÚMEROS
//[2,6,10,12,33,56]

num.indexOf(33)//método para confirmar a existência do número e se existir retornar o índice do valor 7. Se existir -> número do índice; se não existir -> -1
//posição: 4

num.indexOf(7)
// -1 (não existe)


/*pequeno código de verificação*/
let pos = num.indexOf(4)

if (pos == -1) {
  console.log('O valor não foi encontrado')
}else{
  console.log(`O valor está na posição ${pos}`)
}

//O valor não foi encontrado
