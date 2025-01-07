let persona1 = {
    name: 'Juan',
    apellido: 'Pérez',
    nombreCompleto: function(){
        return this.name + ' ' + this.apellido;
    }
}

let persona2 = {
    name: 'Carlos',
    apellido: 'García',
}

console.log(persona1.nombreCompleto.call(persona2)); // Llama al método del objeto anterior