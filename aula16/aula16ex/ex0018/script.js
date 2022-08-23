let btnAdd = document.getElementById("btnAdicionar")
btnAdd.addEventListener("click",adicionar)

let btnFisc = document.getElementById("btnFiscalizar")
btnFisc.addEventListener("click",fiscalizar)

let lista = document.getElementById("lista")//exibe a lista de números
let listaValores = []

function adicionar(){
    let numero = document.getElementById("numeroTxt")
    let n = Number(numero.value)
    let existeNaLista = listaValores.includes(n)

    if(n < 1 || n > 100){
        alert("Insira um número válido no campo")
    }else if(existeNaLista == true ){
        alert("Este número já existe na lista")
    }else{
        listaValores.push(n)
        console.log(lista)
        let item = document.createElement('option')
        item.text = `número ${n}`
        lista.appendChild(item)
        resultado.innerHTML = ""
}
numero.value = ""  //apaga o valor do input
numero.focus() //automatiza o ativamento do input 
}
//div para sair o resultado
let resultado = document.createElement('div')
document.getElementById("section").appendChild(resultado)

function fiscalizar(){
    if(listaValores == 0){
        alert("Insira algum valor na lista")
    }else{
        let total = listaValores.length
        let menor = listaValores[0]
        let maior = listaValores[0]
        let soma = 0
        let media = 0
   
    
    
        //Percorre os valores do array e descobre a soma, maior número e menor número
        for(let pos in listaValores){
            soma += listaValores[pos]

            if(listaValores[pos] > maior)
            maior = listaValores[pos]
            if(listaValores[pos] < menor)
            menor = listaValores[pos]
        }
        media = soma/total
        
        resultado.innerHTML = ''
        resultado.innerHTML = `A lista possui ${total} números cadastrados<br>`
        resultado.innerHTML += `O menor valor da lista é ${menor}<br>`
        resultado.innerHTML += `O maior valor da lista é ${maior}<br>`
        resultado.innerHTML += `Somando todos os valores da lista temos ${soma}<br>`
        resultado.innerHTML += `A média dos valores digitados é ${media}`
    }
}
