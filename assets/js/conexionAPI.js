// Función asincrónica para listar productos desde una API
async function listarProductos() {

  // Se realiza una solicitud HTTP GET a la dirección "http://localhost:3001/productos"
  // utilizando el método `fetch`. Esta solicitud obtiene datos desde un servidor local.
  const conexion = await fetch("http://localhost:3001/productos");

  // Los datos obtenidos de la respuesta (`conexion`) se convierten a formato JSON
  // utilizando el método `.json()`. Sin embargo, aquí falta un `await` para asegurar
  // que la conversión ocurra correctamente.
  const conexionConvertida = conexion.json();

  // Se devuelve el resultado de la conversión a JSON (esto debería representar 
  // un arreglo o un objeto con los productos obtenidos del servidor).
  return conexionConvertida;
}


async function subeProducto(nombre, precio, imagen) {
  try {
    const conexion = await fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        precio: precio,
        imagen: imagen,
      }),
    });

    if (!conexion.ok) {
      throw new Error(`Error al conectar: ${conexion.status} - ${conexion.statusText}`);
    }

    const conexionConvertida = await conexion.json(); // Espera la conversión a JSON
    if (conexionConvertida) {
      alert('Producto agregado correctamente');
    }
    return conexionConvertida; // Retorna el resultado
  } catch (error) {
    console.error("Error en subeProducto:", error);
    alert("Hubo un problema al subir el producto.");
    throw error; // Lanza el error si necesitas manejarlo en otro lugar
  }
}


// Se exporta un objeto llamado `conexionAPI` que contiene la función `listarProductos`
// Esto permite usar la función en otros archivos mediante una importación.

export const conexionAPI = {
  listarProductos, subeProducto
}

listarProductos();