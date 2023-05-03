/**
 * 
 * Break y Continue
 * 
 * breack =>> corta la ejecucion de un For Loop
 * continue =>> va a permitir interceptar un elemento, identificarlo y continuar la ejecucion
 */

/* for(let i =0; i <= 10; i++){
    console.log(`El número i: ${i}`);

}; */

//Uso de break
//Cuando detecte un 7 se sale del ciclo
for(let i =0; i <= 10; i++){
    if (i === 7){
        console.log(`El número i es SIETE`);
        break; //Rompe la ejecucion del cilo aunque se cumpla la condicion del for, pero se sale inmediatamente
        
    }
    console.log(`El número i: ${i}`);

};

//Uso de continue
// Ejemplo detecte un 5 y mande un mensaje de que se encontro un 5

for(let i = 0; i<=10; i++){
    if(i === 5){
        console.log(`Se encontro un CINCO`); 
        continue; // Rompe la ejecucion y se salta al siguiente velor de i
    }
    console.log(`El número i: ${i}`);
}


//Ejemplo mas comun Mostrar si un articulo tiene descuento

const carrito =[
    {nombre: 'Monitor 27 pulgadas', precio: 5000},
    {nombre: 'Smart TV 32\"', precio: 1000},
    {nombre: 'Camara Web logithec', precio: 890, descuento:true},
    {nombre: 'Disco duro SSD 128GB', precio: 1000},
    {nombre: 'USB 500GB', precio: 399},
    {nombre: 'PC Gamer', precio: 14000},
    {nombre: 'MousePad apple', precio: 5999},
    {nombre: 'Laptop i3 ', precio: 7000},
    {nombre: 'Mouse', precio: 350}
];

for (let i= 0; i< carrito.length; i++){
    if (carrito[i].descuento){
        console.log(`Felicidades el articulo: ${carrito[i].nombre} tiene Descuento`);
        continue; // ya no haria la linea 57 y volveria ala linea 52
        //break; // Romperia el ciclo
    }
    console.log('carrito: ', carrito[i].nombre)
}