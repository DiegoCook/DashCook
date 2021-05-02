/* function auto() {
    this.marca = "Ford",
    this.modelo = "Focus",
    this.anio = 2014
}

auto.prototype.newAnio = function() {
    this.anio = 2021
}

auto.hasOwnProperty('marca')
auto.hasOwnProperty('newAnio') */
let auto = {
    marca: 'Ford',
    modelo: 'Focus',
    anio: 2008,
    newAnio: function(){
        return this.anio = 2014
    }
}
auto.hasOwnProperty('marca')
