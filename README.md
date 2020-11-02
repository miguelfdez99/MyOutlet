# MyOutlet
El proyecto consistirá en un microservicio de gestión de un outlet de ropa de deportiva en la que los usuarios podrán vender y comprar sus prendas favoritas.
Los usuarios podrán ver información de una prenda determinada, crear , eliminar o actualizar alguna de las suyas.

### Funcionalidades principales:
  - Añadir una nueva prenda que cumpla con los requisitos.
  - Consultar información acerca de una prenda determinada.
  - Eliminar una prenda.
  - Modificar la información acerca de una prenda.

## Instalación
Lo primero de todo es instalar las dependencias, para esto ejecutamos el siguiente comando:
~~~
$ npm install
~~~

## Test
Para lanzar los tests hay que ejecutar:
~~~
$ npm test
~~~

## Docker
- Para ejecutar los test a partir de los contenedores debemos de ejecutar los siguientes comandos.
  - Desde DockerHub
  ~~~
  $ docker pull miguelfdez99/myoutlet
  $ docker run -t -v `pwd`:/test /miguelfdez99/myoutlet
  ~~~
  - Desde GitHub Container Registry
  ~~~
  $ docker pull ghcr.io/miguelfdez99/myoutlest:latest
  ~~~
- Justificación del [contenedor base](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/baseContainer.md)
- [Buenas prácticas](https://miguelfdez99.github.io/MyOutlet/dockerfile) para el [Dockerfile](https://github.com/miguelfdez99/MyOutlet/blob/master/Dockerfile)
- [DockerHub](https://hub.docker.com/r/miguelfdez99/myoutlet) y [pasos seguidos](https://miguelfdez99.github.io/MyOutlet/dockerhub)
- [Github Container Regestry](https://github.com/users/miguelfdez99/packages/container/package/myoutlet) y su [documentación](https://miguelfdez99.github.io/MyOutlet/ghcr)
- [Optimización](https://miguelfdez99.github.io/MyOutlet/opt)


## Documentación
- [¿Por qué este proyecto?](https://miguelfdez99.github.io/MyOutlet/info)
- [Mocha & Chai](https://miguelfdez99.github.io/MyOutlet/mocha_chai)
- [NPM](https://miguelfdez99.github.io/MyOutlet/tools)
- [Herramientas](https://miguelfdez99.github.io/MyOutlet/tools)
- [Configuración de git](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/config.md)
- [Pasos seguidos](https://miguelfdez99.github.io/MyOutlet/pasos)

## Enlaces

- [Issues Cerrados](https://github.com/miguelfdez99/MyOutlet/issues?q=is%3Aissue+is%3Aclosed)
  - [H1](https://github.com/miguelfdez99/MyOutlet/milestone/1?closed=1)
  - [H2](https://github.com/miguelfdez99/MyOutlet/milestone/2?closed=1)
  - [H3](https://github.com/miguelfdez99/MyOutlet/milestone/3?closed=1)
- [Historias de usuario](https://github.com/miguelfdez99/MyOutlet/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [Milestones](https://github.com/miguelfdez99/MyOutlet/milestones)

## Autor

[Miguel Ángel Fernández](https://github.com/miguelfdez99)
