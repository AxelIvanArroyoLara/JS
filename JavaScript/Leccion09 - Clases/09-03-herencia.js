class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
let empleado1 = new Empleado('Joe', 'S', 'Ventas'); // Los manda al método de nombreCompleto
console.log(empleado1.nombre); // Hereda de la clase padre
console.log(empleado1.nombreCompleto());