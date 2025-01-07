function funcion(a, b, c, d, e) {
    let suma = 0;
    for (let index = 0; index < arguments.length; index++) {
        suma += arguments[index]; 
    }
    return suma;
}


resultado = funcion(1, 2, 3, 4, 5);
console.log(resultado);