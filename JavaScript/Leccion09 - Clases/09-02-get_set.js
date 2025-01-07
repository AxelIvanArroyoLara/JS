class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Pérez', 15);


