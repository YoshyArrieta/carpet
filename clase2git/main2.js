console.log("Empezamos");



//


let wii = "hola";

let primer = "primera variable";
const estatico = "soy un contenido estatico";

let a = 120;

console.log("por fuera equivale algo a: "+ a);

function ambito(){
    console.log("2. sigo valiendo: "+ a);

    let a = 8000;
    console.log("3. ahora valgo: " +a)
}
console.log(ambito());
console.log(a);