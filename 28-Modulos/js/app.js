/* Import permite importar variables, funciones, objetos de otro archivo hacia un archivo */

import { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from './cliente.js';
console.log('nombreCliente :>> ', nombreCliente);
console.log('ahorro :>> ', ahorro);
console.log('mostrarInfo() :>> ', mostrarInfo(nombreCliente, ahorro));

tieneSaldo(ahorro);


const clienteNuevo01 = new Cliente(nombreCliente, ahorro);

console.log('clienteNuevo01 :>> ', clienteNuevo01);
console.log('clienteNuevo01.mostrarInformacion() :>> ', clienteNuevo01.mostrarInformacion());


/* Importando clases heredadas */
//Importar empresa

import {Empresa} from './empresa.js';
const empresa01 = new Empresa('Alpura', 50000, 'Alimentos');
console.log('empresa01 :>> ', empresa01);
console.log('empresa01.mostrarMensaje() :>> ', empresa01.mostrarMensaje());


//importar un export default

import nuevaFuncion, {} from './cliente.js';

nuevaFuncion();