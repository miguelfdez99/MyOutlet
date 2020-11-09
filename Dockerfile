FROM node:12.19.0-alpine3.11

LABEL maintainer="Miguel Ángel Fernández Torralbo"

#Crear un nuevo usuario
RUN adduser -S miguel

#Copiamos los ficheros de dependencias
COPY package*.json ./

#Instalar dependencias y borrar la caché y ficheros de dependencies
RUN npm install &&  rm -rf /var/lib/apt/lists/*  \
&& rm package*.json

#Cambiamos de usuario
USER miguel

#Para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

#Cambiamos de directorio
VOLUME /test
WORKDIR /test

#Ejecución
CMD npm run test
