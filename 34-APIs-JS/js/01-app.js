/* API para crear notificaciones en el navegador */


const notificarBtn = document.querySelector('#notificar');

//Paso 1.- es preguntarle al usuario si desaea o no recibir notificaciones
notificarBtn.addEventListener('click', ()=>{
    Notification
        .requestPermission() //Pregunta si se quiere o no notificaciones
        .then((resultado)=>{
            console.log('El resultado es:>> ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

//Paso 2.- Si se da el permiso para mostrar notifiaciones se crea una notificacion
verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación',{
            icon: 'img/ccj.png', //Agrega logo
            body: 'Aprenendio a personalizar una notificacion' //Agrega texto personalizado
        });

        //Agregando un evento a notificacion para que al dar click abra una pagina
        notificacion.onclick = function (){
            window.open('https://www.google.com/');
        }
    }
})