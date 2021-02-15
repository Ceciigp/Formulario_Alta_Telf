'use strict';
// Boton valoracion
var valoracionIn = document.querySelector('#valoracion');
var btnvaloracion = document.querySelector('#btnvaloracion');
// Boton cuenta
var paisIn = document.querySelector('#pais');
var ibanIn = document.querySelector('#iban');
var entidadIn = document.querySelector('#entidad');
var sucursalIn = document.querySelector('#sucursal');
var dcIn = document.querySelector('#dc');
var cuentaIn = document.querySelector('#cuenta');
var btncuenta = document.querySelector('#btncuenta');
// Boton fecha
var fechaIn = document.querySelector('#fecha');
var btnsemana = document.querySelector('#btnsemana');
btnvaloracion.addEventListener('click', function () {
    alert("Has valorado con " + valoracionIn.value + " puntos");
});
btncuenta.addEventListener('click', function () {
    alert("Le informamos que su cuenta bancaria es: " + (paisIn.value + "-" + ibanIn.value + "-" + entidadIn.value + "-" + sucursalIn.value + "-" + dcIn.value + "-" + cuentaIn.value) + " ");
});
btnsemana.addEventListener('click', function () {
    alert("La fecha seleccionada en el elemento de fecha es " + fechaIn.value + " ");
});
