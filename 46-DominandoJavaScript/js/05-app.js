/* Explicit Binding */


function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el1}`)
}

const informacion ={
    nombre: "Aldahir"
}

const musicaFavorita =['Rock', 'Pop'] 

/* Call existe en todas las funciones de JS incluso en las que creeamos */

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

/* /* Apply existe en todas las funciones de JS incluso en las que creeamos  */
persona.apply(informacion, musicaFavorita);

/* La diferencia entre call y apply es que en call tienes que pasarle el arreglo con la posicion del elemento en especifico, mientras que apply toma el  arreglo completo, mientras que bind es igual a call pero con la diferencia que bind crea una nueva funcion */

const nuevafuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevafuncion();