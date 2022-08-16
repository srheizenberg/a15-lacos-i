let resposta = prompt("Deseja Comer Mais Coxinhas? Sim ou Não")
let conta = 0

while (resposta !== "N") {
    conta=conta + 2.50
    resposta = prompt("Deseja Comer Mais Coxinhas? Sim ou Não")
}
console.log(`Valor Total da sua conta $${conta}`)