// Archivo eliminaProducto.js

import { conexionAPI } from "./conexionAPI.js";
let mensaje = document.getElementById("txt-mensaje");
// Función para eliminar un producto por su ID
async function eliminarProducto(id) {
  try {
    // Realiza la solicitud DELETE a la API
    const respuesta = await fetch(`http://localhost:3001/productos/${id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      throw new Error(`Error al eliminar producto: ${respuesta.status} - ${respuesta.statusText}`);
    }
    alert('Producto eliminado correctamente');
    // mensaje.innerHTML = "Producto eliminado correctamente";

  } catch (error) {

  }
}

// Evento delegado para manejar el click en los botones de eliminar
const lista = document.querySelector("[data-lista]");
lista.addEventListener("click", async (event) => {
  if (event.target.id === "btnEliminar") {
    const card = event.target.closest("li");
    const idProducto = card.dataset.id;

    if (idProducto) {
      await eliminarProducto(idProducto);
      card.remove(); // Elimina el elemento del DOM
    } else {
      console.error("ID de producto no encontrado en el elemento.");
    }
  }
});

export { eliminarProducto };
