console.log("string");

let texto = "cinco palabras, uno, dos, tres, cuatro, cinco";

console.log( texto.startsWith("hola") )
let prueba = texto.startsWith("recorcholis");

/*if(prueba){
        console.log("Esto es una mala palabra")
}else{
    console.log("puede seguir escribiendo")
}*/

console.log(prueba ? "Esto es una mala palabra ": "puede seguir escribiendo")

console.log(texto.endsWith("cinco"));

//si encuentra la letra muestra su posicion y sino muestra -1
console.log(texto.indexOf("t"))//26
//true si lo encuentra, false si no lo encuentra
console.log(texto.includes("o"))
console.log(texto.indexOf("cua",10))//