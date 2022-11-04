//operadores losgicos
//operador or ( || ) Devuelve a (si es verdadero), o si no, b

console.log(null||false);//false
console.log(true||false);//true

//tenemos una data donde tenemos almacenado la cantidad de balas que le quedal al personal
//necesitamos mostrar al usuario visualmente si se ha quedado sin balas o nno. utilizamos ||
//si queremos sumar la cantidad de balas que tiene con los protectiles utilizariamos ??

const data= {balas : 0};
console.log(data.balas || "Sin balas");
console.log(data.balas ?? "sin balas");

const requerido = true;
const saludar = () => "Hola clase!";

console.log(requerido &&saludar())

const celular ={
    color: "blue",
    modelo: "sansung",
    tamaño: "14cmaltura, 5.5deancho",
    señal: "tigo",
    camara: "alta definición",
    pantalla: "vidrio templado",
    sonarAlarma: () => "beep beep 6:00am",
    apagar: function () {
        return console.log("Apagar");
    }
}

const tablleta ={
    color: "blue",
    modelo: "sansung",
    tamaño: "14cmaltura, 5.5deancho",
    señal: "tigo",
    camara: "alta definición",
    pantalla: "vidrio templado",
    apagar: function () {
        return console.log("Apagar");
    }
}

//cllases
//herencia

console.log(celular.modelo);
console.log(celular.apagar());