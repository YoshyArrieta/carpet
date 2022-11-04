console.log("Empezamos");



//


var antes = "antes";

let primer = "primera variable";
const estatico = "soy un contenido estatico";

var a = 100;

console.log("por fuera equivale algo a: "+ a);

function ambito(){
    console.log("2. sigo valiendo: "+ a);

    var a = 80;
    console.log("3. ahora valgo: " +a)
}
console.log(ambito());
console.log(a);