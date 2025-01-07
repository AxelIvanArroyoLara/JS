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

Persona.prototype.tel = '244412133'; // Añade un nuevo parámetro a todos los objetos (heredando de la clase)

let persona1 = new Persona('Juan', 'Pérez', 'putos@mail.com');

console.log(persona1.tel);