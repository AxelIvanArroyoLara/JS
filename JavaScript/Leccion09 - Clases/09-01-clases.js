class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
}

let persona1 = new Persona('Juan', 'Pérez', 15);
console.log(persona1);

