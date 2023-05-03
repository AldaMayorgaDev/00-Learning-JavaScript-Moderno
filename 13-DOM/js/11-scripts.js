const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('#footer');

//Agregando evento a btnFlotante
btnFlotante.addEventListener('click', mostrarOcultarFooter);

//Funcion MostrarOcultarFooter
function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')){ //classList.contains permite checar si el elemento tiene la clase que va en el parentesis
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent='Idioma y Modena';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent='X Cerrar';
    }
};


console.log('btnFlotante', btnFlotante);
console.log('footer', footer)