let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28, 
    // Método de objeto
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Creación explícita
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido = 'García';
persona2.telefono = 2441357942;

console.log(persona2.nombre);

// Acceder a las propiedades

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
}