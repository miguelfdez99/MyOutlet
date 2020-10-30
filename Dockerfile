FROM node:12.19.0-alpine3.11

LABEL maintainer="Miguel Ángel Fernández Torralbo"

#Crear un nuevo usuario
RUN adduser -S miguel

#Copiamos los ficheros de dependencias
COPY package*.json ./

#Instalar dependencias
RUN npm install

#Borramos archivos irrelevantes
RUN rm -rf /var/lib/apt/lists/*

#Para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

#Cambiamos de usuario
USER miguel

#Cambiamos de directorio
VOLUME /test
WORKDIR /test


#Ejecución
CMD npm run test
