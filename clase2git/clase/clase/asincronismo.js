console.log("cargando banner...");
console.log("cargando textos...")
let tareaAsincrona = () => {
    let promesa = new promise( (resolve, reject ) => {
        setTimeout(function () => {
            console.log("Mensajes cargados asincronicamente");
            resolve();
        }, 1300)
    })
    return promesa
}

tereaAsincrona();
console.log("cargando footer");