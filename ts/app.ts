'use strict'

const valoracionIn  = (document.querySelector('#valoracion')  as HTMLFormElement)
const btnvaloracion = (document.querySelector('#btnvaloracion') as HTMLButtonElement)


const paisIn  = (document.querySelector('#pais')  as HTMLFormElement)
const ibanIn  = (document.querySelector('#iban')  as HTMLFormElement)
const entidadIn  = (document.querySelector('#entidad')  as HTMLFormElement)
const sucursalIn  = (document.querySelector('#sucursal')  as HTMLFormElement)
const dcIn  = (document.querySelector('#dc')  as HTMLFormElement)
const cuentaIn  = (document.querySelector('#cuenta')  as HTMLFormElement)
const btncuenta = (document.querySelector('#btncuenta') as HTMLButtonElement)


btnvaloracion.addEventListener('click',()=>{
    alert(`Has valorado con ${ valoracionIn.value } puntos`)
})

btncuenta.addEventListener('click',()=>{
    alert(`Le informamos que su cuenta bancaria es: ${ paisIn.value+ibanIn.value+entidadIn.value+sucursalIn.value+dcIn.value+cuentaIn.value } `)
})