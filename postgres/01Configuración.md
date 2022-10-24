# Archivos de configuración

A través del comando `SHOW config_file;` podemos acceder a la ruta donde se encuentras los archivos de configuración. 

Los 3 archivos más importantes son:

+ `Postgresql.conf`: Configuración general de postgres, múltiples opciones referentes a direcciones de conexión de entrada, memoria, cantidad de hilos de pocesamiento, replica, etc.

+ `pg_hba.conf`: Muestra los roles así como los tipos de acceso a la base de datos.

+ `pg_ident.conf`: Permite realizar el mapeo de usuarios. Permite definir roles a usuarios del sistema operativo donde se ejecuta postgres.