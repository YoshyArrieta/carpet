console.log("Empezamos");

//

let wii = "calculemos los datos";

let primer = "primera variable";
const estatico = "soy un contenido estatico";

let a = 10;
let b = 10;
console.log("primer valor: "+ a);
console.log("segundo valor: "+ b)
console.log("calcular: "+a*b)
function calcular(){
    let resultado=10+10;
    console.log("suma: "+ resultado);
}
calcular();

function restar( num1, num2){
    console.log(num1-num2);
}

restar(10,20);

//array function

/*const saludar=function(name="Jesús",extra="bienvenido"){
    return console.log("hola "+name,extra)
}*/

/*function saludar(name="Jesús",extra="bienvenido"){
    return console.log("hola "+name,extra)
}
*/

const saludar=(name="Jesús",extra="bienvenido")=>{
    return console.log("hola "+name,extra)
}
const seguir=(name="como estas?",extra="que tal tu dia?")=>{
    return console.log("quiero saber "+name,extra)
}

saludar("juan");
seguir();

//funciones anonimas

/*const fUno =function (){
    console.log("soy la funcion numero uno")
}*/

const fUno = () => {
    console.log("soy la funcion numero uno")
}