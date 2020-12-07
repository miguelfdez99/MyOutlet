# VERCEL

To deploy my repository in Vercel I stuck to the [official documentation](https://vercel.com/docs/platform/deployments).

First you have to athorize Vercel to access your GitHub account then you choose which project you want to import

![](/img/vercel.png)

Then we can choose which folders we want to import. It may looks like choosing everything is not the best choice but the functions probably need to access others directories.

Finally, in order to make the deployment:

- To make a deplyment preview:
~~~
$ vercel
~~~

- To make a production deployment_
~~~
$ vercel --prod
~~~

Now with every push to my repository Vercel is going to be launch aswell

## Creating a function

Vercel builds functions within the '/api' directory.To work it must export a default function handler.

I'm going to implement a function to see which item is the cheaper one.It is user story 6.


![](/img/vercelf.png)

The function Price gets every price of the data and it save the lower price. It is a very simple function that works fine.


Additionally I have created a file with the [data](https://github.com/miguelfdez99/MyOutlet/blob/master/api/data.js)
