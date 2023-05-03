/**
 * Buenas practicas al trabajar con if
 */


const autorizado = true;

if(autorizado) {
    console.log(`Usuario autorizado`);
};

const puntaje = 300;
function revisarPuntaje(){

    if(puntaje >=500){
        console.log('Puntaje Excelente');
        return //Para cortar la ejecucion de la funcion
    }

    if (puntaje >= 400){
        console.log('Puntaje correcto');
        return
    }

    if (puntaje <= 300){
        console.log('Vuelve a intentar');
        return;
    }
}

revisarPuntaje();