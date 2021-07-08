//variables globales
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");

//funciones
const nombreUsuario = () => {
  let nombreUsuario = prompt("ingresa tu nombre");
  nombre.innerHTML = "bienvenido" + nombreUsuario;  
  
  console.log(nombre);
};

//eventos
datos.onclick = function () {
  nombreUsuario();
};
