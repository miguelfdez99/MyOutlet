FROM node:12.19.0-alpine3.11

LABEL maintainer="Miguel Ángel Fernández Torralbo"

#Crear un nuevo usuario
RUN adduser -S miguel

#Instalar dependencias y borrar caché
RUN npm install &&  rm -rf /var/lib/apt/lists/*

#Copiamos los ficheros de dependencias
COPY package*.json ./

#Cambiamos de usuario
USER miguel

#Para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

#Cambiamos de directorio
VOLUME /test
WORKDIR /test


#Ejecución
CMD npm run test
