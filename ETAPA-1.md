# Etapa 1

En esta etapa configuramos nuestra base de datos.

En este empresa hay un equipo que se encarga de mantener el esquema de la base de datos, y para hacer usa la herramienta [Flyway](https://flywaydb.org).

Cada vez que se agrega o modifica una tabla de la base de datos se deben agregar los archivos de migración en la carpeta sql_migrations.

La estructura de nombres de los archivos de migración es la siguiente:

	`VXX__Action_description.sql`

Donde:

-  `VXX` corresponde a la letra `V` seguida de un correlativo. Por ejemplo `V1`.
- Entre el correlativo y la action hay 2 caracteres `_`.
- `Action` puede ser cualquier verbo que indique más o menos lo que se intenta realizar en la base de datos.
- `description` es una frase donde cada palabra está separada por `_`.
- `.sql` es la extensión.

Por ejemplo, si queremos agregar directores y películas mediante `INSERT` creamos un archivo que se llame `V5__Add_directors_and_movies.sql`.

## Requisitos

Vas a necesitar crear una instancia en [ElephantSQL](https://www.elephantsql.com). Usa tu cuenta GitHub para ingresar.

## Preguntas iniciales

Revisa el contenido del diretorio sql_migrations.

¿Cuál es la diferencia entre los archivos con el verbo `Create` con los archivos con el verbo `Add`?

Revisa el contenido del archivo `docker-compose.yml`. 

¿Cómo se llama el servicio que se declara en el archivo `docker-compose.yml`?

¿Cuál es el comando que se ejecuta en el servicio declarado?

Recuerda agregar tus respuestas en el archivo `RESPUESTA.md`

## Actividades

Ejecuta los siguientes pasos:

1. Crear una instancia de base de datos en ElephantSQL
2. Crear un archivo llamado `.env`` basado en el archivo `example.env`.
3. Cambiar los valores de las variables POSTGRES_* según los obtenidos desde la instancia de ElephantSQL
4. Ejecuta la migración:
```
	docker-compose up --build
```
5. Revisa que las tablas `directors` y `movies` han sido creadas en la instancia de ElephantSQL

Fijate que se ha agregado una tercera tabla en la instancia de tu base de datos. El nombre de esta tabla es `flyway_schema_history`.
Revisala y fíjate su contenido. Esta tabla es usada por Flyway para mantener una historia de los archivos ejecutados durante las migraciones.

## Actividad Opcional

Agrega tus películas favoritas a la base de datos, recuerda agregar el director respectivo en la tabla `directors`.
Básate en los scripts `V3__Add_directors.sql` y `V4__Add_movies.sql`. Recuerda usar un correlativo superior y respetar la nomenclatura de archivos para que tu migración se ejecute apropiadamente.

## Recuros

En esta dirección encontrarás como funcionas las migraciones en Flyway y las nomenclaturas de los archivos: https://documentation.red-gate.com/fd/migrations-184127470.html
