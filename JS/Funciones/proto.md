# Prototype

## Función constructora

```js
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
}
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
```

## Herencia prototípica

<hr><br>

```js
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro hereda los métodos de Animal
Perro.prototype = new Animal();
// Se define el nombre el constructor Perro
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}
// Nuevo método de Perro
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
```

## Clases

<hr><br>

```js
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
```

## Clases y herencia

<hr><br>

```js
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero); //con el método super() se manda a llamar el constructor de la clase padre
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuu Guauuu!!!");
  }
  //un método estático se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
  }
  //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}
Perro.queEres();
const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

// Los getters y setters se invocan como atributos y no como funciones

scooby.setRaza = "Gran Danés"
console.log(scooby.getRaza)
```
