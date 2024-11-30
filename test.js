function validateNumber() {
    const userInput = document.getElementById('inputNumber').value;  // Obtener el número del HTML
    const messageElement = document.getElementById('message');

    // Validación del número
    if (userInput != 10) {
        messageElement.textContent = "¡Error! Debes ingresar el número 10.";
        messageElement.style.color = "red";
        
        // Lanzar un error para que Jenkins lo detecte
        throw new Error("El número ingresado no es 10.");
    } else {
        messageElement.textContent = "¡Número correcto!";
        messageElement.style.color = "green";
    }
}
