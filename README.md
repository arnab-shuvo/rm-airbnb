# rm-AirBnb

Powered by
[[ ReactJs]](https://reactjs.org/) [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

rm-AirBnb is a miniature type product of AirBnb which is created to demonstrate my skills of ReactJs and Nodejs. Dur to time line, many features that I wanted to ad,is not included yet but if time provided, things can be make possible.

### Tech

rm-AirBnb uses a number of open source projects to work properly:

-   Nodejs - Server Side language
-   ReactJs - SPA!
-   Tyescript - Type casting
-   Redux - State Management Package
-   Material UI - Layout of the Components
-   Styled Components - design the componentss
-   Docker
-   Docker-compose
-   yarn

### Features Added

-   Creating Proeperty entry including available dates
-   Searching property by date and location
-   Add comment on a particular property
-   show the latest reviewd property in the home page
-   Detail information for a particular property
-   Authentication is added in API but not implemented in the frontend though

### Features can be Added in future

-   Reservation system
-   Searching on proeprty type
-   Authentication system can be added in the frontend
-   Comments can be varified
-   Payment system can be added
-   SSR can be introduced

### Installation for Development

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in development mood, run the following commands

To Start the server, run

```sh
$ yarn or npm isntall
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

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in docker, run the following commands

```sh
$ docker build && docker-compose up -d
```
