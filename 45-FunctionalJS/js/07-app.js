/* Funciones que retornan funciones */

const obtenerCliente =()=>()=>console.log('Aldahir');

const fn = obtenerCliente();

fn();