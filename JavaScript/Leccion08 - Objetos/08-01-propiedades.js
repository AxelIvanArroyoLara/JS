let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28, 
}

persona.tel = '221'; // Se añade una nueva propiedad

delete persona.email; // Se elimina una propiedad

console.log(persona);