const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bienvenido al Convertidor de Moneda en Node JS");
console.log("Este programa convierte dólares a euros utilizando una tasa de cambio fija.");

rl.question("Ingresa la cantidad en dólares: ", (dollars) => {
  const exchangeRate = 0.85;
  const euros = dollars * exchangeRate;
  
  console.log(`${dollars} dólares son aproximadamente ${euros.toFixed(2)} euros.`);
  
  rl.close();
});
