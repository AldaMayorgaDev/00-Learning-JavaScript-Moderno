/* Scope */
/* Es el alcance de una variable */


/* Global */
const cliente = 'Aldahir'
function mostrarCliente() {
    console.log(cliente)
}

mostrarCliente();

/* local */
function mostrarCliente() {
    const cliente = 'Aldahir'
}
console.log(cliente)
mostrarCliente();