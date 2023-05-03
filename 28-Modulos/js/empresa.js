import {Cliente} from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro); //Heredando el contructor de la clase Cliente
        this.categoria = categoria;
    }

    mostrarMensaje(){
        return `Cliente: ${this.nombre}, su ahorro es de : $ ${this.ahorro} y su rubro es: ${this.categoria}`;
    }
}