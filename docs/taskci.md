# Use of task manager

So far npm is enough to do everything, maybe in the next weeks npm is a bit short and I have to use another task manager like Gulp or Grunt.
But for now I am going to keep using npm.

### TravisCI

For TravisCI I have used Docker, the container is the one who is going to install all the dependencies and run the tests.
![](img/travis_code.png)


### Shippable

We indicate language and versions. Then we install npm and execute test with npm test. In Shippable I have included code to avoid install node modules each time, which is:

~~~
cache: true
cache_dir_list: $SHIPPABLE_BUILD_DIR/node_modules
~~~
