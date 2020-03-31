
let persona = {
    nombre : "tato",
    profesor : true,
    dni : "30999999",
    hobbies : [],
    diHola : function (){
        return"hola mi nombre es " + this.nombre;
    }
};
persona.hobbies.push("tomar cervesa"),
console.log(persona.hobbies);
persona.nombre = "gaston"

console.log (persona.diHola());
