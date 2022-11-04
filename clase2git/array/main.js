//Realizarrme una funcion que devuelva una lista de 5 nombres
//y si un nombre empieza por "ma" mandarle un sa en consola


let array = ['Javier','Juanca','Manuel', 'Mandalaman','morales'];

array.forEach(array => {
    if(array.startsWith("Ma")){
        console.log("saludo "+ array);
    }
    console.log("array: "+ array);
});
