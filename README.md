![Logo](front/src/assets/images/logo_black.svg)

# Rando-Bière

> A website to help you exercise and drink !
> Live demo [_here_](http://ec2-3-85-243-18.compute-1.amazonaws.com/).

## Table of Contents

- [Rando-Bière](#rando-bière)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
    - [Back](#back)
    - [Front](#front)
  - [Features](#features)
  - [Setup](#setup)
    - [Back](#back-1)
      - [Lauch the API](#lauch-the-api)
    - [Front](#front-1)
  - [Usage](#usage)
    - [API](#api)
  - [Project Status](#project-status)
  - [Room for Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
<!-- * [License](#license) -->


## General Information

Rando-Bière started as a project to help us students work on our developping skills.

This project contains a rest API and a REACT/REDUX front app.

This website provides a list of french local breweries that are both starting and ending points to their associated hikes (so far, all datas are fake).

You can search for one specific brewery in the region you are interested in or just have a look at all breweries to help you decide.

Then, just take your backpack, go for a walk and enjoy a nice beer at the end of your journey !

## Technologies Used

### Back

- NodeJs - version 15.11
- NPM - version 7.6.0
- PostgreSQL - version 12.6
- Sqitch - version 0.9999
- Redis - version 5.0.7

### Front

- Yarn - version 1.22.10
- Redux - version 4.1.0
- React - version 17.0.2
- React-redux - version 7.2.4
- Webpack - version 5.27.2
- Sass - version 1.32.8

## Features

So far on Rando-Bière you can :

- search for breweries by region
- have a look at a list of all breweries
- check the details of a brewery, including its associated hikes
- check the details of a hike, including a list of all other hikes associated to the same brewery
- log in and out as an admin user (use the "administration" link in the footer)
- as an admin, you can access a control pannel 
- from the control pannel you can either add, delete or update a brewery

## Setup 

### Back

These are all dependencies that will be installed for this project :

- express
- pg
- dotenv
- cors
- bcrypt
- express-swagger-generator
- joi
- jsonwebtoken
- redis

  
#### Lauch the API

First, make sure to **create a database** in PostgreSQL with name `rando_biere`.

Don't forget to create and fill the **.env** file (take a look at the .env.example file). 

Then, make sure you are in the **back** folder of the projet. From there, you can install all dependencies using the command `npm install`. 

Now, you can lauch the first sqitch migration : `sqitch deploy rando_biere`. 

Then, run `npm run reset`.

> combines `sqitch revert rando_biere`, `sqitch deploy rando_biere`, `node data/generateAdmin.js` - to generate an admin user using the password from the .env file, `psql -d rando_biere -f data/import.sql` to import fake data to test.

> If you need to reset your local db later on, just use this again!

Use the command `redis-server --daemonize yes` to lauch the Redis Cache.
> you can stop Redis using `redis-cli shutdown` (this will crash the server)

You can now start the API Server with `npm start`.

### Front

These are the main dependencies that will be installed for this project :

Production :
- material-ui
- axios
- core-js
- react
- react-redux
- redux

devDependencies :
- babel
- cssnano
- eslint
- sass
- webpack
    

If you only want to see the Front-End of the app you can :

- move to the front directory `cd front`
- install yarn dependencies `yarn`
- start the app `yarn start --open`


## Usage

### API

Once the server is started, you can use the route http://localhost:PORT/api-docs to see the documentation of the api ! 
> don't forget to replace PORT with the one you used to lauch the API


## Project Status

Project is: _in progress_ !


## Room for Improvement

So far, there are still many features we would like to add to this project :

- display of a map with flags to locate breweries
- exhibition of one specific beer for each brewery
- add, delete and update hikes for admin users
- sign in to create a user account
- reviews and ratings of breweries, hikes and beers as a logged-in user
- display of the best breweries on the front page, based on their ratings
- improvement of the brewery search : city name, brewery name, rating
- hike search with new filters : type, difficulty, environment, rating
- a fun fact page about alcohol
- a page with tips for hiking
- display of the total number of hikes

## Acknowledgements

- This project was inspired by the book **Randos bière en France**, by Fabienne Luisier.
- Many thanks to our amazing teachers, helpers, fellow students and generally O'clock ! 
- Thanks [here](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project) for this nice README template


## Contact

- [Manon Becle](https://github.com/manonbecle) - Front-end
- [Elodie Da Rocha](https://github.com/ElodieDaRocha) - Back-end
- [Alexandre Houang](https://github.com/AlexandreHouang) - Front-end
- [Tao Jacqueline](https://github.com/TaoJacqueline) - Back-end
- [Frédéric Lugbull](https://github.com/fredericlugbull) - Front-end
