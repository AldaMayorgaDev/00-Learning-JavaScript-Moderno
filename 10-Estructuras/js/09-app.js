/**
 * Operador Ternario
 * 
 * console.log(Condicion ? AccionesSiSeCumpleCondicion : accionesSiNOseCumpleCondion)
 *  
 */

const autenticado = true;
const loggeado = true;

console.log(autenticado ? 'Si esta autenticado': 'No esta autenticado');


//REvisar dos condicones en un ternario

console.log(autenticado && loggeado  ? 'Usuario logeado y autenticado': 'Ocurrio un problema');

console.log(autenticado || loggeado  ? 'Usuario ok': 'Ocurrio un problema');

//If anidado en un ternario exist
console.log(autenticado ? 
    loggeado ? 'Autenticado y loggeado' : 'Autenticado pero no loggeado'
    :'No esta autenticado');