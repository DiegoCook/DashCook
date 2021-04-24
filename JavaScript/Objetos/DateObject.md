# <span id="inicio">Date()

Permite trabajar con fechas y horas. El constructor Date es:

```javascript
new Date(año, mes, día)

//Valores enteros con las representaciones de las partes de una fecha. Como valor entero, el mes se representa de 0 a 11, con 0 = enero y 11 = diciembre.

//Ejemplos:

let cumpleanos = new Date("December 17, 1995 03:24:00")
//Valor de tipo cadena que representa una fecha. La cadena debería estar en un formato reconocido por el método Date.parse().

let cumpleanos2 = new Date(1995,11,17)

let cumpleanos3 = new Date(1995,11,17,3,24,0)
//año, mes día, hora, minuto, segundo

```

## ÍNDICE

[Métodos de Date()](#metodos)

[Intl.DateTimeFormat](#intl-date-tim-format)

[Time Zone lis in JS](#time-zone-list)

[Lista de formatos por idiomas y paises](#list-of-locales)

<br>

---

## <span id="metodos" style="color: #4750ce">Métodos de Date()

---

<br>

| Método | Descripción |Ref.|
|---|:---:|:---:|
|`getDate()`| El valor devuelto es un número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)|

```javascript
let hoy = new Date()
hoy.getDate()
//retorna 22 (porque hoy es 22 de abril)
```

||||
|---|:---:|:---:|
|`getUTCDate()`|Devuelve el día del mes, según la hora universal.|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)|

```javascript
hoy.getUTCDate()
//retorna 22 (porque hoy es 22 de abril)
```

||||
|---|:---:|:---:|
|`setDate()`|Cambia el día del mes de una instancia determinada de Date, según la hora local. Recibe como parámetro el día de cambio|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)|

```javascript
let otroDia = new Date()
otroDia.setDate(10)
console.log(otroDia)
//retorna Sat Apr 10 2021 19:36:29 GMT-0300 (hora estándar de Argentina)
```

||||
|---|:---:|:---:|
|`setUTCDate()`|cambia el día del mes de una instancia determinada de Date, según la hora UTC.|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate)|

```javascript
let otroDia = new Date()
otroDia.setUTCDate(10)
console.log(otroDia)
//retorna: Sat Apr 10 2021 02:02:05 GMT-0300 (hora estándar de Argentina)
```

||||
|---|:---:|:---:|
|`getDay()`|Devuelve el día de la semana (de 0 a 6) de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)|

```javascript
hoy.getDay()
//retorna 4 porque hoy es jueves
```

||||
|---|:---:|:---:|
|`getMonth()`|Devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)|

```javascript
hoy.getMonth()
//retorna 3 porque es abril
```

||||
|---|:---:|:---:|
|`getFullYear()`|Devuelve el año de la fecha indicada acorde a la hora local. Devuelve un número de cuatro cifras, por ejemplo, 1995. Utiliza esta función para obtener un año que cumpla con los años posteriores al 2000. Usa este método en lugar del método `getYear()`, que ya está en desuso|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)|

```javascript
hoy.getFullYear()
//retorna: 2021
```

||||
|---|:---:|:---:|
|`getHours()`|Retorna número entero, entre 0 y 23, representando la hora de la fecha especificada, de acuerdo a la hora local.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)|

```javascript
hoy.getHours()
//retorna 22 porque hoy tiene las diez de la noche.
```

||||
|---|:---:|:---:|
|`getMinutes()`|Devuelve un número entero entre 0 y 59, representando los minutos de la fecha especificada en función de la hora local.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)|

```javascript
hoy.getMinutes()
//retorna 59
```

||||
|---|:---:|:---:|
|`toDateString()`|Devuelve en una string la porción de la fecha de un objeto Date en formato legible en Inglés Americano.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)|

```javascript
hoy.toDateString()
//retorna "Thu Apr 22 2021"
```

||||
|---|:---:|:---:|
|`toLocaleDateString()`|Devuelve una cadena con una representación de la fecha sensible al lenguaje. Los nuevos argumentos **locales** y **options** permiten a las aplicaciones especificar el lenguaje cuyas convenciones de formato deben usarse y permitir personalizar el comportamiento de la función.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)|

```javascript
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }

options.timeZone = 'America/Argentina/Buenos_Aires'
options.timeZoneName = 'long'

hoy.toLocaleDateString("es-AR", options)
//retorna: "jue, 22 de abril de 2021 hora estándar de Argentina"
```

||||
|---|:---:|:---:|
|`toTimeString()`|Devuelve en una string la porción de la hora de un objeto Date en formato legible en Inglés Americano.|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)|

```javascript
hoy.toTimeString()
//return: "00:22:45 GMT-0300 (hora estándar de Argentina)"
```

