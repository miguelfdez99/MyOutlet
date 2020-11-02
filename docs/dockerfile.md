# Best practise

When it comes to create a Dockerfile it is highly recommended to do a best practice technique. I have looked into the official Docker documentation for
[best practises](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) and this [article](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/)

The main goal is to create a container that can be destroyed and stopped, in order to be rebuilt and replaced later on.

- Step 1: Election of the image
~~~
FROM node:12.19.0-alpine3.11
~~~
FROM creates a layer from the node:12.19.0-alpine3.11 Docker image.

- Step 2: Creation of a new user
~~~
RUN adduser -S miguel
~~~

- Step 3: Install dependencies and remove package manager cache
~~~
RUN npm install &&  rm -rf /var/lib/apt/lists/*
~~~

- Step 4: Copy the dependencies files
~~~
COPY package*.json ./
~~~

COPY adds files from your Docker client’s current directory. It only support copying local files.

- Step 5: Change user
~~~
USER miguel
~~~

USER is used to change to a non-root user. It is not recommended to use be switching USER frequently.

- Step 6: Create an environment variable 
~~~
ENV PATH=/node_modules/.bin:$PATH
~~~
ENV allow us to ensure that the path we set is correct. Therefore, the path it is going to be found is correct.

- Step 7: Expose files
~~~
VOLUME /test
~~~
The VOLUME instruction should be used to expose things in the container 

- Step 8: Chenge directory
~~~
WORKDIR /test
~~~
WORKDIR sets the working directory for the following instructions in the Dockerfile. Basically it is used for clarity.

- Step 9: Execution
~~~
CMD npm run test
~~~
CMD it is used to run the software in our image. It only can be used once in the entire Dockerfile.

I have used a label too for better organization
~~~
LABEL maintainer="Miguel Ángel Fernández Torralbo"
~~~

### Things I have learnt in those articles:

- Containers should be ephimeral.
- Exclude files not relevant in .dockerignore
- Don't install unnecessary packages
- Minimize the numbers of layers:
    - Only COPY, ADD, and RUN increase the size of build
- Use severeal instructions at once. 
    - For instance RUN npm install &&  rm -rf /var/lib/apt/lists/*. Before reading the articles I have the instructions separated.
- Remove package manager cache:
    - rm -rf /var/lib/apt/lists/*.
- Remove unnecessary dependencies.
- What all the instructions I have used means and are used for.




