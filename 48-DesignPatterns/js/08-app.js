/* Mediator */

/* Mediador o intermediario es un patron de diseño que se comunica con diferentes objetos a la vez
    El madiado define objetos ya localizados para objetivos especificos
*/

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: (articulo, precio)=>{
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`)
    },
    vendido: (comprador)=>{
        console.log(`Vendido a ${comprador}`)
    }
}
function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador)=>{
        console.log(`${comprador.nombre}: ${cantidad}`)
    },
}

function Subasta(){
    let compradores ={};

    return{
        registrar: usuario =>{
            compradores[usuario.nombre]= usuario;
            usuario.sala = this;
        }
    }
}


//Crear Objetos
const alda = new Comprador('Alda');
const senen = new Comprador('Senen');

const vendedor = new Vendedor('Vendedor de autos');
const subasta1 = new Subasta();


//Tiene que registrar subasta1 es el mediador
subasta1.registrar(alda)
subasta1.registrar(senen)
subasta1.registrar(vendedor);

vendedor.oferta('Mustang 66', 3000)
alda.oferta(350, alda)
senen.oferta(450, senen)
alda.oferta(550, alda)
vendedor.vendido('Aldahir')