||||
|---|:---:|:---:|
|`toLocaleTimeString()`|Devuelve una cadena con una representación de la parte del tiempo de esta fecha sensible al idioma. Los nuevos argumentos **locales** y **options** le permiten a la aplicación especificar el idioma de convenciones de formato deben usar y personalizar el comportamiento de esta función.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)|

```javascript
let options = { timeZone: 'UTC', timeZoneName: 'short' }
options.hour12 = true

hoy.toLocaleTimeString("es-AR", options)
//retorna: "1:59:22 a. m. UTC"
```

||||
|---|:---:|:---:|
|`toString()`|Returns a string representing the specified Date object.|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)|

```javascript
hoy.toString()
//retorna: "Thu Apr 22 2021 22:59:22 GMT-0300 (hora estándar de Argentina)"
```

||||
|---|:---:|:---:|
|`toLocaleString()`|Devuelve un cadena con la representación al idioma de la fecha especificada. Los nuevos argumentos **locales** y **options** permiten a las aplicaciones especificar el idioma cuyas convenciones de formato deben usarse y personalizar el comportamiento de la función.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)|

```javascript
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }

options.timeZone = 'UTC'
options.timeZoneName = 'short'
options.hour12 = true

hoy.toLocaleString("es-AR", options)
//retorna: "vie, 23 de abril de 2021 4:29:29 a. m. UTC"
```

||||
|---|:---:|:---:|
|`toUTCString()`|convierte una fecha en una cadena, utilizando la zona horaria UTC.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)|

```javascript
hoy.toUTCString()
//retorna: "Fri, 23 Apr 2021 03:22:45 GMT"
```

||||
|---|:---:|:---:|
|`toJSON()`|Retorna una representacion de cadena del objeto Date.|[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON)|

```javascript
hoy.toJSON()
//retornma: "2021-04-23T03:22:45.472Z"
```

||||
|---|:---:|:---:|
|`valueOf()`|Devuelve el valor primitivo de un objeto Date.|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf)|

```javascript
hoy.valueOf()
//retorna 1619148165472
```

Nota: *Day*, *Month*, *Year*, *Hour*, *Minutes*, *Seconds* and *Miliseconds* tiene mas mismás funciones `getUTC`, `set` y `setUTC` tal como *Date*.

