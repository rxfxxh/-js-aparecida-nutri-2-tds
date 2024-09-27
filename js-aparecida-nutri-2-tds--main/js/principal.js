var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>>>> 25
tdImc.textContent = imc.toFixed(2);

if (peso <= 0 || peso >= 1000) {
    console.log("erro, peso inválido!");
}

if (altura <= 0 || altura >= 3) {
    console.log("erro, altura inválida!");
}