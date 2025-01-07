let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28, 
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = idioma.toUpperCase();
    }, 
    // Método de objeto
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang);

persona.idioma = 'en';

console.log(persona.lang);