[Enlace a MDN - Date](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

[Enlace a w3school - JavaScript Date Reference](https://www.w3schools.com/jsref/jsref_obj_date.asp)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

<br>

---

## <span id="intl-date-tim-format" style="color: #4750ce">Intl.DateTimeFormat

---

<br>

El objeto permite el formato de fecha y hora sensible al idioma.

### Constructor

```javascript
let hoy = new Date()
let options = { 
  weekday: 'short', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: 'numeric',
  second: 'numeric',
  minute: 'numeric',
  timeZone: 'America/Argentina/Buenos_Aires',
  timeZoneName: 'long',
  fractionalSecondDigits: 3, //número de dígitos para la fracción de segundos
  hour12: true,
  //dayPeriod: 'long' figura como opción en MDN pero no logré hacerlo funcionar
  }

let hoyConFormato = new Intl.DateTimeFormat("es-AR", options).format(hoy)
//retorna: "vie, 23 de abril de 2021 7:36:05,657 p. m. hora estándar de Argentina"
```

### Intl.DateTimeFormat().format()

Formatea una fecha de acuerdo con la configuración regional y las opciones de formato de este objeto `Intl.DateTimeFormat`.

```javascript
const options1 = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
  }
const hoy = new Date()

const hoyConFormato = new Intl.DateTimeFormat('es-AR', options1)
const todayWithFormat = new Intl.DateTimeFormat('en-US', options1)

hoyConFormato.format(hoy)
//retorna: "viernes, 23 de abril de 2021"
todayWithFormat.format(hoy)
//retorna: "Friday, April 23, 2021"
```

Si se utiliza con `map()` no debe utilizarse como función invocada `.format()` sino solo `.format`

```javascript
var fechas = [new Date(1810, 4), new Date(1816, 6), new Date(1982, 3)]
var options = { year: 'numeric', month: 'long'}
var fechasConFormato = new Intl.DateTimeFormat('es-AR', options)
var fechasFormateadas = fechas.map(fechasConFormato.format)
fechasFormateadas
//retona: (3) ["mayo de 1810", "julio de 1816", "abril de 1982"]
```



[Enlace a MDN - Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

### <span id="time-zone-list">Time Zone list in Jacascript

```javascript
  'Europe/Andorra',
  'Asia/Dubai',
  'Asia/Kabul',
  'Europe/Tirane',
  'Asia/Yerevan',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Antarctica/Mawson',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba',
  'America/Argentina/Salta',
  'America/Argentina/Jujuy',
  'America/Argentina/Tucuman',
  'America/Argentina/Catamarca',
  'America/Argentina/La_Rioja',
  'America/Argentina/San_Juan',
  'America/Argentina/Mendoza',
  'America/Argentina/San_Luis',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Ushuaia',
  'Pacific/Pago_Pago',
  'Europe/Vienna',
  'Australia/Lord_Howe',
  'Antarctica/Macquarie',
  'Australia/Hobart',
  'Australia/Currie',
  'Australia/Melbourne',
  'Australia/Sydney',
  'Australia/Broken_Hill',
  'Australia/Brisbane',
  'Australia/Lindeman',
  'Australia/Adelaide',
  'Australia/Darwin',
  'Australia/Perth',
  'Australia/Eucla',
  'Asia/Baku',
  'America/Barbados',
  'Asia/Dhaka',
  'Europe/Brussels',
  'Europe/Sofia',
  'Atlantic/Bermuda',
  'Asia/Brunei',
  'America/La_Paz',
  'America/Noronha',
  'America/Belem',
  'America/Fortaleza',
  'America/Recife',
  'America/Araguaina',
  'America/Maceio',
  'America/Bahia',
  'America/Sao_Paulo',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Santarem',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Manaus',
  'America/Eirunepe',
  'America/Rio_Branco',
  'America/Nassau',
  'Asia/Thimphu',
  'Europe/Minsk',
  'America/Belize',
  'America/St_Johns',
  'America/Halifax',
  'America/Glace_Bay',
  'America/Moncton',
  'America/Goose_Bay',
  'America/Blanc-Sablon',
  'America/Toronto',
  'America/Nipigon',
  'America/Thunder_Bay',
  'America/Iqaluit',
  'America/Pangnirtung',
  'America/Atikokan',
  'America/Winnipeg',
  'America/Rainy_River',
  'America/Resolute',
  'America/Rankin_Inlet',
  'America/Regina',
  'America/Swift_Current',
  'America/Edmonton',
  'America/Cambridge_Bay',
  'America/Yellowknife',
  'America/Inuvik',
  'America/Creston',
  'America/Dawson_Creek',
  'America/Fort_Nelson',
  'America/Vancouver',
  'America/Whitehorse',
  'America/Dawson',
  'Indian/Cocos',
  'Europe/Zurich',
  'Africa/Abidjan',
  'Pacific/Rarotonga',
  'America/Santiago',
  'America/Punta_Arenas',
  'Pacific/Easter',
  'Asia/Shanghai',
  'Asia/Urumqi',
  'America/Bogota',
  'America/Costa_Rica',
  'America/Havana',
  'Atlantic/Cape_Verde',
  'America/Curacao',
  'Indian/Christmas',
  'Asia/Nicosia',
  'Asia/Famagusta',
  'Europe/Prague',
  'Europe/Berlin',
  'Europe/Copenhagen',
  'America/Santo_Domingo',
  'Africa/Algiers',
  'America/Guayaquil',
  'Pacific/Galapagos',
  'Europe/Tallinn',
  'Africa/Cairo',
  'Africa/El_Aaiun',
  'Europe/Madrid',
  'Africa/Ceuta',
  'Atlantic/Canary',
  'Europe/Helsinki',
  'Pacific/Fiji',
  'Atlantic/Stanley',
  'Pacific/Chuuk',
  'Pacific/Pohnpei',
  'Pacific/Kosrae',
  'Atlantic/Faroe',
  'Europe/Paris',
  'Europe/London',
  'Asia/Tbilisi',
  'America/Cayenne',
  'Africa/Accra',
  'Europe/Gibraltar',
  'America/Godthab',
  'America/Danmarkshavn',
  'America/Scoresbysund',
  'America/Thule',
  'Europe/Athens',
  'Atlantic/South_Georgia',
  'America/Guatemala',
  'Pacific/Guam',
  'Africa/Bissau',
  'America/Guyana',
  'Asia/Hong_Kong',
  'America/Tegucigalpa',
  'America/Port-au-Prince',
  'Europe/Budapest',
  'Asia/Jakarta',
  'Asia/Pontianak',
  'Asia/Makassar',
  'Asia/Jayapura',
  'Europe/Dublin',
  'Asia/Jerusalem',
  'Asia/Kolkata',
  'Indian/Chagos',
  'Asia/Baghdad',
  'Asia/Tehran',
  'Atlantic/Reykjavik',
  'Europe/Rome',
  'America/Jamaica',
  'Asia/Amman',
  'Asia/Tokyo',
  'Africa/Nairobi',
  'Asia/Bishkek',
  'Pacific/Tarawa',
  'Pacific/Enderbury',
  'Pacific/Kiritimati',
  'Asia/Pyongyang',
  'Asia/Seoul',
  'Asia/Almaty',
  'Asia/Qyzylorda',
  'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Asia/Aqtobe',
  'Asia/Aqtau',
  'Asia/Atyrau',
  'Asia/Oral',
  'Asia/Beirut',
  'Asia/Colombo',
  'Africa/Monrovia',
  'Europe/Vilnius',
  'Europe/Luxembourg',
  'Europe/Riga',
  'Africa/Tripoli',
  'Africa/Casablanca',
  'Europe/Monaco',
  'Europe/Chisinau',
  'Pacific/Majuro',
  'Pacific/Kwajalein',
  'Asia/Yangon',
  'Asia/Ulaanbaatar',
  'Asia/Hovd',
  'Asia/Choibalsan',
  'Asia/Macau',
  'America/Martinique',
  'Europe/Malta',
  'Indian/Mauritius',
  'Indian/Maldives',
  'America/Mexico_City',
  'America/Cancun',
  'America/Merida',
  'America/Monterrey',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Chihuahua',
  'America/Ojinaga',
  'America/Hermosillo',
  'America/Tijuana',
  'America/Bahia_Banderas',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Africa/Maputo',
  'Africa/Windhoek',
  'Pacific/Noumea',
  'Pacific/Norfolk',
  'Africa/Lagos',
  'America/Managua',
  'Europe/Amsterdam',
  'Europe/Oslo',
  'Asia/Kathmandu',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Auckland',
  'Pacific/Chatham',
  'America/Panama',
  'America/Lima',
  'Pacific/Tahiti',
  'Pacific/Marquesas',
  'Pacific/Gambier',
  'Pacific/Port_Moresby',
  'Pacific/Bougainville',
  'Asia/Manila',
  'Asia/Karachi',
  'Europe/Warsaw',
  'America/Miquelon',
  'Pacific/Pitcairn',
  'America/Puerto_Rico',
  'Asia/Gaza',
  'Asia/Hebron',
  'Europe/Lisbon',
  'Atlantic/Madeira',
  'Atlantic/Azores',
  'Pacific/Palau',
  'America/Asuncion',
  'Asia/Qatar',
  'Indian/Reunion',
  'Europe/Bucharest',
  'Europe/Belgrade',
  'Europe/Kaliningrad',
  'Europe/Moscow',
  'Europe/Simferopol',
  'Europe/Kirov',
  'Europe/Astrakhan',
  'Europe/Volgograd',
  'Europe/Saratov',
  'Europe/Ulyanovsk',
  'Europe/Samara',
  'Asia/Yekaterinburg',
  'Asia/Omsk',
  'Asia/Novosibirsk',
  'Asia/Barnaul',
  'Asia/Tomsk',
  'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk',
  'Asia/Irkutsk',
  'Asia/Chita',
  'Asia/Yakutsk',
  'Asia/Khandyga',
  'Asia/Vladivostok',
  'Asia/Ust-Nera',
  'Asia/Magadan',
  'Asia/Sakhalin',
  'Asia/Srednekolymsk',
  'Asia/Kamchatka',
  'Asia/Anadyr',
  'Asia/Riyadh',
  'Pacific/Guadalcanal',
  'Indian/Mahe',
  'Africa/Khartoum',
  'Europe/Stockholm',
  'Asia/Singapore',
  'America/Paramaribo',
  'Africa/Juba',
  'Africa/Sao_Tome',
  'America/El_Salvador',
  'Asia/Damascus',
  'America/Grand_Turk',
  'Africa/Ndjamena',
  'Indian/Kerguelen',
  'Asia/Bangkok',
  'Asia/Dushanbe',
  'Pacific/Fakaofo',
  'Asia/Dili',
  'Asia/Ashgabat',
  'Africa/Tunis',
  'Pacific/Tongatapu',
  'Europe/Istanbul',
  'America/Port_of_Spain',
  'Pacific/Funafuti',
  'Asia/Taipei',
  'Europe/Kiev',
  'Europe/Uzhgorod',
  'Europe/Zaporozhye',
  'Pacific/Wake',
  'America/New_York',
  'America/Detroit',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Vevay',
  'America/Chicago',
  'America/Indiana/Tell_City',
  'America/Indiana/Knox',
  'America/Menominee',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah',
  'America/Denver',
  'America/Boise',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Juneau',
  'America/Sitka',
  'America/Metlakatla',
  'America/Yakutat',
  'America/Nome',
  'America/Adak',
  'Pacific/Honolulu',
  'America/Montevideo',
  'Asia/Samarkand',
  'Asia/Tashkent',
  'America/Caracas',
  'Asia/Ho_Chi_Minh',
  'Pacific/Efate',
  'Pacific/Wallis',
  'Pacific/Apia',
  'Africa/Johannesburg'
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>

### <span id="list-of-locales"> List of locales

```javascript
    af_NA: "Afrikaans (Namibia)",
    af_ZA: "Afrikaans (South Africa)",
    af: "Afrikaans",
    ak_GH: "Akan (Ghana)",
    ak: "Akan",
    sq_AL: "Albanian (Albania)",
    sq: "Albanian",
    am_ET: "Amharic (Ethiopia)",
    am: "Amharic",
    ar_DZ: "Arabic (Algeria)",
    ar_BH: "Arabic (Bahrain)",
    ar_EG: "Arabic (Egypt)",
    ar_IQ: "Arabic (Iraq)",
    ar_JO: "Arabic (Jordan)",
    ar_KW: "Arabic (Kuwait)",
    ar_LB: "Arabic (Lebanon)",
    ar_LY: "Arabic (Libya)",
    ar_MA: "Arabic (Morocco)",
    ar_OM: "Arabic (Oman)",
    ar_QA: "Arabic (Qatar)",
    ar_SA: "Arabic (Saudi Arabia)",
    ar_SD: "Arabic (Sudan)",
    ar_SY: "Arabic (Syria)",
    ar_TN: "Arabic (Tunisia)",
    ar_AE: "Arabic (United Arab Emirates)",
    ar_YE: "Arabic (Yemen)",
    ar: "Arabic",
    hy_AM: "Armenian (Armenia)",
    hy: "Armenian",
    as_IN: "Assamese (India)",
    as: "Assamese",
    asa_TZ: "Asu (Tanzania)",
    asa: "Asu",
    az_Cyrl: "Azerbaijani (Cyrillic)",
    az_Cyrl_AZ: "Azerbaijani (Cyrillic, Azerbaijan)",
    az_Latn: "Azerbaijani (Latin)",
    az_Latn_AZ: "Azerbaijani (Latin, Azerbaijan)",
    az: "Azerbaijani",
    bm_ML: "Bambara (Mali)",
    bm: "Bambara",
    eu_ES: "Basque (Spain)",
    eu: "Basque",
    be_BY: "Belarusian (Belarus)",
    be: "Belarusian",
    bem_ZM: "Bemba (Zambia)",
    bem: "Bemba",
    bez_TZ: "Bena (Tanzania)",
    bez: "Bena",
    bn_BD: "Bengali (Bangladesh)",
    bn_IN: "Bengali (India)",
    bn: "Bengali",
    bs_BA: "Bosnian (Bosnia and Herzegovina)",
    bs: "Bosnian",
    bg_BG: "Bulgarian (Bulgaria)",
    bg: "Bulgarian",
    my_MM: "Burmese (Myanmar [Burma])",
    my: "Burmese",
    yue_Hant_HK: "Cantonese (Traditional, Hong Kong SAR China)",
    ca_ES: "Catalan (Spain)",
    ca: "Catalan",
    tzm_Latn: "Central Morocco Tamazight (Latin)",
    tzm_Latn_MA: "Central Morocco Tamazight (Latin, Morocco)",
    tzm: "Central Morocco Tamazight",
    chr_US: "Cherokee (United States)",
    chr: "Cherokee",
    cgg_UG: "Chiga (Uganda)",
    cgg: "Chiga",
    zh_Hans: "Chinese (Simplified Han)",
    zh_Hans_CN: "Chinese (Simplified Han, China)",
    zh_Hans_HK: "Chinese (Simplified Han, Hong Kong SAR China)",
    zh_Hans_MO: "Chinese (Simplified Han, Macau SAR China)",
    zh_Hans_SG: "Chinese (Simplified Han, Singapore)",
    zh_Hant: "Chinese (Traditional Han)",
    zh_Hant_HK: "Chinese (Traditional Han, Hong Kong SAR China)",
    zh_Hant_MO: "Chinese (Traditional Han, Macau SAR China)",
    zh_Hant_TW: "Chinese (Traditional Han, Taiwan)",
    zh: "Chinese",
    kw_GB: "Cornish (United Kingdom)",
    kw: "Cornish",
    hr_HR: "Croatian (Croatia)",
    hr: "Croatian",
    cs_CZ: "Czech (Czech Republic)",
    cs: "Czech",
    da_DK: "Danish (Denmark)",
    da: "Danish",
    nl_BE: "Dutch (Belgium)",
    nl_NL: "Dutch (Netherlands)",
    nl: "Dutch",
    ebu_KE: "Embu (Kenya)",
    ebu: "Embu",
    en_AS: "English (American Samoa)",
    en_AU: "English (Australia)",
    en_BE: "English (Belgium)",
    en_BZ: "English (Belize)",
    en_BW: "English (Botswana)",
    en_CA: "English (Canada)",
    en_GU: "English (Guam)",
    en_HK: "English (Hong Kong SAR China)",
    en_IN: "English (India)",
    en_IE: "English (Ireland)",
    en_IL: "English (Israel)",
    en_JM: "English (Jamaica)",
    en_MT: "English (Malta)",
    en_MH: "English (Marshall Islands)",
    en_MU: "English (Mauritius)",
    en_NA: "English (Namibia)",
    en_NZ: "English (New Zealand)",
    en_MP: "English (Northern Mariana Islands)",
    en_PK: "English (Pakistan)",
    en_PH: "English (Philippines)",
    en_SG: "English (Singapore)",
    en_ZA: "English (South Africa)",
    en_TT: "English (Trinidad and Tobago)",
    en_UM: "English (U.S. Minor Outlying Islands)",
    en_VI: "English (U.S. Virgin Islands)",
    en_GB: "English (United Kingdom)",
    en_US: "English (United States)",
    en_ZW: "English (Zimbabwe)",
    en: "English",
    eo: "Esperanto",
    et_EE: "Estonian (Estonia)",
    et: "Estonian",
    ee_GH: "Ewe (Ghana)",
    ee_TG: "Ewe (Togo)",
    ee: "Ewe",
    fo_FO: "Faroese (Faroe Islands)",
    fo: "Faroese",
    fil_PH: "Filipino (Philippines)",
    fil: "Filipino",
    fi_FI: "Finnish (Finland)",
    fi: "Finnish",
    fr_BE: "French (Belgium)",
    fr_BJ: "French (Benin)",
    fr_BF: "French (Burkina Faso)",
    fr_BI: "French (Burundi)",
    fr_CM: "French (Cameroon)",
    fr_CA: "French (Canada)",
    fr_CF: "French (Central African Republic)",
    fr_TD: "French (Chad)",
    fr_KM: "French (Comoros)",
    fr_CG: "French (Congo - Brazzaville)",
    fr_CD: "French (Congo - Kinshasa)",
    fr_CI: "French (Côte d’Ivoire)",
    fr_DJ: "French (Djibouti)",
    fr_GQ: "French (Equatorial Guinea)",
    fr_FR: "French (France)",
    fr_GA: "French (Gabon)",
    fr_GP: "French (Guadeloupe)",
    fr_GN: "French (Guinea)",
    fr_LU: "French (Luxembourg)",
    fr_MG: "French (Madagascar)",
    fr_ML: "French (Mali)",
    fr_MQ: "French (Martinique)",
    fr_MC: "French (Monaco)",
    fr_NE: "French (Niger)",
    fr_RW: "French (Rwanda)",
    fr_RE: "French (Réunion)",
    fr_BL: "French (Saint Barthélemy)",
    fr_MF: "French (Saint Martin)",
    fr_SN: "French (Senegal)",
    fr_CH: "French (Switzerland)",
    fr_TG: "French (Togo)",
    fr: "French",
    ff_SN: "Fulah (Senegal)",
    ff: "Fulah",
    gl_ES: "Galician (Spain)",
    gl: "Galician",
    lg_UG: "Ganda (Uganda)",
    lg: "Ganda",
    ka_GE: "Georgian (Georgia)",
    ka: "Georgian",
    de_AT: "German (Austria)",
    de_BE: "German (Belgium)",
    de_DE: "German (Germany)",
    de_LI: "German (Liechtenstein)",
    de_LU: "German (Luxembourg)",
    de_CH: "German (Switzerland)",
    de: "German",
    el_CY: "Greek (Cyprus)",
    el_GR: "Greek (Greece)",
    el: "Greek",
    gu_IN: "Gujarati (India)",
    gu: "Gujarati",
    guz_KE: "Gusii (Kenya)",
    guz: "Gusii",
    ha_Latn: "Hausa (Latin)",
    ha_Latn_GH: "Hausa (Latin, Ghana)",
    ha_Latn_NE: "Hausa (Latin, Niger)",
    ha_Latn_NG: "Hausa (Latin, Nigeria)",
    ha: "Hausa",
    haw_US: "Hawaiian (United States)",
    haw: "Hawaiian",
    he_IL: "Hebrew (Israel)",
    he: "Hebrew",
    hi_IN: "Hindi (India)",
    hi: "Hindi",
    hu_HU: "Hungarian (Hungary)",
    hu: "Hungarian",
    is_IS: "Icelandic (Iceland)",
    is: "Icelandic",
    ig_NG: "Igbo (Nigeria)",
    ig: "Igbo",
    id_ID: "Indonesian (Indonesia)",
    id: "Indonesian",
    ga_IE: "Irish (Ireland)",
    ga: "Irish",
    it_IT: "Italian (Italy)",
    it_CH: "Italian (Switzerland)",
    it: "Italian",
    ja_JP: "Japanese (Japan)",
    ja: "Japanese",
    kea_CV: "Kabuverdianu (Cape Verde)",
    kea: "Kabuverdianu",
    kab_DZ: "Kabyle (Algeria)",
    kab: "Kabyle",
    kl_GL: "Kalaallisut (Greenland)",
    kl: "Kalaallisut",
    kln_KE: "Kalenjin (Kenya)",
    kln: "Kalenjin",
    kam_KE: "Kamba (Kenya)",
    kam: "Kamba",
    kn_IN: "Kannada (India)",
    kn: "Kannada",
    kk_Cyrl: "Kazakh (Cyrillic)",
    kk_Cyrl_KZ: "Kazakh (Cyrillic, Kazakhstan)",
    kk: "Kazakh",
    km_KH: "Khmer (Cambodia)",
    km: "Khmer",
    ki_KE: "Kikuyu (Kenya)",
    ki: "Kikuyu",
    rw_RW: "Kinyarwanda (Rwanda)",
    rw: "Kinyarwanda",
    kok_IN: "Konkani (India)",
    kok: "Konkani",
    ko_KR: "Korean (South Korea)",
    ko: "Korean",
    khq_ML: "Koyra Chiini (Mali)",
    khq: "Koyra Chiini",
    ses_ML: "Koyraboro Senni (Mali)",
    ses: "Koyraboro Senni",
    lag_TZ: "Langi (Tanzania)",
    lag: "Langi",
    lv_LV: "Latvian (Latvia)",
    lv: "Latvian",
    lt_LT: "Lithuanian (Lithuania)",
    lt: "Lithuanian",
    luo_KE: "Luo (Kenya)",
    luo: "Luo",
    luy_KE: "Luyia (Kenya)",
    luy: "Luyia",
    mk_MK: "Macedonian (Macedonia)",
    mk: "Macedonian",
    jmc_TZ: "Machame (Tanzania)",
    jmc: "Machame",
    kde_TZ: "Makonde (Tanzania)",
    kde: "Makonde",
    mg_MG: "Malagasy (Madagascar)",
    mg: "Malagasy",
    ms_BN: "Malay (Brunei)",
    ms_MY: "Malay (Malaysia)",
    ms: "Malay",
    ml_IN: "Malayalam (India)",
    ml: "Malayalam",
    mt_MT: "Maltese (Malta)",
    mt: "Maltese",
    gv_GB: "Manx (United Kingdom)",
    gv: "Manx",
    mr_IN: "Marathi (India)",
    mr: "Marathi",
    mas_KE: "Masai (Kenya)",
    mas_TZ: "Masai (Tanzania)",
    mas: "Masai",
    mer_KE: "Meru (Kenya)",
    mer: "Meru",
    mfe_MU: "Morisyen (Mauritius)",
    mfe: "Morisyen",
    naq_NA: "Nama (Namibia)",
    naq: "Nama",
    ne_IN: "Nepali (India)",
    ne_NP: "Nepali (Nepal)",
    ne: "Nepali",
    nd_ZW: "North Ndebele (Zimbabwe)",
    nd: "North Ndebele",
    nb_NO: "Norwegian Bokmål (Norway)",
    nb: "Norwegian Bokmål",
    nn_NO: "Norwegian Nynorsk (Norway)",
    nn: "Norwegian Nynorsk",
    nyn_UG: "Nyankole (Uganda)",
    nyn: "Nyankole",
    or_IN: "Oriya (India)",
    or: "Oriya",
    om_ET: "Oromo (Ethiopia)",
    om_KE: "Oromo (Kenya)",
    om: "Oromo",
    ps_AF: "Pashto (Afghanistan)",
    ps: "Pashto",
    fa_AF: "Persian (Afghanistan)",
    fa_IR: "Persian (Iran)",
    fa: "Persian",
    pl_PL: "Polish (Poland)",
    pl: "Polish",
    pt_BR: "Portuguese (Brazil)",
    pt_GW: "Portuguese (Guinea-Bissau)",
    pt_MZ: "Portuguese (Mozambique)",
    pt_PT: "Portuguese (Portugal)",
    pt: "Portuguese",
    pa_Arab: "Punjabi (Arabic)",
    pa_Arab_PK: "Punjabi (Arabic, Pakistan)",
    pa_Guru: "Punjabi (Gurmukhi)",
    pa_Guru_IN: "Punjabi (Gurmukhi, India)",
    pa: "Punjabi",
    ro_MD: "Romanian (Moldova)",
    ro_RO: "Romanian (Romania)",
    ro: "Romanian",
    rm_CH: "Romansh (Switzerland)",
    rm: "Romansh",
    rof_TZ: "Rombo (Tanzania)",
    rof: "Rombo",
    ru_MD: "Russian (Moldova)",
    ru_RU: "Russian (Russia)",
    ru_UA: "Russian (Ukraine)",
    ru: "Russian",
    rwk_TZ: "Rwa (Tanzania)",
    rwk: "Rwa",
    saq_KE: "Samburu (Kenya)",
    saq: "Samburu",
    sg_CF: "Sango (Central African Republic)",
    sg: "Sango",
    seh_MZ: "Sena (Mozambique)",
    seh: "Sena",
    sr_Cyrl: "Serbian (Cyrillic)",
    sr_Cyrl_BA: "Serbian (Cyrillic, Bosnia and Herzegovina)",
    sr_Cyrl_ME: "Serbian (Cyrillic, Montenegro)",
    sr_Cyrl_RS: "Serbian (Cyrillic, Serbia)",
    sr_Latn: "Serbian (Latin)",
    sr_Latn_BA: "Serbian (Latin, Bosnia and Herzegovina)",
    sr_Latn_ME: "Serbian (Latin, Montenegro)",
    sr_Latn_RS: "Serbian (Latin, Serbia)",
    sr: "Serbian",
    sn_ZW: "Shona (Zimbabwe)",
    sn: "Shona",
    ii_CN: "Sichuan Yi (China)",
    ii: "Sichuan Yi",
    si_LK: "Sinhala (Sri Lanka)",
    si: "Sinhala",
    sk_SK: "Slovak (Slovakia)",
    sk: "Slovak",
    sl_SI: "Slovenian (Slovenia)",
    sl: "Slovenian",
    xog_UG: "Soga (Uganda)",
    xog: "Soga",
    so_DJ: "Somali (Djibouti)",
    so_ET: "Somali (Ethiopia)",
    so_KE: "Somali (Kenya)",
    so_SO: "Somali (Somalia)",
    so: "Somali",
    es_AR: "Spanish (Argentina)",
    es_BO: "Spanish (Bolivia)",
    es_CL: "Spanish (Chile)",
    es_CO: "Spanish (Colombia)",
    es_CR: "Spanish (Costa Rica)",
    es_DO: "Spanish (Dominican Republic)",
    es_EC: "Spanish (Ecuador)",
    es_SV: "Spanish (El Salvador)",
    es_GQ: "Spanish (Equatorial Guinea)",
    es_GT: "Spanish (Guatemala)",
    es_HN: "Spanish (Honduras)",
    es_419: "Spanish (Latin America)",
    es_MX: "Spanish (Mexico)",
    es_NI: "Spanish (Nicaragua)",
    es_PA: "Spanish (Panama)",
    es_PY: "Spanish (Paraguay)",
    es_PE: "Spanish (Peru)",
    es_PR: "Spanish (Puerto Rico)",
    es_ES: "Spanish (Spain)",
    es_US: "Spanish (United States)",
    es_UY: "Spanish (Uruguay)",
    es_VE: "Spanish (Venezuela)",
    es: "Spanish",
    sw_KE: "Swahili (Kenya)",
    sw_TZ: "Swahili (Tanzania)",
    sw: "Swahili",
    sv_FI: "Swedish (Finland)",
    sv_SE: "Swedish (Sweden)",
    sv: "Swedish",
    gsw_CH: "Swiss German (Switzerland)",
    gsw: "Swiss German",
    shi_Latn: "Tachelhit (Latin)",
    shi_Latn_MA: "Tachelhit (Latin, Morocco)",
    shi_Tfng: "Tachelhit (Tifinagh)",
    shi_Tfng_MA: "Tachelhit (Tifinagh, Morocco)",
    shi: "Tachelhit",
    dav_KE: "Taita (Kenya)",
    dav: "Taita",
    ta_IN: "Tamil (India)",
    ta_LK: "Tamil (Sri Lanka)",
    ta: "Tamil",
    te_IN: "Telugu (India)",
    te: "Telugu",
    teo_KE: "Teso (Kenya)",
    teo_UG: "Teso (Uganda)",
    teo: "Teso",
    th_TH: "Thai (Thailand)",
    th: "Thai",
    bo_CN: "Tibetan (China)",
    bo_IN: "Tibetan (India)",
    bo: "Tibetan",
    ti_ER: "Tigrinya (Eritrea)",
    ti_ET: "Tigrinya (Ethiopia)",
    ti: "Tigrinya",
    to_TO: "Tonga (Tonga)",
    to: "Tonga",
    tr_TR: "Turkish (Turkey)",
    tr: "Turkish",
    uk_UA: "Ukrainian (Ukraine)",
    uk: "Ukrainian",
    ur_IN: "Urdu (India)",
    ur_PK: "Urdu (Pakistan)",
    ur: "Urdu",
    uz_Arab: "Uzbek (Arabic)",
    uz_Arab_AF: "Uzbek (Arabic, Afghanistan)",
    uz_Cyrl: "Uzbek (Cyrillic)",
    uz_Cyrl_UZ: "Uzbek (Cyrillic, Uzbekistan)",
    uz_Latn: "Uzbek (Latin)",
    uz_Latn_UZ: "Uzbek (Latin, Uzbekistan)",
    uz: "Uzbek",
    vi_VN: "Vietnamese (Vietnam)",
    vi: "Vietnamese",
    vun_TZ: "Vunjo (Tanzania)",
    vun: "Vunjo",
    cy_GB: "Welsh (United Kingdom)",
    cy: "Welsh",
    yo_NG: "Yoruba (Nigeria)",
    yo: "Yoruba",
    zu_ZA: "Zulu (South Africa)",
    zu: "Zulu"
```

<span style="color: #ff0000">*^~^[INICIO](#inicio)^~^*</span>
