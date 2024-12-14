import { conexionAPI } from "./conexionAPI.js";

let mensaje = document.getElementById("txt-mensaje");
let btnSubir = document.getElementById("btnSubirProducto");

document.getElementById("btnSubirProducto").addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("Formulario interceptado");

  // Obtén los valores de los inputs
  let nombre_producto = document.getElementById("nombre-producto").value.trim();
  let precio_producto = document.getElementById("precio-producto").value.trim();
  let imagen_producto = document.getElementById("imagen-producto").value.trim();


  if (!nombre_producto) {
    mensaje.innerHTML = "Nombre del producto no ingresado.";
    return;
  }

  if (!imagen_producto) {
    mensaje.innerHTML = "Enlace de imagen no ingresado.";
    return;
  }

  if (!precio_producto) {
    mensaje.innerHTML = "Precio del producto no ingresado.";
    return;
  }

  try {
    // Llamada a la API
    const respuesta = await conexionAPI.subeProducto(nombre_producto, precio_producto, imagen_producto);

    if (!respuesta.ok) {
      mensaje.innerHTML = "No se pudo agregar el producto.";
      throw new Error("No se pudo agregar el producto");
    }

    // Mensaje de éxito
    mensaje.innerHTML = "Producto agregado correctamente.";

    // Espera antes de recargar
    setTimeout(() => {
      location.reload();
    }, 3000);

  } catch (error) {

    console.error(error);
    mensaje.innerHTML = "Ocurrió un error al agregar el producto.";
  }
});

