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

// FUNCIÓN PARA ACTUALIZAR LA LISTA DE AMIGOS
function actualizarLista() {
  ulListaAmigos.innerHTML = "";

  // Recorrer el array de amigos y agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    li = document.createElement("li");
    li.textContent = amigos[i];
    ulListaAmigos.appendChild(li);
  }
}

// FUNCIÓN PARA SORTEAR EL AMIGO SECRETO
function sortearAmigo() {
  // Validar que haya amigos disponibles en el listado
  if (amigos.length < 2) {
    alert("Atención. No hay suficientes amigos para sortear. Agrega al menos dos nombres.");
    return;
  }

// Generar un índice aleatorio
  indiceAleatorio = Math.floor(Math.random() * amigos.length); 

// Obtener el nombre sorteado
  amigoSecreto = amigos[indiceAleatorio]; 

// Mostrar el resultado
  resultado = document.getElementById("resultado"); 
  resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}
