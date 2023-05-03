/* New binding */

function Auto(modelo, color) {
    this.modelo = modelo; //new binding
    this.color = color;
}

const auto = new Auto('Camaro', 'Rojo');

console.log(auto)

/* Window binding */

window.color = 'Negro'; //Window binding, basicamente es asignar una variable a la ventana global
function muestraColor(){
    console.log('color', color)
}

muestraColor();