# Formularios

```html
<form action="">
    <label for="nombre">¿Cuál es tu nombre?</label>
    <input type="text" nombre="nombre" id="nombre">
</form>
```

ó

```html
<form action="">
    <label for="nombre">
        <span>¿Cuál es tu nombre?</span>>
        <input type="text" id="nombre">
    </label>
</form>
```

>El atributo `id` del `<input>` debe ser igual al atributo `for` del `<label>`

* `name`: El atributo `name` es utiliado en el back-end.

* `autocomplete`:

* `required`:

<br>

## `<select>`

---

Vieja forma de hacerlo. Con scroll infinito y sin opción de buscador.

```html
<select name="autos" id="">
    <option value="BMW">BMW</option>
    <option value="Mercedes">Mercedes</option>
    <option value="Ford">Ford</option>
    <option value="Chevrolet">Chevrolet</option>
</select>
```

La nueva forma de hacerlo ofrece un buscador. Si el usuario no encuentra la opción en la lista, el valor que ingrese serña aceptado como valor a enviar.

```html
<input list="autos">
<datalist id="autos">
    <option value="BMW"></option>
    <option value="Mercedes"></option>
    <option value="Ford"></option>
    <option value="Chevrolet"></option>
</datalist>
```
