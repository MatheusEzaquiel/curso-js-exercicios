let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso = this.peso + p //this é uma palavra que se referencia ao próprio objeto, ou seja, aqui this = amigo
    }
}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)