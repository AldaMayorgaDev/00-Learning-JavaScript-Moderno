/* API Speech Recognition API */
/* Esta API nos va a permitir que cuando yo hable JavaScript pueda saber o pueda trasladar lo que yo estoy diciendo en el microfono hacia mi pagina web*/

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);


function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    /* Se inicia grabacion */
    recognition.start();

    /* Minetras el usuario esta hablando... */
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent= 'Escuchando...';
    };

    /* Se aplica cuando el usuario deja de hablar */
    recognition.onspeechend = function() {
        salida.textContent= 'Se dejo de grabar...';
        recognition,stop();
    };

    /* Cuando se obtiene los resultados de la grabacion */
    recognition.onresult = function(e) {
        console.log(e.results);
        console.log('La transcripcion de lo que se hablo es: ',e.results[0][0].transcript);


        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('P');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('P');
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100) }%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);


    }
}