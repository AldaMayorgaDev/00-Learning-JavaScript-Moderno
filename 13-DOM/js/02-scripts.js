/**Seleccionar elementos por su clase
 * 
 * const variable =  document.getElementsByClassName('NombreDeLaClaseASeleccionar');
 */

const header = document.getElementsByClassName('header');

console.log('header', header);

const hero = document.getElementsByClassName('hero');
console.log('hero', hero);

//Si las clases existen mas de una vez devulve todos esos elementos

const contenedores = document.getElementsByClassName('contenedor');
console.log('contenedores', contenedores);

//Si una clase no existen las clases devulve un arreglo Vacio;
const noExiste = document.getElementsByClassName('no-existe');
console.log('noExiste', noExiste);
