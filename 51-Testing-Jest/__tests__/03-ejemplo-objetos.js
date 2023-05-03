/* Testing con JEST en Objetos */

const cliente ={
    nombre : 'Aldahir',
    balance: 600
}


describe('Testing a objeto Cliente', ()=>{

    /* Si el balancce de cliente es mayo que 400 el cliente es premium */
    test('El cliente es premium', ()=>{
        expect(cliente.balance).toBeGreaterThan(400); //el metodo toBeGreaterThan(valor) -> indica que debe ser mayor a xvalor
    })

    /* Si el nombre de cliente es Aldahir*/
    test('El nombre de cliente es Aldahir', ()=>{
        expect(cliente.nombre).toBe('Aldahir')
    })

    /*Ejemplo cuando quieres comproboar que no sea un valor determinado  */

    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe('Pedro'); //Verifica que el valor de cliente nombre no sea Pedro (Cualquiera menos pedro)
    })

    /* Verifica que el valor de cliente.balance no sea igual a 500 */

    test('No tiene 500', () => { 
        expect(cliente.balance).not.toBe(500);
     })

});