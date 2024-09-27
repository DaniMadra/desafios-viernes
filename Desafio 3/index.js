
const nombreProducto = "Billetera";
let precioUnidad = 280; 


let cantidadDeseada =parseInt(prompt("¿Cuántas unidades de " + nombreProducto + " quiere comprar? \n Precio por unidad = $" + precioUnidad));


let costoTotal = precioUnidad * cantidadDeseada;

let costoConDescuento = precioUnidad * cantidadDeseada - precioUnidad * 1/10

if(cantidadDeseada < 5)
alert("El costo total de la compra es: $" + costoTotal);

if(cantidadDeseada >= 5)
    alert("Usted a recibido un descuento del 10% al comprar mas de 5 unidades \n Precio con descuento = $" + costoConDescuento)