# Etapa 6

En esta etapa agregaremos la entrega continua, generando un artefacto para implantar en un servidor que tenga docker-compose instalado.

## Actividades

Agrega la siguiente "stage" debajo de la stage ''Test Movies Frontend' en tu archivo `Jenkinsfile`


```
stage('Delivery') {
        agent any
        steps {
            zip zipFile: "deploy.zip", archive: false, dir: '.'
            archiveArtifacts artifacts: "deploy.zip", fingerprint: true
        }
    }
```


Recuerda hacer push a tu repo y ejecutar de nuevo el pipeline.


Notarás que ahora hay un artefacto llamado `deploy.zip` disponible para descargar.

Sin embargo, nos gustaría tener un archivo con un nombre adecuado según el número de build.

Para hacer esto modifica el stage `Delivery` del siguiente modo:


```
stage('Delivery') {
        agent any
        steps {
            zip zipFile: "${JOB_NAME}-deploy-${BUILD_NUMBER}.zip", archive: false, dir: '.'
            archiveArtifacts artifacts: "${JOB_NAME}-deploy-${BUILD_NUMBER}.zip", fingerprint: true
        }
    }
```

Graba, haz push de tu repo y vuelve a ejecutar el pipeline.

Notarás que el nombre del artefacto cambia en cada ejecución.


## Preguntas

Si accedes a la pagina `/env-vars.html/` en tu servidor jenkins notarás todas las variables disponibles para ser usadas en tus steps.

Hay una variable que incorpora `JOB_NAME` y `BUILD_NUMBER`. 

¿Cómo se llama la variable? 
¿Cómo modificarías el stage `Delivery` para usar esa variable?
