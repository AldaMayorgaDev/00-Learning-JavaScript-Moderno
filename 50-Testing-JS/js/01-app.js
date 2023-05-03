/* Testing */

/* 

Ventajas de hacer Testing

    Mejora la calidad de sw evitando Bugs
    Hay herramientas que autoamtizan las pruebas

Tipos de Testing

    End to End- Más interactivo y comun, simula algunos clicks, llenar formularios y asegurarse de que se muestre en pantalla lo que se desea, utiliza mucho Cypress



    Integracion- Revisa que multiples partes del proyecto funcionen bien.

    Pruebas Unitarias, revisa que cada parte por si sola funcione bien 


    Static- Revisar por errores en el codigo mientras vas escribiendo.

Herramientas para Testing

    Cada tecnologia tiene sus herramientas para Testing, pero una muy popular es Jest, hyar versiones para VueJS, Angular, TypeScript, Node, React, etc. Es necesario tener instalado Node.js

    Otra opcion es cypress que es una herramienta para hacer testings End to End
*/


//========================================

/* Testign sin herramientas */

//Probar 2 valores

function suma(a,b) {
    return a+b;
}
function restar(a, b) {
    return a-b;
}
let resultado = suma(1, 2);
let esperado = 3;

if (resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado,: la prueba no pasó`)
}else{
    console.log('La prueba paso correctamente');
};

resultado = restar(10,5);
esperado = 5;
if (resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado,: la prueba no pasó`)
}else{
    console.log('La prueba paso correctamente');
};