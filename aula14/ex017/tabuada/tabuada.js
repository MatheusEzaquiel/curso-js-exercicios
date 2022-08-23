let mostrar = document.getElementById("btnMostrar")
mostrar.addEventListener('click',mostrarTabuada)

let tabuada = document.getElementById("SelectTabuada")

function mostrarTabuada(){
    let num = document.getElementById("numerotxt")
    let n = Number(num.value)
    let cont = 0
    
    if(num.value.length == 0){
        window.alert('Informe um número no campo')
    }else{
        tabuada.innerHTML = ''
        while(cont <= 9){
            let item = document.createElement('option') //Criar um novo objeto HTML
            item.text = `${n} x ${cont} = ${n*cont}` // modificar a propriedade texto do elemento HTML
            item.value = `tab${cont}` //modifica a propriedade value do elemento
            tabuada.appendChild(item) //inserir neste elemento um elemento filho
            cont++ 
            
        } 
    }
    

}

