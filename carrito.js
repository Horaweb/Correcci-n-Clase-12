
let botonCompra = document.querySelectorAll(".botonCompra");
let carrito = [];

console.log( botonCompra);

for(let boton    of botonCompra ){

    boton.addEventListener("click" , agregarCarrito )


}


function agregarCarrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;

    let nombreProducto = padre.querySelector("h5").textContent;
    let img = padre.querySelector("img").src;
    let precio = padre.querySelector("span").textContent;
    let parrafo = padre.querySelector("p").textContent;


    const producto = {

        nombre: nombreProducto,
        img: img,
        precio: precio,
        desc: parrafo,
        cantidad: 1
    }


    carrito.push(producto);
    mostrarCarrito( producto);
}




function mostrarCarrito( producto){

    let fila = document.createElement("tr"); 

    fila.innerHTML = `<td><img src="${producto.img} "></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td><button class="btn btn-danger">Eliminar</button></td>
                    `

    let tbody = document.getElementById("tbody");

    tbody.appendChild( fila );




}

console.log( carrito );


$(document).ready( function(){

    $(".botonCompra").click( function(){

        alert("Agregaste un artículo a tu carrito");
    })


})