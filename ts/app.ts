'use strict'

// Boton valoracion
const valoracionIn  = (document.querySelector('#valoracion')  as HTMLFormElement)
const btnvaloracion = (document.querySelector('#btnvaloracion') as HTMLButtonElement)

// Boton cuenta
const paisIn  = (document.querySelector('#pais')  as HTMLFormElement)
const ibanIn  = (document.querySelector('#iban')  as HTMLFormElement)
const entidadIn  = (document.querySelector('#entidad')  as HTMLFormElement)
const sucursalIn  = (document.querySelector('#sucursal')  as HTMLFormElement)
const dcIn  = (document.querySelector('#dc')  as HTMLFormElement)
const cuentaIn  = (document.querySelector('#cuenta')  as HTMLFormElement)
const btncuenta = (document.querySelector('#btncuenta') as HTMLButtonElement)

// Boton fecha
const fechaIn = (document.querySelector('#fecha')  as HTMLFormElement)
const btnsemana = (document.querySelector('#btnsemana') as HTMLButtonElement)



btnvaloracion.addEventListener('click',(): void =>{
    alert(`Has valorado con ${ valoracionIn.value } puntos`)
})

btncuenta.addEventListener('click',(): void =>{
    alert(`Le informamos que su cuenta bancaria es: ${ paisIn.value+ `-` +ibanIn.value+ `-` +entidadIn.value+ `-` +sucursalIn.value+ `-` +dcIn.value+ `-` +cuentaIn.value } `)
})

btnsemana.addEventListener('click',(): void =>{
    alert(`La fecha seleccionada en el elemento de fecha es ${ fechaIn.value } `)
})