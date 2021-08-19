//constructor
let cancion = prompt("Cómo se llama la cancion?");
let cantante = prompt("Cómo se llama el cantante de la cancion?");
let genero = prompt("Cual es el genero de la cancion?");

class Lectura{
  constructor (cancion, cantante, genero){
  this.cancion = cancion;
  this.cantante = cantante;
  this.genero = genero;
  }

  salida(){
    alert("Se agrego a tus lista " + this.cancion + " de " + this.cantante + ", del genero " + this.genero);
  }
}

const lectura1 = new Lectura( cancion , cantante, genero);
lectura1.salida();


var arrayLectura = [];
do{
    var comprobacion = prompt('ingrese un nombre de la cancion');
    if comprobacion === "fin"|| comprobacion === "FIN" || comprobacion === "Fin"){
       break;
    }else{
        cancionP = comprobacion;
        var cantanteP = prompt();
        var generoP = prompt();
        arrayLectura.push(new Lectura(cancionP, cantanteP, generoP))
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

console.log(arrayLectura);

//disco sin stock

var sinStock = arrayLectura.filter(cancion => cancion == 0 || cancion.disponible == false);
console.log(sinStock) ;
document.write("<h3> Lista de Discos sin stock (cantidad = 0 o disponible = false): </h3>");
