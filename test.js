// test.js

const numero = 11; // Puedes cambiar este valor para probar el error

if (numero !== 10) {
    console.error(`¡Error! El número no es 10. El valor es ${numero}.`);
    process.exit(1); // Salir con un código de error
}

console.log("El número es 10.");
