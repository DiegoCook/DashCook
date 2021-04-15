
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }
// GETTERS y SETTERS
    // Tanto los getters como los setters permiten controlar la forma en que procesamos los valores de las propiedades. Los nombres de los getters y los setters no pueden ser iguales a los nonbres de las porpiedades, sino generan un bucle. Las buenas prácticas indican que la propiedad puede tener un guión bajo para diferenciarla de los getters y setters, el: this._gato = gato tiene get gato(){}
    get getMarca() {
        return this.marca.toLowerCase()
    }
    get getModelo() {
        return this.modelo.toUpperCase()
    }
    set setMarca(prop1) {
        this.marca = prop1.toUpperCase()
    }
//MÉTODOS
    makeMore() {
        console.log("Este es un método de la clase")
    }
// ** Métodos E S T Á T I C O S **
    //No se ulilizan invocando los objetos creados con la clase. Se utilizan invocando la clase.
    static lugarDeCompra(consesionario, sucursal) {
        console.log(`Lo compré en ${consesionario}, en la sucursal ${sucursal}.`)
    }

}

let tractor = new Vehiculo("Tractor", " de campo")

//Los GETTERS y los SETTERS no se invocan como funciones sino como propiedades.
console.log(tractor.getMarca + " " + tractor.getModelo) //Resultado = tractor DE CAMPO
tractor.setMarca = "Cosechadora" //NO tractor.setmarca("Cosechadora")

// ** Métodos E S T Á T I C O S **
console.log(Vehiculo.lugarDeCompra("Beta", "Nuñez")) //Resultado = Lo compré en Beta, en la sucursal Nuñez.

//** H E R E N C I A **
//************************************** */

class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo)    //"super" siempre se escribe primero, sino arroja un error,
        this.año = año
    }

    makeMoreAndMore () {
        console.log(this.makeMore() + " dentro del método de la clase hija.")
    }
}

let autoUno = new Auto("Chevrolet", "Spin", "2014")

console.log(`Tengo un ${autoUno.getMarca}, modelo ${autoUno.getModelo} del año ${autoUno.año}.`)
//Resultado = Tengo un chevrolet, modelo SPIN del año 2014.
// ** Métodos E S T Á T I C O S y H E R E N C I A **
//Los métodos estáticos se heredan y se invocan tanto con la clase padre como con la hija.
console.log(Auto.lugarDeCompra("Bardal", "San Cristobal")) //Resultado = Lo compré en Bardal, en la sucursal San Cristobal.