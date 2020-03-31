const Usuario = require ("./usuario")
const fs = require ("fs")

let u1 = new Usuario("maximo","maximo@gmail.com");
const contenido = fs.readFileSync("usuarios2.json","utf8");

if (contenido.lengt == 0 ){
    let usuarios2 = []
    usuarios2.push(u1)
}
else{
let usuarios2 = JSON.parse(contenido);
usuarios2.push(u1)
}

let json = JSON.stringify(u1);

fs.writeFileSync("usuarios.json",json);


console.log (json)

