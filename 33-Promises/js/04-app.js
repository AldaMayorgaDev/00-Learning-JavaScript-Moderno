const paises = [];


const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado ${pais}`);
    }, 3000);
});

nuevoPais('Alemania')
    .then(resultado =>{
        console.log('resultado :>> ', resultado);
        console.log('paises :>> ', paises);
        return nuevoPais('Francia');
    }).then(resultado =>{
        console.log('resultado :>> ', resultado);
        console.log('paises :>> ', paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado =>{
        console.log('resultado :>> ', resultado);
        console.log('paises :>> ', paises);
        
    })
    .catch(error =>{
        console.log(error);
    })