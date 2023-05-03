/**
 * Unir dos arreglos
 */

 const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

 const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

 /**
  * const NombreVariableQueGuardaraElArregloFinal = nombreArrelgo1.concat(arreglo2, arreglo3, arregloN);
  */
 const mesesCompletos = meses.concat(meses2);
 console.log(`Resultado`, mesesCompletos);


 /**Spread Operator */

 const resultado2 = [...meses, ...meses2];
 console.log('Resultado con spread operator:' , resultado2);