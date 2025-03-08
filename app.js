// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// CREANDO UN ARRAY PARA ALMACENAR LOS NOMBRES
let amigos = [];

// Declaración de las variables a utilizar
let ulListaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let nombre;
let li;
let indiceAleatorio;
let amigoSecreto;
let resultado;

// FUNCIÓN PARA AGREGAR AMIGOS
function agregarAmigo() {
  ulListaAmigos; // Capturando el valor del campo de entrada
  nombre = inputAmigo.value.trim(); // Eliminando espacios en blanco al inicio y al final

  // Validar la entrada. Implementando una validación para asegurarse que el campo no esté vacío
  if (nombre === "") {
    alert("El campo está vacío. Por favor, inserta un nombre para sortear.");
    return;
  }
  // Validando si el nombre ya está en la lista
  if (amigos.includes(nombre)) {
    alert(`Oppssss! El nombre ${nombre} ya está en la lista`);
    return;
  }

  // Agregar el nombre al array de amigos
  amigos.push(nombre);

  // Actualizando la lista de amigos
  actualizarLista();

  // Limpiando el campo de entrada
  inputAmigo.value = "";
}
