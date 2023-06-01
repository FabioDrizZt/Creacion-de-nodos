/* const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
const nodoSpan = document.querySelector("#nombre");
const nodoContainer = document.querySelector(".container");
nodoSpan.innerHTML = nombre;

//Crear el nodo que vamos a insertar en el HTML
const parrafoNuevo = document.createElement("p");
//Armamos el nodo de texto basado en el apellido
const texto = document.createTextNode(`Su apellido es ${apellido}`);
//Añadimos el nodo de texto al nodo de parrafo
parrafoNuevo.appendChild(texto);
//Añadimos el nodo de parrafo al nodo principal
nodoContainer.appendChild(parrafoNuevo);
 */

const imagenes = [];
const nodosImg = document.querySelectorAll(".imagen");

for (let i = 0; i < nodosImg.length; i++) {
  const imagen = prompt("Ingrese la url de una imagen");
  imagenes.push(imagen);
}

for (let i = 0; i < nodosImg.length; i++) {
  nodosImg[i].setAttribute("src", imagenes[i]);
}
