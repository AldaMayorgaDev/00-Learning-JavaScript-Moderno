/* Intersection Observer */
/* Nos permite identificar cuando un elemento está visible, permite identifica un elemento una vez que es visible en el viewport del navegador */


document.addEventListener('DOMContentLoaded', ()=>{

    /* 1.- habilitamos IntersectionObserver */
    const observer = new IntersectionObserver((entries)=>{
        console.log(entries[0]);

        /* 3.- Le decimos que hacer cuando es visible y cuando no es visible */
        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }else{
            console.log('Ya No esta visible');
        }
    });

    /* 2.- Despues le decimos que elemento va a observar */
    observer.observe(document.querySelector('.premium'));
});