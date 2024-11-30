function verificarNumero(numero) {
    if (numero !== 11) {
      throw new Error("El número no es 10. El programa se detiene.");
    }
    console.log("El número es 10, el programa continúa.");
  }