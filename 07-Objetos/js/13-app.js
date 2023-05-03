const producto = {
    nombre: 'Monitor 55\"',
    marca: 'Sony',
    precio: 4500,
    disponible: true
};

console.log('producto: ', producto);


/**
 * Metodos de Objetos
 */

/**
 Object.keys()
    Object.keys(nombreObjeto);
 Devuelve en un arreglo todas las propiedades/keys del objeto
 */

 console.log('Keys con Object.keys(): ', Object.keys(producto));

 /**
  Object.values()
    Object.values(nombreObjeto);
  DEvuelve en un arreglo todos ls valores de las keys del objeto
  */

  console.log('Values con Object.values(): ', Object.values(producto));


  /**
   Object.entries()
      Object.entries(nombreObjeto);
    Devuelve en un array tanto keys como valores, pero en pares, es decir [key1, valor1], [key2, valor2]....
   */

    console.log('Entries con Object.entries(): ', Object.entries(producto));


