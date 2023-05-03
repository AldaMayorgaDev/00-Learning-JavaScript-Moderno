/* Testing con JEST usando snapshots*/
/* Los snapshots sin datos que se alamacenan en un string, se crear en una carpeta, aparte y sobre ella podemos comparar si es el mismo dato, es decir, en este caso si es el mismo cliente o el mismo dato ,*/
const cliente = {
    nombre: 'Aldahir',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al objeto Cliente', () => {
    test('Es el mismo objeto Aldahir', () => { 
        expect(cliente).toMatchSnapshot();
     })

})