/* Testing con JEST en funciones importadas como modulos */

import { sumar} from '../js/modulo-suma';


describe('Suma de 2 numeros en funcion importada', ()=>{

    test('sumar 10 + 20, debe dar como resultado 30', () => { 

        expect (sumar(10,20)).toBe(30);
     })
})