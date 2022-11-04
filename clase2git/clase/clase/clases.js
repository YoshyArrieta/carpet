class Persona{
    //dentro de esta clase, propiedades y metodos de una persona
    //  El constructor es lo primero que se ejecuta cuando ejecutamos una clase
    constructor(nombre, age, raza){
        this.nombre= nombre;
        this.age = age;
        this.raza = raza;
    }

    saludar(){
        console.log("Hola a todos!"+ this.nombre);
    }
}

class PPersona{
    mostrarinformacón(){
        this.nombre=nombre;
        this.age=age;
        this.raza=this.raza;
    }

    saludo(){
        console.log(`nombre: ${this.nombre}año:${this.año}raza:${this.raza}`);
    }
}

//estamos heredando de la clase persona
class Profesor extends Persona {
    constructor(nombre, age, raza, profesion){
        super(nombre,age,profesion)
        this.profesion=profesion;
    }

    infoPorfesor(){
        console.log(`nombre:${this.nombre}años:${this.age}raza:${this.raza}profesion:${this.profesion}`)
    }
}
//vamos a instanciar la clase Persona en person
let person = new Persona('Marc Zukenber',42,'reptil');
person.saludar();//jola a todos!

let personi = new PPersona('mark', 45, 'reptil');
personi.saludo();

let jesualdo = new Profesor("Jesualdo",40,"humano","ing. sistemas");