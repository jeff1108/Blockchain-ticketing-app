[![Maintainability](https://api.codeclimate.com/v1/badges/7300d25065b0d59b7a84/maintainability)](https://codeclimate.com/github/jeff1108/blockchain-ticketing-app/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7300d25065b0d59b7a84/test_coverage)](https://codeclimate.com/github/jeff1108/blockchain-ticketing-app/test_coverage)

## Blockchain Ticketing APP (Front-end)

This repository represents the Front-end element to our project, while the Sinatra/ruby Back-end "blockchain" repository [can be found here](https://github.com/bilfar/blockchain-backend-ruby).

A blockchain-based ticketing app that allows users to purchase concert tickets and stores the validated transactions on a blockchain network. Created as part of our final project for the Makers Academy bootcamp during August 2018.

Via the front-end, a user can fill in his or her first-name, last-name and email-address. The user then can find a concert and buy a ticket. The back-end handles the request and creates a transaction(ticket). The back-end then sends a “thank you for your buy. This is your ticket number” message to the user. After the transaction(ticket) is created, the transaction is then marked as “unverified”. The miner can use his/her computer power processor to create a block on the transactions. The transactions now a are marked as a verified, and the miner get rewarded.

You can [read our full project log here](https://hackmd.io/FugFiGBnQ0ivaJpLaANYhQ).

### Initial MVP
* Project setup ( Trello, Github, Travis CI, Heroku, Simplecov, Linter)
* A simple app that allows a user to see available concert tickets and make a purchase.
* A 'dummy' blockchain built on Ruby that sends ticket transactions to a Postgres database.


### First Sprint (21-22 August)
```
As a frequent concert goer,
So that I can see what concerts are available,
I want to see a list of available concerts
```
```
As a fan of Spice Girls,
So that I can see them live at a concert,
I want to make a purchase of a ticket
```
```
As a ticket purchaser,
So that I can get into the concert,
I want a confirmation with my ticket number
```

## Technologies used
| Stack    | Technologies Used | Test Suites |
| -------- | ----------------- | ----------- |
| Front-end | React, Javascript, HTML, CSS     | Enzyme, Jest |



## To run application

clone this repo

```
git clone https://github.com/jeff1108/blockchain-ticketing-app.git
npm install  
npm start - to run server  
```

### To run cypress tests  

Start server `npm start`
On a another terminal `npm run cypress:open`  

### To run component tests

`npm test -- --coverage`


## Learning Outcomes
To be completed at end of project

## Future/Further Improvements
To be completed at end of project

## Authors/Credits
* [Ben Luke Smith-Gordon](https://github.com/Ben-893)
* [Daniel Lau](https://github.com/dct-lau17)
* [Fred H](https://github.com/archmagos)
* [Jeff Hung](https://github.com/jeff1108)
* [Nabil Far](https://github.com/bilfar)
