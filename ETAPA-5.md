# Etapa 5

Ahora vamos a agregar un archivo Jenkins y ejecutar un pipeline para testear front y backend.

## Actividades

Agrega en la raiz del repo el archivo JenkinsFile con el siguiente contenido:

```
pipeline {
  agent none
  stages {
    stage('Test Movies API') {
      agent {
        docker {
          image 'golang:1.19.1-alpine'
        }
      }
      steps {
        dir(path: 'movies-api') {
          sh '''
            go mod download
            CGO_ENABLED=0 GOOS=linux GOCACHE="${WORKSPACE}/movies-api" go test -c .
            ./api.test
'''
        }

      }
    }
    stage('Test Movies Frontend') {
        agent {
            docker {
                image 'node:20.5-alpine3.17'
            }
        }
        steps {
            dir(path: 'movies-front') {
                sh '''
                  npm install --quiet
                  CI=true npm test
'''
            }
        }
    }

  }
}
```

Crea un pipeline en Jenkins siguiendo las instrucciones que te dió el profesor.

Notarás que el pipeline falla. 

Corrige primero el test de `movies-api`. En la linea 147 del archivo `server_test.go` se encuentra lo siguiente:


```go
			expectedCode:  200,
```

Cámbiala por lo siguiente:

```go
			expectedCode:  404,
```


Graba el archivo y vuelve a ejecutar el pipeline en jenkins.


Para corregir el test `movies-front` cambia en la línea 10 del archivo `src/components/AddDirector.test.js`, el texto que dice `expect(screen.getByText("Add a Movie"))` por  `expect(screen.getByText("Add a Director"))`.


# Preguntas

¿Qué crees que es lo que hace la sentencia `agent` en el archivo `JenkinsFile`?

