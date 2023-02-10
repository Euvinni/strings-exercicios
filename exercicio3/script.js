//Crie a const para a frase aqui 

//parte A
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

//parte B
const novaFrase = frase.replace(`verde`, `rosa`).replace(`azul`, `laranja`)

//parte C
const incluiVerde = novaFrase.includes(`verde`)
const incluiLaranja = novaFrase.includes(`laranja`)

console.log(incluiVerde)
console.log(incluiLaranja)

//parte EXTRA
console.log(novaFrase)
console.log(frase.replace(`mas não deixe o gato sair.`, `MAS NÃO DEIXE O GATO SAIR`))

