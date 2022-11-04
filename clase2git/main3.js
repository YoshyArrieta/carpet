console.log("funciones");

for( let a = 0; a<10; a++){
    console.log(a + " vez que me repito")
}

let abc = 0;
while(abc){
    console.log("me ejecuto")
}


let array = ['Jesús', 'Manuel','Arrieta','Amaya'];
let apellidos = ['torres', 'barros','roiz','barraca'];

for (let i = 0; i <= array.length; i ++) {
    console.log(array[i]);    
}

array.forEach(valor => {
    console.log(valor);
});

apellidos.map( valor =>{
    console.log(valor);
})