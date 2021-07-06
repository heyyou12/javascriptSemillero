//operaciones

const suma = () => {
  let num1 = parseFloat(prompt("ingrese el numero 1"));
  let num2 = parseFloat(prompt("ingrese el numero 2"));

  let resultado = num1 + num2;
  alert(resultado);
  console.log(resultado);
};

//operaciones

const resta = () => {
  let num1 = parseFloat(prompt("ingrese el numero 1"));
  let num2 = parseFloat(prompt("ingrese el numero 2"));

  let resultado = num1 - num2;
  alert(resultado);
  console.log(resultado);
};

//operaciones

const multiplicacion = () => {
  let num1 = parseFloat(prompt("ingrese el numero 1"));
  let num2 = parseFloat(prompt("ingrese el numero 2"));

  let resultado = num1 * num2;
  alert(resultado);
  console.log(resultado);
};

//operaciones

const dividir = () => {
  let num1 = parseFloat(prompt("ingrese el numero 1"));
  let num2 = parseFloat(prompt("ingrese el numero 2"));

  if (num2 === 0) {
    alert("no es posible dividir por 0");
  } else {
    let resultado = num1 / num2;
    alert(resultado);
    console.log(resultado);
  }
};
