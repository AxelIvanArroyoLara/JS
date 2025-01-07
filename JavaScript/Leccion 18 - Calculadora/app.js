let n = ""; // Inicializamos el valor del display como una cadena vacía

// Aseguramos que el script se ejecute después de cargar la página
window.onload = function() {
    alert('Archivo app.js enlazado correctamente y página cargada.');

    // Seleccionamos todos los botones con clase "button"
    const buttons = document.querySelectorAll('.button');

    // Asignamos un evento a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.innerText; // Obtenemos el texto del botón
            addToDisplay(value); // Lo enviamos a la función para mostrarlo en pantalla
        });
    });
};

// Función para agregar valor al display
function addToDisplay(value) {
    if (value === "AC") {
        n = ""; // Reinicia el display
    } else if (value === "DEL") {
        n = n.slice(0, -1); // Elimina el último carácter
    } else if (value === "=") {
        n = eval(n); // Evalúa la expresión matemática
    } else {
        n += value; // Concatenamos el valor
    }

    // Actualizamos el contenido del <p> dentro de la pantalla
    document.querySelector('.display p').innerHTML = n || "0"; // Muestra "0" si el display está vacío
}
