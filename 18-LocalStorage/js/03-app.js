/* Eliminar elementos de localStorager */

localStorage.removeItem('nombre');


/* Actualizar un registro */

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log('mesesArray :>> ', mesesArray);
mesesArray.push('nuevo mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));


/* Limpiar localStorage */

localStorage.clear();