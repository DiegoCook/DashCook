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
- `vim` nombreDelArchivo = crea el archivo y abre un editor de código.

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
- `find ./` ***nombreDelArchivo*** = busca archivos desde el directorio raiz y a todas las carpetas de nivel.
- `find ./ -type fd` nombreDelArchivo = `f` busca archivos y `d` busca directorios.
- `find ./ -size 20M` = busca archivos más grandes que 20MB.
- `grep -i` ***palabra*** ***nombreDelArchivo*** = busca y muestra las líneas donde aparece la palabra buscada dentro de un archivo. La bandera `i` (de ignore) se utiliza para que no sea "key sensitive", o sea, que no haga diferencia entre mayúsculas y minúsculas.
- `grep -c` ***palabra*** ***nombreDelArchivo*** = cuenta la cantidad de veces que aparece la palabra dentro del archivo mencionado.
- `grep -v` ***palabra*** ***nombreDelArchivo*** = muestra las no coincidencias.
- `wc` ***nombreDelArchivo*** = (`w`ord `c`ounter) cuenta las palabras de un archivo. El resultado muestra 3 número: líneas, palabras y bytes.
- `wc` -l ***nombreDelArchivo*** = retorna el número de líneas del archivo.
- `wc` -w ***nombreDelArchivo*** = retorna el número de palabras del archivo.
- `wc` -c ***nombreDelArchivo*** = retorna el número de bytes del archivo.

### <span style="color: red">Para redes

- `ifconfig` = nos muestra información de nuestra red.
- `ping` ***paginaWeb*** = nos informa si una página web está activa.
- `curl` ***paginaWeb*** = nos trae un archivo de la web. En este acaso un HTML.
- `wget` ***paginaWeb*** = lo mismo que `curl` solo que guarda el archivo.
- `traceroute` ***paginaWeb*** = nos muestra todas las computadoras necesaria para llegar a la página indicada.
- `netstat -i` = nos muestra los dispositivos de red y si están trabajando o no, o si hay algún error.

### <span style="color: red">Compresión

- `tar -cvf` ***nombreDelArchivoGenerado`.tar`*** ***nombreDeLaCarpetaAComprimir*** = `c` de comprimir, `v` nos muestra en la terminal lo que va haciendo, `f` de file.
- `tar -cvzf` ***nombreDelArchivoGenerado`.tar.gz`*** ***nombreDeLaCarpetaAComprimir*** = mejor calidad con `gzip`.
- `tar -xvf` ***nombreDelArchivoGenerado`.tar`*** = `x` para descomprimir.
- `zip -r` ***nombreDelArchivoGenerado***`InZip.zip` ***nombreDeLaCarpetaAComprimir*** = comprime en formato `zip`.
- `unzip` ***nombreDelArchivoGenerado***`InZip.zip` = descomprime un archivo `zip`.

### <span style="color: red"> Para administrar procesos

- `ps` = muestra los procesos que están corriendo.
- `kill` idProces = detiene el proceso.
- `top` = muestra los procesos que más recursos consumen.
- `jobs` = consulta de todos los procesos que corren en el background.

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
