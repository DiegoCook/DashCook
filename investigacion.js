let hoy = new Date(2021, 3, 28)
let options = {
    timeZoneName: 'short',
}

let formato = new Intl.DateTimeFormat('es-AR', options).format(hoy)
formato