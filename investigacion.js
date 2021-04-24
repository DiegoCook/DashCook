let hoy = new Date()
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'America/Argentina/Buenos_Aires',
    timeZoneName: 'short',
    fractionalSecondDigits: 3,
    era: 'long'
}

let formato = new Intl.DateTimeFormat('es-AR', options)
let diseccionDeHoy = formato.formatToParts(hoy) 

const mejorandoHoy = () => {
    for(let i = 0; i < diseccionDeHoy.length; i++) {
        if(diseccionDeHoy[i].value === " ") {
            diseccionDeHoy[i].value = " 🤓 " 
        }
        if(diseccionDeHoy[i].value === ", ") {
            diseccionDeHoy[i].value = " 🗓] "
        }
    }
    return diseccionDeHoy
}

function mapenado(elemento){
    let soloValue = elemento.value
    return soloValue
}

function armandoHoy() {
   let arrayHoy = diseccionDeHoy.map(mapenado)
   return arrayHoy.join("")
}

mejorandoHoy()
armandoHoy()




