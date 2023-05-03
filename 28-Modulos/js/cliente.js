/* Saca una variable o una funcion, incluo una clase, un objeto */

export const nombreCliente = 'Aldahir';
export const ahorro = 200;

export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre}, su ahorro es de : $ ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log('Si tiene saldo');
    }else{
        console.log('No cuenta con saldo');
    }
}

export class Cliente{
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su ahorro es de : $ ${this.ahorro}`;
    }
}


export default function nuevaFuncion(){
    console.log('Este es el export default');
}