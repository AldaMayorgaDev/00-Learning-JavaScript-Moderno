/**
 * Uso de this
 * La palabra this nos hace referencia a una la key que esta en el objeto
 *  this.nombreKey
 * 
 * This es una forma de referirce al objeto en si mismo, es decir this apunta a si mismo, busca esa key en el ambito en que se define.
 */

const nombre = 'Smart TV';
const precio = 2000;

const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
};

const producto2 = {
    nombre: "Teclado Logitech",
    precio: 100,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
};

producto.mostrarInfo();
producto2.mostrarInfo();