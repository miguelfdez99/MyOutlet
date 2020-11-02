# Optimization

As I have indicated in the best practise for [Dockerfile](https://github.com/miguelfdez99/MyOutlet/blob/master/docs/dockerfile.md) we want to have only the relevant
information and data. We can achieve this with things like:

- Create a .dockignore file: I have included node_modules and docs
- Minimize the numbers of layers
  - Since only ADD, COPY and RUN increase the size of build we want avoid them as much as possible, using in the same instruction multiple commands.
  -For example:
    ~~~
    $ RUN npm install &&  rm -rf /var/lib/apt/lists/*
    ~~~
- Remove package manager cache
- Order matters. Previously I had 
~~~
COPY package*.json ./ 
~~~
before 
~~~
RUN npm install
~~~
isntead of after it.


  
