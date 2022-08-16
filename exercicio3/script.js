


/*
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let i = 0;
let text = "";
while (maioresPaises[i]) {
  text += maioresPaises[i];
  console.log(`primeiro console, ${maioresPaises}`)
  i++;
}
console.log(`Top paises, ${text}`)
*/
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
for (let i = 0; i < maioresPaises.length; i++) {
    console.log(`Top Paises ${i+1} - ${maioresPaises[i]}`)
}