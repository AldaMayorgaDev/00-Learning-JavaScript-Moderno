/* maps 
Son listas ordenadas en llave y valor, es decir un objeto con unsa sola propiedad.
la llave y un valor pueden ser cualquier tipo de dato.
Tienen mejor performace que los objtos
So iterables
*/


const cliente = new Map();

//Agregar un elemento
// sintaxis->  nombreVariableMap.set(llave, valor);
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 900);
cliente.set(true, true);


console.log('cliente :>> ', cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));

//Obtener valor
//nombreVariableMap.get('llave');
console.log('object :>> ', cliente.get('nombre'));


cliente.delete('saldo');