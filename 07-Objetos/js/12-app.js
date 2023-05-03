
/*Object Literal
    En el se definen y asignan los valores
*/
const producto = {
    nombre: "Moitor 20 pulgadas",
    precio: 3000,
    disponible: true,
};

/*Object Constructor
    Permite crear multiples objetos, solo se define la estructura y las key que tendra el objeto, asi como valores por defecto, por eso se ocupa this y se hace en una funcion, para asignarle los valores que le pasemos a la funcion a esa key 

        this.key1 = NombreDelParametroQueRecibeLaFuncion;
*/

function Producto(nombre, precio, marca){
    this.nombre= nombre; //Valor que se le dara como argumento
    this.precio= precio;
    this.marca = marca;
    this.disponible = true; //Valor por defecto
};

function Alumno(nombre, matricula, direccion, tutor){
    this.nombre = nombre;
    this.numeroControl = matricula;
    this.direccion = direccion;
    this.tutor = tutor;
    this.becado = true;
    this.seguroSocial= 5050601;
}

/**Aqui se crea en si el nuevo objeto con valores diferentes de la
 * const NombreDeLaVariableQueAlmacenaraObjeto = new NombreObjetoDefinido(valor1, valor2, ..valorN)
*/
const producto2 = new Producto('Imac', 54000, 'Apple');
console.log('Object Constructor:', producto2);

const producto3 = new Producto('Ipad 2da Gen.', 3000, 'Apple');
console.log('Object Constructor:', producto3);


const alumno1 = new Alumno('Aldahir', 12200639, 'Arista 4', 'Pagola');
console.log('alumno1: ', alumno1);

const alumno2 = new Alumno('Lalo', 12200669, 'Pachuca', 'Erick León')

console.log('alumno2: ', alumno2);