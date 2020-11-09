FROM node:12.19.0-alpine3.11

LABEL maintainer="Miguel Ángel Fernández Torralbo"

#Crear un nuevo usuario
RUN adduser -S miguel

#Copiamos los ficheros de dependencias
COPY package*.json ./

#Usuario sin privilegios para instalar npm
USER miguel

#Instalar dependencias y borrar la caché
RUN npm install &&  rm -rf /var/lib/apt/lists/*

#Usuario root para eliminar las dependencias
USER root

#Borramos ficheros de dependencias
RUN rm package*.json

#Cambiamos de usuario
USER miguel

#Para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

#Cambiamos de directorio
VOLUME /test
WORKDIR /test


#Ejecución
CMD npm run test
