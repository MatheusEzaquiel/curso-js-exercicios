let btnC = document.getElementById("btnContar")
btnC.addEventListener('click',contagem)


function contagem(){

    let numInicial = document.getElementById("numInicio")
    let numFinal = document.getElementById("numFinal")
    let pulaNum = document.getElementById("Passo")
    let divResult = document.getElementById("resultado")
    

    if(numInicial.value.length == 0 || numFinal.value.length == 0 || pulaNum.value.length == 0){ //verifica se o input está vazio (length, o comprimento do valor do input)
        divResult.innerHTML = 'Preencha todos os campos acima!'
    }else{
        divResult.innerHTML = 'Contando...<br>'
        let numI = Number(numInicial.value)
        let numF = Number(numFinal.value)
        let passo = Number(pulaNum.value)

       // divResult.innerHTML = `${numI} \u{1F449}` //primeiro número da contagem
        
        let c = numI
        if(numI < numF){
            while(c <= numF){
                divResult.innerHTML += `${c} \u{1F449}`   //número por número
                c = c + passo 
            }
        }else{
            while(c >= numF){
                divResult.innerHTML += `${c} \u{1F449}`
                c = c - passo
                console.log(c)
            }
            
        }
        divResult.innerHTML += `\u{1F3C1}`
        
    }

 }

 