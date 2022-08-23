//fatorial 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1

    for(let contar = n; contar > 1; contar--){
         fat = fat*contar // mesmo que -> fat *= c
    }
    return fat
}
console.log(fatorial(6))

/*
contar = 6      fat = 1 x 6 = 6
contar = 5      fat = 6 x 5 = 30
contar = 4      fat = 30 x 4 = 120
contar = 3      fat = 120 x 3 = 360
contar = 2      fat = 360 x 2 = 720
contar = 1      [acaba] 

fat = 720
*/