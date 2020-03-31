function Producto(nombre, precio,codigo,marca=null){
    this.nombre= nombre;
    this.precio= precio;
    this.codigo=codigo;
    //this.marca = (marca !=undefined)?marca : null;sin¡en marca = null
function Marca (nombre,codigo){
    this.marca= nombre;
    this.codigo= codigo;
}
modelo.export = Producto
 function Carrito(){
    this.productos=[];
    this.agregarProducto = function (producto){
        this.productos.push(producto);
    }
this.quitarProducto = function(producto){
    let arraysLista =[]
     for (var i =0 ;i< this.productos.lenght;i++)
      if (this.producto[i].codigo != producto.codigo){
        arraysLista.push(this.producto[i]);
    }

}
this.producto= arrayLista 
}
this.dameTotal = function (){
    let total= 0;
    for (let i = 0 ; i< this.productos.lenght;i++)
    let prod = this.productos[i];
    total = prod.precio + total 
    return total;
}
}
let marca1= new Marca ("a","adidas")
let prod1= new Producto(manillar,100,a, marca1);
let prod2= new Producto(cubierta,200,b);
console.log(prod1,prod2)
let prod3= new Producto(camara,150,3), marca1;

let Carrito = new Carrito([]);

Carrito.agregarProducto(prod1)
Carrito.agregarProducto(prod2)
console.log (Carrito.dameTotal)
Carrito.quitarProducto(prod3)