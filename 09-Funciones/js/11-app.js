const aprendiendo = (tema, tecnologia='JavaScript')=>{
    console.log(`Aprendiendo ${tema} de ${tecnologia}`)
}
aprendiendo('Arrays', 'Java');
aprendiendo('Arrow Functions');

const calcularEdad = (nombre, edad)=> `Hola ${nombre} tu edad es ${edad}`;
console.log(calcularEdad('Alda', 27));

/* Acortando Arrow Function sintaxis cuando solo tenemos un parametro y retornamos un valor

const nombreFuncion = aparametro => `Lo que devuelve`;

*/


const saludar = nombre => `Hola ${nombre} mucho gusto`;

console.log(saludar('Aldahir'));