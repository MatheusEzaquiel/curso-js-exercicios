let valores = [8,6,9,4,5]

//console.log(valores)
//[8,6,9,4,5]

/*
console.log(valores[0])
8
console.log(valores[1])
6
console.log(valores[2])
9
console.log(valores[3])
4
console.log(valores[4])
5
*/

//última posição do array -> array.length

/*FORMA 1*/
for(let pos = 0; pos < valores.length; pos++){
  console.log(`A posição${pos} tem o valor ${valores[pos]}`
}
/*
A posição 0 tem o valor 8
A posição 1 tem o valor 6
A posição 2 tem o valor 9
A posição 3 tem o valor 4
A posição 4 tem o valor 5
*/


/*FORMA 2 - FUNCIONA EM ARRAYS E OBJETOS*/
for(let variavel_contagem in array){
  console.log(array[variavel_contagem])
}

for(let pos in valores){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`
}
/*
A posição 0 tem o valor 8
A posição 1 tem o valor 6
A posição 2 tem o valor 9
A posição 3 tem o valor 4
A posição 4 tem o valor 5
*/
