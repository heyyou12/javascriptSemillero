let nombre = prompt("ingresa tu nombre");
let color = prompt("ingresa tu color favorito");

switch (color) {
  case "amarillo":
    alert("es una persona alegre");

    break;

  case "verde":
    alert("eres una persona saludable");

    break;

  case "azul":
    alert("eres una persona tranquila");

    break;

  default:
    alert("por favor ingresa un color");
    break;
}
