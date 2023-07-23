# Etapa 4

Tenemos frontend \o/.

El equipo front ha agregado una aplicación que permite ver y mantener películas y directores.

Se trata de una aplicación escrita en REACT y requiere Node.js para operar.

Esta aplicación interopera con el microservicio en Go definido en la etapa 3.

El archivo docker-compose ahora incorpora un nuevo servicio llamado: `movies-front`.

## Actividades

Deten el servicio:

```
    docker-compose down 
```

Reinicia el servicio:

```
    docker-compose up --build -d 
```

Verifica que el servidor rest está funcionando:

```
    curl -v http://localhost:8000/movies
```

Verifica que el nuevo endpoint `directors` funciona

```
    curl -v http://localhost:8000/directors
```

Nota: Si no tienes `curl` en tu sistema puedes acceder a las urls en tu browser.

Ahora accede a la aplicación a través de tu navegador en la dirección `http://localhost:3000`.

Podras ver que a pesar de que los endpoints funcionan y retornan los valores esperados, el front-end no muestra datos.

La razón es que falta configurar una variable en el servicio `movies-front`, la variable perdida está definida en el archivo `movies-front/src/const.js`.

El valor que debes dar a esa variable es `http://localhost:BIND_PORT`, donde `BIND_PORT` es el valor que has definido para el servidor `movies-api`. Configura esta variable donde corresponde y reinicia el servicio.

Si has configurado todo correctamente vas a ver los valores de las películas y los directores en la aplicación.

Intenta agregar directores y películas en tu aplicación.

Nota: para obtener el valor de las variables de ambiente en node usamos `process.env.VARIABLE`.

## Preguntas

Compara los archivos `Dockerfile` de `movies-api` y `movies-front`. 

Compara el atributo `build` del servicio `movies-api` con el de `movies-front`. 
¿Cuál es la diferencia? 
¿Qué pasa si los dejas iguales?

