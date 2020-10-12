# rm-AirBnb

Powered by
[[ ReactJs]](https://reactjs.org/) [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

rm-AirBnb is a miniature type product of AirBnb which is created to demonstrate my skills of ReactJs and Nodejs. Dur to time line, many features that I wanted to ad,is not included yet but if time provided, things can be make possible.

### Pre-requisites to run the project

-   Typescript
-   Node
-   Docker
-   Docker-compose
-   yarn
-   ports: **3000** & **27017**

### Things to do to run the project

-   Create a **uploads** folder in **server** directory

### Things to do to run the project in docker

-   Create a **uploads** folder in **server** directory
-   Change the **Connection String** in **server.ts** from **localhost:27017** to **mongo:27017**

### Tech

rm-AirBnb uses a number of open source projects to work properly:

-   Nodejs - Server Side language
-   ReactJs - SPA!
-   Tyescript - Type casting
-   Redux - State Management Package
-   Material UI - Layout of the Components
-   Styled Components - design the components
-   Docker
-   Docker-compose
-   yarn

### Features Added

-   Creating Property entry including available dates
-   Searching property by date and location
-   Add comment on a particular property
-   show the latest reviewed property in the home page
-   Detail information for a particular property
-   Authentication is added in API but not implemented in the frontend though

### Features can be Added in future

-   Reservation system
-   Mobile responsive features can be added
-   Searching on property type
-   Authentication system can be added in the frontend
-   Comments can be verified
-   Payment system can be added
-   SSR can be introduced

### Installation for Development

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in development mood, run the following commands

To Start the server, run

```sh
$ yarn or npm install
$ yarn server or npm run server
```

for Front End,

```sh
$ cd client
$ yarn  or npm install
$ yarn client or npm run client
```

### Installation for prod

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in built mood, run the following commands

```sh
$ yarn dev
```

Or for npm,

```sh
$ npm run dev
```

### For Docker

-   Create a **uploads** folder in **server** directory
-   Change the **Connection String** in **server.ts** from **localhost:27017** to **mongo:27017**

To run the project in docker, run the following commands

```sh
$ docker-compose build && docker-compose up -d
```
