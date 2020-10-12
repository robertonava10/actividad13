const comprarCasco = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            compraC: true
        })
    }, 1000)
});

const comprarGuantes = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            compraG: true
        })
    }, 2000)
});

const paseo = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            paseoB: true
        })
    }, 8000)
});

const prepararPaseo = () => {
    comprarCasco
        .then(infoCompraC =>{
        console.log(infoCompraC);
        return comprarGuantes;
    })
        .then(infoCompraG =>{
        console.log(infoCompraG);
        return paseo;
    })
        .then(infoPaseo =>{
        console.log(infoPaseo);
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(() =>{
        console.log("Se termino el paseo");
    })
}

prepararPaseo();