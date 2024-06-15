# NodeJS + Typescript + MongoDB

## Step By Step of project

First, you must have previously installed NodeJS and created an account on the mongoDB website

### init package.json with:

```js
yarn init -y
```

### install and init typescript

```js
yarn add typescript -D
after
yarn tsc --init
```

### install express and types

```js
yarn add express
after
yarn add @types/express -D
```

### install ts-node-dev

```js
yarn add ts-node-dev -D
```
<hr>

* go to tsconfig.json and configure as is in this project

```js
yarn tsc
```
<hr>

### install tsconfig-paths and add in script of package.json

```js
yarn add tsconfig-paths -D
```
* go to package.json and add tsconfig-paths/register in scripts.dev


use the format created in src/routes to create endpoints and the standard use of controllers for functions that will return data from endpoints, follow the ConnectionService service to create an easy connection with the Mongo database


On the MongoDB website, a free cluster that I had created for studies called NotepadSample was reused, it was created containing the collections (clients and associates) so that CRUD could be done, migrations could be done, but I was out of time, who knows, maybe I adjust this in the future
(image of collections in the cluster, if you want to test in your local environment, create the cluster with the same name (NotepadSample) and the collations customers and associates -> /backend/documents/collections.png)
Then adjust the .env file and backend/src/services/ConnectionService.ts


