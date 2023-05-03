/* Testing con JEST en funciones */

function sumar(a,b) {
    return a+b;
}
function restar(a, b) {
    return a-b;
}

describe("Testing a las funciones de sumar y restar", ()=>{

    test('Suma de 20 + 30', () => { 
        expect(sumar( 20,30)).toBe(50);
     });


     test('Resta de 10 - 5', () => { 
        expect(restar(10,5)).toBe(5)
      })

    test('Que la suma 10 +10 no sea igual a 10', () => { 
        expect( sumar(10, 10)).not.toBe(10);
     })

     test('Que la resta de  10 - 10 no sea otro valor', () => { 
        expect( restar(10, 10)).not.toBe(2);
     })
})