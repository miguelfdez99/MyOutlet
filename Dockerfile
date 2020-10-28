FROM node:12.19.0-alpine3.11

LABEL maintainer="Miguel Ángel Fernández Torralbo"

#Copiamos los ficheros de dependencias
COPY package.json package-lock.json ./

#Instalar dependencias
RUN npm install

#Crear un nuevo usuario
RUN adduser -D miguel

#Para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

#Cambiamos de directorio
WORKDIR /test

#Cambiamos de usuario
USER miguel

#Ejecución
CMD npm run test
