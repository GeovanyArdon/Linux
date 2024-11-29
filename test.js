// test.js
function testSum() {
    let a = 5;
    let b = '3'; // Error intencional, suma maliciosa para un fallo lógico
    let sum = a + b;

    if (sum !== 8) {
        console.error('Error: La suma es incorrecta.');
        process.exit(1); // Sale con código 1 para indicar error
    } else {
        console.log('La suma es correcta.');
    }
}

testSum();
