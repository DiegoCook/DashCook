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
