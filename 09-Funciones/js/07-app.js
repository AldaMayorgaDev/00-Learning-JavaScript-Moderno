/**
 * Como se comunican las funciones entre si
 */

inciarApp();
function inciarApp(){
    console.log("Iniciando App...");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la Segunda Funcion");

    usuarioAutenticado('Aldahir');
}

function usuarioAutenticado(nombreUsuario){
    console.log(`Autenticando ${nombreUsuario}....espere`);
    console.log(`Usuario: ${nombreUsuario} autenticado exitosamente`);
}