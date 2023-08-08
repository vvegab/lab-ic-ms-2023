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

Q: Revisa el archivo movies-api/Dockerfile. ¿Qué te llama la atención?
R: Que existen una serie de comandos que al parecer navegan por los directorios disponibles
dentro del contenedor y realizan la ejecución de comandos.

Q: ¿Cómo se relacionan el archivo docker-compose.yml y el archivo movies-api/Dockerfile?
R: Dockerfile contiene comandos que ayudan a levantar una imagen que ejecutará docker-compose y docker-compose es el archivo
que permite definir y ejecutar multiples aplicaciones en contenedores.


Q: ¿Qué crees que hace el atributo context debajo de build (está en la linea 6 del archivo docker-compose.yml)?

R: Le indica el directorio en el cual existe un dockerfile, y donde se deberá levantar la imagen con los comandos asociados.


## ETAPA 4

Q:Compara el atributo build del servicio movies-api con el de movies-front. ¿Cuál es la diferencia? ¿Qué pasa si los dejas iguales?

R: Trabajan en distintos directorios, con distintos comandos y tecnologias. La aplicación no funcionaria debido a lo mencionado anteriormente.
...
