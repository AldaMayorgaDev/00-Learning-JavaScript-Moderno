/* NameSpaces */

/* Es un design pattern para la organizacion del codigo, ayuda a evitar colision ocn nombres en el scope global de JS

su idea es crear un bojeto global alrededor de tu aplicacion y agregar todas la funciones dentro, en lugar de crear multiples funciones y objetos que se pueden acceder de forma global
*/


const restauranteAPP={ //Sobre este objeto vamos a ir colocando todos los datos, todas las funciones

}

restauranteAPP.platillos =[
    {
        platillo : 'Pizza',
        precio: 20
    },
    {
        platillo : 'Hamburguesa',
        precio: 23
    },
    {
        platillo : 'Hotdog',
        precio: 13
    }
];

restauranteAPP.funciones = {

    mostrarMenu: (platillos)=>{
        console.log(`Bienvenidos a nuestro menu`)

        platillos.forEach((platillo, index)=>{
            console.log('platillo :>> ', platillo.platillo, 'Precio: ', platillo.precio, ' Indice: ', index);
        })
    },

    ordernar: (id)=>{
        console.log(`Tu platillo: ${restauranteAPP.platillos[id].platillo} se esta preparando`)
    },

    apregarPlatillo: (platillo, precio)=>{
        const nuevo ={
            platillo,
            precio
        };
        restauranteAPP.platillos.push(nuevo)
    }
}

const {platillos} = restauranteAPP;

restauranteAPP.funciones.mostrarMenu(platillos);

restauranteAPP.funciones.ordernar(1);

restauranteAPP.funciones.apregarPlatillo('Taco', 30)

restauranteAPP.funciones.mostrarMenu(platillos);