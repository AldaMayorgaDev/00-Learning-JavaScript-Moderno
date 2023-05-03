/* Implicit Binding */

/* Se da por implicito, donde encontrar el valo, Binding le va a decir de una forma clara con la palabra this donde va encontrar sus valores */

/* This ahce referencia al objeto en si */
const usuario= {
    nombre: 'Aldahir',
    edad: 20,
    informacion(){
     console.log(`Mi nombre es: ${this.nombre}, mi edad es ${this.edad}`);
    },
    mascota:{
        nombre: 'Hook',
        edad: 1,
        informacion(){
         console.log(`Mi nombre es: ${this.nombre}, mi edad es ${this.edad}`);
        },
    }
}
    
    usuario.informacion();
    usuario.mascota.informacion()