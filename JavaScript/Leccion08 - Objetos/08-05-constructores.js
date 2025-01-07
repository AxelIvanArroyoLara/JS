// Método constructor

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // Función de objeto
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona1 = new Persona('Juan', 'Pérez', 'putos@mail.com');
console.log(persona1);
console.log(persona1.nombreCompleto());

// Sintaxis recomendable
let objeto = new Object();
let object = {};
let string = new String('Hola');
let cadena = 'Hola';