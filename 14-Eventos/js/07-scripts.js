/**
 * Prevenir Event Bubbling con Delegation
 */

/**Esta tecnica tambien ayuda a prevenir el event bubbling como event.stopPropagation()*/

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e)=>{
    console.log(e.target.classList); //Para saber a que le estamos dando click

    //**Para disparar evento de acuerdo a las clases de los elementos */

    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }else if(e.target.classList.contains('categoria')){
        console.log('Diste click en categoria');
    }else if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }else{
        console.log('Diste click en imagen');
    }
});

