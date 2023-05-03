/* Testing con JEST en Strings*/

const password = "123456";


/* describe en JEST nos permite agrupar diferetes pruebas en un mismo archivo */

describe('Valida que el password no este vacio y tenga una extension de 6 caracteres',()=>{

    /* test('Mensaje o nombre de la pruba', () => { codigo que valida la prueba }) */
    test('Que el password tenga 6 caracteres', () => { 

        /* expect(loQueSeQuiereValidar)
            .toBe(ValorQue) toBe lo que hace es verificar que el valor que esta en expect() sea igual a lo que coloques en toBe
            .toHaveLength(xNumeroCaracteres) ->>indica que debe tener xnumero de caracteres
        */
        expect(password).toHaveLength(6);
     });



     /* Prueba de que password no sea vacio */
     test('Password no vacio', () => { 
        expect(password).not.toHaveLength(0)  //Valida que password no tenga una extension de 0;
      })
});