class Persona {
    static contador = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contador;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    
    get apellido() {
        return this._nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

}

class Empleado extends Persona {
    static contador = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contador;
        this._sueldo = sueldo;
    }
    
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
}

class Cliente extends Persona {
    static contador = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contador;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    } 

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
}