//variables globales
let datos = document.getElementById("datos");

//funciones
const nombreUsuario = () => {
    let nombre=prompt("ingresa tu nombre");
    alert(nombre);
    console.log(nombre);  
};

//eventos
datos.onclick = function () {
    nombreUsuario();
    
}