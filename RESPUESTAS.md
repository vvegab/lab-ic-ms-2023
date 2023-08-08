# Respuestas

Indica tu nombre a continuación: 
R: Victor Vega Barrientos
Por cada etapa agrega una sección abajo y escribe las respuestas a las preguntas de cada etapa.

## ETAPA 1
Q: ¿Cuál es la diferencia entre los archivos con el verbo Create con los archivos con el verbo Add?
R: Los archivos con verbo create, crean tablas en la base de datos en cambio los de verbo Add adicionan registros
a la tabla creada.

Q:¿Cómo se llama el servicio que se declara en el archivo docker-compose.yml?
R: Flyway

Q:¿Cuál es el comando que se ejecuta en el servicio declarado?
R:-locations=filesystem:/flyway/sql -connectRetries=60 migrate 


## ETAPA 2

Q:¿Qué pasa si cambias el nombre del servicio de postgres a db? ¿Qué otros cambios tendrías que hacer?
R: Se debe modificar la referencia al servicio en todos los archivos y configuraciones que utilicen este parámetro
por ejemplo en el archivo .env en la variable POSTGRES_SERVER, tambien en la opción "depends_on" del archivo docker-compose.yml


## ETAPA 3

:




...
