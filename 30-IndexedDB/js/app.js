/* 
IndexedDB

Es una API en JavaScript para almaenar granes cantidades de datos de forma estructurada al igual que una bd..

A diferencia de LocalStorage puede almacenar Strigns, Booleans, incluso Archivos, cualquier tiepo de dato soportado por JS.

NOTA: en localStorage solamente podemos almacenar Strings y guardabamos arreglos, JSON pero siempre convirtiendolos a String.

No tiene limites de almacenamiento


Direncia con LocalStorge

LocalStorage es una buena solucion para alamcenar poca informacion.

IndexedDB es una BD completa Pero OJO!! Los datos siguein siendo visibles para cualquiera.
*/
let DB;
document.addEventListener('DOMContentLoaded', ()=>{
    crmDB();

    setTimeout(() => {
        crearCliente(); // Despues de 5 segundos ejecutamos la funcion crearCliente para hacer un registro en la BD.
    }, 5000);
});


function crmDB(){
    //1.- Crear una BD version 1.0
    /* 
    Sintaxis: 
    let nombreVariable = window.indexedDB.open('nombreBD', version);
    */
    let crmDB = window.indexedDB.open('crm', 1);


    // Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la BD');
    }
    //Si se creo bien
    crmDB.onsuccess = function(){
        console.log('BD creada exitosamente');
        DB = crmDB.result; //Se asigan a DB el resultado de la creacion de la BD
    }

    // Configuración de la Base de datos -> solo se ejecuta una vez al momento de crear la BD.
    crmDB.onupgradeneeded = function(e){
        console.log('Este metodo solo se ejecuta una vez...');

        //console.log('e.target.result :>> ', e.target.result);
        const db = e.target.result;


        //Paso 1.- Creando ObjectStore 
        /*
        Para almacenar algo en IndexedDB, necesitamos un “almacén de objetos” object store.Equivale a lo que en otras bases de datos se denominan “tablas” o “colecciones”.
        
        Sintaxis: 
            db.createObjectStore('name', {keyPath: 'id'});

            - name es el nombre del almacén.
            - keyPath – la ruta a una propiedad del objeto que IndexedDB usará como clave

         */
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        })

        //Paso 2.- Definir las columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});


        console.log('columnas Creadas...')
    }
}


function crearCliente(){
    /* Para poder trabajar con las diferentes operacion de una DB en indexedDB se ocupan Transacciones */

    /* 
    Para iniciar una transacción:
            db.transaction(store[, type]);
                store – el nombre de almacén al que la transacción va a acceder, por ejemplo "books". Puede ser un array de nombres de almacenes si vamos a acceder a múltiples almacenes.
                
                type – el tipo de transacción, uno de estos dos:
                        readonly – solo puede leer (es el predeterminado).
                        readwrite – puede leer o escribir datos (pero no crear/quitar/alterar almacenes de objetos).
    */

    /* 
        let tansaction = DB.transaction(['NombredeTablaDondeSEHaraLaTransaccion'], 'modo')
    */
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('transaction completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transacción');
    }


    const objectStore = transaction.objectStore('crm');

    const nuevoCliente ={
        telefono : 192425364,
        nombre: 'Aldahir',
        email: 'aldmg_25@hotmail.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log('peticion :>> ', peticion);
}