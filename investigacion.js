function saludar(ciudad, pais) {
    console.log(`Hola. Soy ${this.nombre} ${this.apellido}. Vivo en ${ciudad}, ${pais}.`)
}

const diego = {
    nombre: 'Diego',
    apellido: 'Cook'
}

let geoLoc = {
    ciudad: 'Buenos Aires',
    pais: 'Argentina'
}


saludar.apply(diego, Object.values(geoLoc))

