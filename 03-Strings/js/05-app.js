const producto = "Monitor de 244 pulgadas";

/*
    Método replace
        NombreString.replace('palabraARemplazar', 'PalabraNueva');
    Reemplazar el texto de un string
*/

console.log('Metodo .replace(): ', producto.replace('pulgadas', '"'));


/*
    Método .slice()
    nombreString.slice(indiceInicio, IndiceFinal)
     extrae hasta, pero sin incluir IndiceFinal. string.slice(1,4) extrae del segundo carácter hasta el cuarto carácter (caracteres con índice 1, 2 y 3).
    Corta caracteres de un string
*/

console.log('Método .slice(): ', producto.slice(1, 11));


/*
    Método .substring()
    nombreString.substring(indiceInicio, IndiceFinal)
    Hacer lo mismo que el metodo slice, solo que si indiceInicio es mayor que Indice Final intercambia las posiciones. Mientras que slice devuelve una cadena vacia.
      
*/
console.log('Método .substring(): ', producto.substring(1,11))


/*
    Método .charAt()
        nombreString.charAt(indiceDeLetraACortar)
    Corta un solo caracter de un string
*/
const nombrePersona= 'Aldahir';
console.log('Método .charAt(): ', nombrePersona.charAt(0));

