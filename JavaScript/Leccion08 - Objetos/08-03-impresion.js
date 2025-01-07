let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28, 
}

for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify( persona );
console.log(personaString);