# Terminal - Línea de comando

## Comandos

- `clear` ( ⌘ + l ) = limpia la pantalla de la terminal.
- `echo "Hola mundo"` = imprime Hola mundo en la terminal.

### <span style="color: red"> De navegación

- `cd` ***nombreDeCareta*** = nos lleva a esa carpeta si está dentro del directorio donde estamos trabajando.
- `cd` = sin parámetros siempre lleva a `home`.
- `cd ../..` = lleva a `home`.
- `cd ./` ***nombreDeCarpeta*** = conduce a la carpeta seleccionada sin escribir toda la ruta.
- `cd ..` = conduce a la carpeta anterior en la ruta.
- `pwd` = imprime la rura donde estamos trabajando (`p`rint `w`orking `d`irectory).

### <span style="color: red"> Para obtener información

- `file` ***nombreDelArchivo*** = brinda información de un archivo.
- `head` ***nombreDelArchivo*** = muestra las primeras 10 líneas de un archivo de texto.
- `head -n 20` ***nombreDelArchivo*** = muestra las primeras `n` cantidad de líneas del archivo según se especifique. En este caso las primeras 20 líneas.
- `tail` ***nombreDelArchivo*** = muestra las últimas 10 líneas de un archivo de texto.
- `tail -n 20` ***nombreDelArchivo*** = muestra las últimas "n" líneas según sea indicado. En este caso, las últimas 20 líneas.
- `less` ***nombreDelArchivo*** = muestra el contenido del archicvo. Con `/` podemos buscar una palabra. Se sale con `Q`.
- `open` ***nombnreDelArchivo*** = abre el archivo en un programa predeterminado. Comazndo de Mac OS solamente.
- `ls` = lista los archvos del directorio donde estamos posicionados.
- `ls` ***nombreDelDirectorio*** = muestra archivos de un directorio específico.
- `ls -l` = lista con detalles (`l` de long).
- `ls -la` = lista todos los archivos incluidos los ocultos.
- `ls -lh` = lista con detalles más fáciles de leer (`h` de human).
- `ls -lS` = lista todos los archivos y los ordena por tamaño (`S` de size).
- `ls -lSh` = lista todos los archivos y losordena por tamaño dando lainformación de manera más clara.
- `ls -lr` = lista los archivos y direcotrios pero en orden alfabético inverso (`r` de reverse).
- `ls -d [[:upper:]]*` = muestra los directorios y que comienzan con mayúscula.
- `ls [[:lower:]]*` = muestra los directorios y archivos que comienzan con minúscula.
- `ls [ad]*` = muestra los directorios y archivos que comienza con los caracteres indicados. En este caso muestra los que comienzan con `a` o con `d`.
- `ls` ***nombreDelDirectorio*** `> output.txt 2>&1` = guarda la consulta en un archivo. Si la consulta da un error, también la guarda (Redirección).
- `ls -lh | tee output.txt | less` = 1) genera listado, 2) creaarchivo con el listado, 3) muestra el archivo en la terminal. Es la forma de concatenar comandos.

### <span style="color: red">Para hacer `CRUD` de archivos y directorios

- `cp` ***file1*** ***fileBackUp*** = copia archivo.
- `mkdir` ***nombreDeCarpeta*** = crea directorio.
- `mv` ***file1*** `..` = mueve el archivo a la carpeta anterior.
- `mv` ***file1*** ***fileUno*** = cambia el nombre del archivo.
- `rm` ***nombreDeArchivo*** = elimina archivo. ***Comando muy peligroso***.
- `rm -i` ***nombreDeArchivo*** = pregunta si se desea eliminar archvivo (`ì`de interactive).
- `rm -r` ***nombreDeCarpeta*** = elimina carpeta (`r` de recursive).
- `rm -rf` ***nombreDeCarpeta*** = elimina sin importar su contenido (`f` de force).
- `rm -ri` ***nombreDecarpeta*** = pregunta archivo por archivo y carpeta por carpeta si deseamos borrar.
- `touch` ***nombreDeArchivo*** ***archvivo2*** ***archivo3*** = crea archivos en simultáneo si se necesita.
- `cat` ***file1*** ***file2*** = concatena el contenido de los dos archivos.

### <span style="color: red">De la shell

- `alias` ***nombreDelAlias***`="ls -lh"` = crea alias. Son temporales.
- `ln -s Documents/ProyectosWeb/dash-cook dashcook` = crea un accesoi directo para la carpeta.
- `cal` = muestra calendario del mes actual
- `help cd` = brinda la ayuda para el comando especificado.
- `man cd` = abre el manual de la shell sobre el comando especificado.
- `info cd` = idem `man` pero con otra interfaz.
- `type` ***comando*** = describe el tipo de comando seleccionado.
- `whatis cd` = muestra una descripción muy breve del comando seleccionado.
- `whoami` = muestra el usuario con la sesión activa.
- `id` = muetra el id del usuario.
- `su root` = nos permite cambiar al usuario raiz. Muy peligroso.
- `sudo` = nos da los permisos de root sin cambiar al usuario raiz.
- `paswd` = permite cambiar la contraseña del usuario.
- `printenv` = imprime las variables del entorno.
- `code .zshrc` = para editar las variables de entorno en zsh.

## Atajos

- `clear` = ⌘ + l
- Dar fin a un proceso = ⌘ + c
- `touch`= >

## Ejecución de comandos de manera síncrona

- `ls; mkdir ProyectosWeb; cal` = los comandos se separan con punto y coma.

## Ejecución de comandos de manera síncrona

- `ls & date & cal` = corren los tres comandos en tres terminales en paralelo.

## Ejecución condicional

- `mkdir test && cd test` = si la ejecucuión del primer comando es satisfactoria entonces ejecuta el segundo comando.
- `echo "Hola" || cd CSS || touch data.html` = ejecuta el primer comando posible y no ejecuta el resto.
