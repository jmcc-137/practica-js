// //funciones devolviendo resultados
// function sumar(){
//     return 1+1;
// }

// const resultado = sumar();
// console.log(sumar())

// let nombre = "juan"
// function saludar(nombre){
//     console.log("hola " + nombre)
// }
// saludar(nombre);

// //funciones de expresion

// const nombreFuncion = function([parametros]){
//     // cuerpo de la funcion
//     return resultado;
// };

// const suma = function(a, b){
//     return a + b;
// };
// console.log(suma(5,3));

// //Funciones nombradas dentro de una expresion

// const factorial = function fact(n){
//     if(n<=1) return 1;
//     return n * fact(n - 1);
// }
// console.log(factorial(5));//120

// Funciones flecha (Funciones mas compactas)
   //1.funcion tradicional:
   // const suma = function(a,b){
   //  return a+b;
   // }
   // //equivalencia con una funcion flecha
   // const sumar = (a,b) => a+b;
   // //2.sin parametros
   // const saludar =()=> "hola mundo!"
   // console.log(saludar())
   // //3.un solo parametro(puedes omitir los parentesis)
   // const cuadrado = x => x*x;
   // console.log(cuadrado(4))

   //map

   //crear un map

//    const colores = new Map([
//       ['rojo', '#FF0000'],
//       ['verde', '#00FF00'],
//       ['azul', '#0000ff']
//    ]);

//    // console.log(miMapa)

//    //metodos principales

//    //set: agrega o actualiza un par Clave-valor

//    const miMapa = new Map()
//    miMapa.set('nombre','ana')
//    miMapa.set('edad', 25)
//    console.log(miMapa)
//    //get(clave): obtiene el valor asociado a una clave
//    console.log(miMapa.get('nombre'))
//    //has(clave):Verifica si una clave existe en el mapa
//    console.log(miMapa.has('edad'))
//    //delete(clave):elimica un par clave-valor del map con la clave
//    miMapa.delete('nombre')
//    console.log(miMapa)
//    //clear():elimina todo del map
//    miMapa.clear()
//    console.log(miMapa)
//    //size:devuelve la cantidad de valores en el map
//    console.log(miMapa.size)


//    //iterar sobre un map

//    //for..of
//    for(const[valor, clave] of colores){
//       console.log(`clave:${clave}, valor: ${valor}`)
//    }

//    //forEach(funcion flecha)
//    colores.forEach((valor, clave) => {
//    })
//    //metodos de iteracion
//    //keys():para obtener solo las claves
//    //values():para obtener solo los valores
//    //entries():para obterner los pares de clave-valor

//    console.log([colores.keys()]);
//    console.log([...colores.values()])
//    console.log([...colores.entries()])

// //ejemplo practico:contar frecuencia de palabras
// function contarPalabras(texto){
//    const plalabras = texto.split(" ");
//    const mapaFrecuencia = new Map();

//    plalabras.forEach((palabra) =>{
//       if(mapaFrecuencia.has(palabra)){
//          mapaFrecuencia.set(palabra, mapaFrecuencia.get(palabra) +1);
//       }else{
//          mapaFrecuencia.set(palabra, 1);
//       }

//    });
//    return mapaFrecuencia;

// }
// const texto = "hola mundo hola programacion hola";
// console.log(contarPalabras(texto))
 
//sistema de gestion de inventario
//objetivo:Crear un programa para estionar un inventario de productos
//donde cada producto tiene un ID unico,un nombre,una cantidad, y una categoria.

// //ejecucion\
// class Inventario{
//    constructor() {
//       this.productos = new Map();
//    }
//    agregarProcducto(id, nombre, cantidad, categoria){
//       if(this.productos.has(id)){
//          console.log(`el producto con id ${id} ya existe`)
//          return;

//       }
//       this.productos.set(id, {nombre,cantidad, categoria});
//       console.log(`producto ${nombre} agregado al inventario`);

//    }
//    actualizarCantidad(id,nuevaCantidad){
//       if(!this.productos.has(id)) {
//          console.log(`el producto con id ${id} no eyiste`);
//          return;

//       }
//       const producto = this.productos.get(id);
//       producto.cantidad = nuevaCantidad;
//       console.log(`cantidad del producto ${producto.nombre} actualizada a ${nuevaCantidad}`)
//    }

//    eliminarProducto(id){
//       if(this.productos.delete(id)){
//          console.log(`producto con id ${id} eliminado del inventario`)
//       }else{
//          console.log(`el producto no existe`)
//       }
//    }
//    consultarproducto(id){
//       if(!this.productos.has(id)){
//          console.log(`el producto con el id ${id} no existe`)
//       }
//       const producto = this.productos.get(id)
//       console.log(`el producto de id ${id}, cantidad ${producto.cantidad}, nombre ${producto.nombre}`)
//    }

//    buscarPorCategoria(categoria){
//       const resultado = []
//       for(const [id,producto] of this.productos){
//       if(producto.categoria === categoria){
//          resultado.push({id,...producto})
//       }
//    }
//    console.log(`productos en la categoria ${categoria}`, resultado)
//    return resultado;
//    }

//    mostrarInventario(){
//       console.log(`inventario completo`);
//       for(const[id, producto] of this.productos){
//          console.log(`ID:${id},Nombre:${producto.nombre}, Cantidad:${producto.cantidad}, categoria:${producto.categoria}`)
//       }
//    }


// }
// const  inventario = new Inventario();

// inventario.agregarProcducto(1,"Manzana",50,"frutas");
// inventario.agregarProcducto(2,"Tomate",17,"vegetal");
// inventario.agregarProcducto(15,"pepino",60,"vegetal");
// inventario.agregarProcducto(21,"queso",5,"lacteos");


//  inventario.actualizarCantidad(1,70)

//  inventario.consultarproducto(2)

//  inventario.buscarPorCategoria("frutas");

//  inventario.eliminarProducto(21);

//  inventario.mostrarInventario();


//OBJETOS LITERALES

const miObjeto = {
   nombre:"ejemplo objeto",
   version:1,
   descripcion:"un objeto de ejemplo como una funcion",
   mostrarInformacion: function(p1,p2){
      console.log("nombre: " + this.nombre)
      console.log("version: " + this.version)
      console.log("version: " + this.descripcion)
      console.log("parametro1: " + p1)
      console.log("parametro2: " + p2)
   }
}

miObjeto.mostrarInformacion("valor1","valor2")

const persona = {
   nombre:"juan",
   edad:23,
   altura:1.68,
   peso:"60 kg"
};
console.log(persona);

const coche = {
   marca:"toyota",
   modelo:"camry",
   color:"azul",
   peso:1500
};

console.log(coche)

const libro = {
   titulo:"cien años de soledad",
   autor:"Gabriel Garcia Marquez",
   genero:"Realismo magico"
}

console.log(libro)