import { conexionAPI } from "./conexionAPI.js";
import "./eliminaProducto.js";

// let catalogoProd = document.getElementById(contenedorCatalogo);
const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id) {
  const consola = document.createElement("li");
  consola.className = "producto_item";
  consola.dataset.id = id; // Agrega el ID al dataset
  consola.innerHTML = `
    <img class="imgProducto" src="${imagen || '../assets/img/notFound.png'}" alt="${nombre}">
    <p class="nombreProducto">${nombre}</p>
    <div class="precio-eliminar">
      <p class="precioProducto">$ ${precio}</p>
      <span id="btnEliminar" class="material-symbols-outlined">
        delete
      </span>
    </div>`;
  return consola;
}

async function listarProductos() {
  try {
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(({ nombre, precio, imagen, id }) => {
      lista.appendChild(crearCard(nombre, precio, imagen, id));
    });

  } catch (error) {
    console.error("Error al listar productos:", error);
  }
}

// Llamar a la función para listar productos
listarProductos();


//