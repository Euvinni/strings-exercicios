const nomeEComida = (nome, comida1, comida2, comida3) => {
const mensagem = `Estas são as comidas favoritas de ${nome}: \n-Comida1: ${comida1} \n-Comida2: ${comida2} \n-Comida3: ${comida3} `
console.log(mensagem)

}

const userName = prompt(`Qual é o seu nome?`) 
const comidaFav1 = prompt(`Qual é a sua primeira comida favorita?`)
const comidaFav2 = prompt(`Qual é a sua segunda comida favorita?`)
const comidaFav3 = prompt(`Qual é a sua terceira comida favorita?`)

nomeEComida(userName, comidaFav1, comidaFav2, comidaFav3)