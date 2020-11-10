# Use of task manager

So far npm is enough to do everything, maybe in the next weeks npm is a bit short and I have to use another task manager like Gulp or Grunt.
But for now I am going to keep using npm.

### TravisCI

In travis we install the dependencies with **npm install** and we execute the tests with **npm test**. Moreover, we indicate the language that is going to be used and the versions.

![](img/travis1.png)

Later we are going to use Docker, it will pull our image and then execute it.

### Shippable

Is similar to Travis, we indicate language and version. Then we install npm and execute test with npm test. But in Shippable I have included code to avoid install node modules each time, which is:

~~~
cache: true
cache_dir_list: $SHIPPABLE_BUILD_DIR/node_modules
~~~
