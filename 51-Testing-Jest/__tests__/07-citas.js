import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', ()=>{
    const citas = new Citas();
    const id = Date.now();

    test('Test Agregar una nueva cita', () => { 

        const citaObj = {
            id,
            mascota: 'hokk',
            propietario: 'Aldahir',
            telefono: '888338212',
            fecha: '10-05-2023',
            hora:'15:03',
            sintomas: 'Solo duerme'
        }


        citas.agregarCita(citaObj);

        //PRueba
        expect(citas).toMatchSnapshot(); /*Esto va a crear un snapshot que va a tener la informacion y vamos a poder verificar que la informacion que le estamos pasando a la clase (en el bojeto citObj ) se esté guardando correctamente.*/

     });

     test('Test de Actualizar cita', ()=>{
        const citaActualizada = {
            id,
            mascota: 'Nombre Actualizada',
            propietario: 'Aldahir',
            telefono: '888338212',
            fecha: '10-05-2023',
            hora:'15:03',
            sintomas: 'Solo duerme'
        }
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
     });

     test('Test de Eliminar citas', ()=>{
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
     })
})