/* weakset 
    setDebil en español, a diferencia del set, el weakset solo puede recibir objetos, mientras que el set puede recibir cualquier cosa, arreglos, objetos, strings, etc.


    los weakset no tiene .size() ni son iterables
*/

const weakset = new WeakSet();

const cliente= {
    nombre: 'Juan',
    saldo: 3200
}

weakset.add(cliente);

console.log('weakset :>> ', weakset);