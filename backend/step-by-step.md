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


On the MongoDB website, a free cluster called NotepadSample was reused, it was created as collections (customers and associates) so that CRUD could be done, fia migrations could be done but I was out of time, who knows, maybe I'll adjust this in the future
(image of collections in the cluster -> /backend/documents/collections.png)


