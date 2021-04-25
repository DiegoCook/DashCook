let hoy = new Date()
let options = {
    timeZone: 'America/Argentina/Buenos_Aires'
}

let formato = new Intl.DateTimeFormat('zh_Hans_SG', options)
let opcionesUsadas = formato.resolvedOptions()