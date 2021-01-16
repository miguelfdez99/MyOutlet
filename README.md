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
  ~~~
  $ docker pull miguelfdez99/myoutlet
  $ docker run -t -v `pwd`:/test /miguelfdez99/myoutlet
  ~~~

# Despliegue en Heroku

[https://myoutlet.herokuapp.com/](https://myoutlet.herokuapp.com/)


## PaaS
- Descripción y justificación de las herramientas usadas para desplegar la aplicación en en PaaS.Descripción correcta de la configuración para despliegue automático, desde el repositorio o desde el sistema de integración continua. [Enlace](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/heroku.md)
- Funcionamiento correcto del despliegue en el PaaS (no sólo el status). Es decir, no se puede devolver ningún status 500. Buenas prácticas en el diseño del API, incluyendo su correspondencia correcta con diferentes HUs. [Enlace](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/deplymentapi.md)
- Uso correcto de bases de datos y logs dentro del PaaS, incluyendo su justificación y pruebas de prestaciones, así como avance general y grado de terminación de la aplicación. [Enlace](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/db.md)


## Documentación
- [¿Por qué este proyecto?](https://miguelfdez99.github.io/MyOutlet/info)
- [Mocha & Chai](https://miguelfdez99.github.io/MyOutlet/mocha_chai)
- [NPM](https://miguelfdez99.github.io/MyOutlet/tools)
- [Herramientas](https://miguelfdez99.github.io/MyOutlet/tools)
- [Configuración de git](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/config.md)
- [Pasos seguidos](https://miguelfdez99.github.io/MyOutlet/pasos)
- [Dockerfile](https://github.com/miguelfdez99/MyOutlet/blob/master/Dockerfile)
- [Integración continua](https://miguelfdez99.github.io/MyOutlet/ci)
- [Integración continua adicional](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/shippable.md)
- [Docker CI](https://miguelfdez99.github.io/MyOutlet/ci)
- [Telegram Bot](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/telegrambot.md)
- [Microservicios](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/vercel.md)
- [Framework](https://miguelfdez99.github.io/MyOutlet/framework)
- [Diseño de la API](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/api.md)
- [Test de integración](https://miguelfdez99.github.io/MyOutlet/apitest)

## Enlaces

- [Issues Cerrados](https://github.com/miguelfdez99/MyOutlet/issues?q=is%3Aissue+is%3Aclosed)
  - [H1](https://github.com/miguelfdez99/MyOutlet/milestone/1?closed=1)
  - [H2](https://github.com/miguelfdez99/MyOutlet/milestone/2?closed=1)
  - [H3](https://github.com/miguelfdez99/MyOutlet/milestone/3?closed=1)
  - [H4](https://github.com/miguelfdez99/MyOutlet/milestone/4?closed=1)
  - [H5](https://github.com/miguelfdez99/MyOutlet/milestone/5?closed=1)
  - [H6](https://github.com/miguelfdez99/MyOutlet/milestone/6?closed=1)
  - [H7](https://github.com/miguelfdez99/MyOutlet/milestone/7?closed=1)
  
- [Historias de usuario](https://github.com/miguelfdez99/MyOutlet/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [Milestones](https://github.com/miguelfdez99/MyOutlet/milestones)

## Autor

[Miguel Ángel Fernández](https://github.com/miguelfdez99)
