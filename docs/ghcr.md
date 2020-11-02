# GitHub Container Registry

As the [GitHub Docs](https://docs.github.com/es/free-pro-team@latest/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images)
indicates I have follow the next steps:

- 1. Sign in to the Docker registry using a temporary PAT with at least the read:packages scope.
~~~
$ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
~~~

- 2. Pull down the image you'd like to migrate.
~~~
$ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
~~~

- 3. Re-tag the image with the new domain and a new image name. 
~~~
$ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
~~~

- 4. Sign in to the new container registry.
~~~
$ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
~~~

- 5. Push your re-tagged image to the container registry.
~~~
$ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
~~~
