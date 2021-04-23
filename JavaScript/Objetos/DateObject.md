# Date()

Permite trabajar con fechas y horas. El constructor Date es:

```javascript
new Date(año, mes, día)

//Valores enteros con las representaciones de las partes de una fecha. Como valor entero, el mes se representa de 0 a 11, con 0 = enero y 11 = diciembre.
//Ejemplos

let cumpleanos = new Date("December 17, 1995 03:24:00")
//Valor de tipo cadena que representa una fecha. La cadena debería estar en un formato reconocido por el método Date.parse().

let cumpleanos2 = new Date(1995,11,17)

let cumpleanos3 = new Date(1995,11,17,3,24,0)
//año, mes día, hora, minuto, segundo

```

<br>

---

## <span id="define-properties" style="color: #4750ce">Métodos de Date()

---

<br>

| Método | Descripción |
|---|---|
|`getDate()`| El valor devuelto es un número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local.|
|`getUTCDate()`|Devuelve el día del mes, según la hora universal.|
|`setDate()`|Cambia el día del mes de una instancia determinada de Date, según la hora local. Recibe como parámetro el día de cambio|
|`setUTCDate()`|cambia el día del mes de una instancia determinada de Date, según la hora UTC.|
|`getDay()`|Devuelve el día de la semana (de 0 a 6) de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.|
|`getMonth()`|Devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.|
|`getFullYear()`|Devuelve el año de la fecha indicada acorde a la hora local. Devuelve un número de cuatro cifras, por ejemplo, 1995. Utiliza esta función para obtener un año que cumpla con los años posteriores al 2000. Usa este método en lugar del método `getYear()`, que ya está en desuso|
|`getHours()`|Retorna número entero, entre 0 y 23, representando la hora de la fecha especificada, de acuerdo a la hora local.|
|`getMinutes()`|Devuelve un número entero entre 0 y 59, representando los minutos de la fecha especificada en función de la hora local.|
|`toDateString()`|Devuelve en una string la porción de la fecha de un objeto Date en formato humano legible en Inglés Americano.|
|`toLocaleDateString()`|Devuelve una cadena con una representación de la fecha sensible al lenguaje. Los nuevos argumentos locales y options permiten a las aplicaciones especificar el lenguaje cuyas convenciones de formato deben usarse y permitir personalizar el comportamiento de la función.|
|`toTimeString()`||
|`toLocaleTimeString()`||
|`toString()`||
|`toLocaleString()`||
|`toUTCString()`||
|`toJSON()`||
|`valueOf()`||

*Day*, *Month*, *Year*, *Hour*, *Minutes*, *Seconds* and *Miliseconds* tiene mas mismás funciones `getUTC`, `set`y `setUTC` tal como *Date*.

### SINTAXIS

```javascript
let hoy = new Date()
hoy.getDate()
//retorna 22 (porque hoy es 22 de abril)

hoy.getUTCDate()
//retorna 22 (porque hoy es 22 de abril)

let otroDia = new Date()
otroDia.setDate(10)
//retorna Sat Apr 10 2021 19:36:29 GMT-0300 (hora estándar de Argentina)

hoy.getDay()
//retorna 4 porque hoy es jueves
```