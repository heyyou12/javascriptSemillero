//variables globales

let letra = document.getElementById("letra");
let numero = document.getElementById("numero");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");

//funciones
const fnA1 = () => {
  console.log(letra.innerHTML);
  if (letra.innerHTML === "AB") {
    numero.innerHTML = "1";
  } else {
    if (letra.innerHTML === "") {
      letra.innerHTML = "A";
    } else {
      alert("ya se encuentra la a");
    }
  }
};

const fnB2 = () => {
  if (letra.innerHTML === "AB" && numero.innerHTML === "1") {
    numero.innerHTML += "2";
  } else {
    if (letra.innerHTML === "A") {
      letra.innerHTML += "B";
    } else {
      alert("falta la letra A");
    }
  }
};

//eventos
btnA1.onclick = function () {
  fnA1();
};

btnB2.onclick = function () {
  fnB2();
};
