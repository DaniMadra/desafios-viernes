
const nombreProducto = "Billetera";
let precioUnidad = 28000; 


let cantidadDeseada =parseInt(prompt("¿Cuántas unidades de " + nombreProducto + " quiere comprar?"));


let costoTotal = precioUnidad * cantidadDeseada;


alert("El costo total de la compra es: $" + costoTotal);
