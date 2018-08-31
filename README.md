[![Maintainability](https://api.codeclimate.com/v1/badges/7300d25065b0d59b7a84/maintainability)](https://codeclimate.com/github/jeff1108/blockchain-ticketing-app/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7300d25065b0d59b7a84/test_coverage)](https://codeclimate.com/github/jeff1108/blockchain-ticketing-app/test_coverage)

## Blockchain Ticketing APP (Front-end)

This repository represents the Front-end element to our project, while the Sinatra/Ruby Back-end "blockchain" repository [can be found here](https://github.com/bilfar/blockchain-backend-ruby).

A blockchain-based ticketing app that allows users to purchase concert tickets and stores the validated transactions on a blockchain network. Created as part of our final project for the Makers Academy bootcamp during August 2018.

The Front-end allows a user to enter their personal information and select a concert ticket they would like to go to. The concert ticket information is currently being provided by a third party API SongKick. When the user buys a ticket the purchase is recorded as an unverified transaction in our blockchain. This will then be verified on the back-end when it is 'mined'.

You can [read our full project log here](https://hackmd.io/FugFiGBnQ0ivaJpLaANYhQ).

### Initial MVP
* Project setup (Trello, Github, Travis CI, Heroku, ESLinter)
* A simple app that allows a user to see available concert tickets and make a purchase.
* A 'dummy' blockchain built on Ruby that sends ticket transactions to a Postgres database.

### Final product
* Ticket app takes user information.
* Connect to an API for concerts information.
* Sends information as a JSON to the backend server.

Our final presentation on demo day can be found [here](https://docs.google.com/presentation/d/1PURB5G91A0dgU6mC7LHiLa4csqasrkKCU3yKW35Q27c/edit#slide=id.g4007ffac23_0_46)

### User stories purchaser
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
| Technologies Used | Test Suites |
| ----------------- | ----------- |
|  React, Javascript, HTML, CSS     | Enzyme, Jest, Cypress |


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
- As a team we got a good understanding on how blockchain works
- We were introduced to the REACT framework
- The project was built on good AGILE practices
- GitHub collaboration as a team
- Exposure to the full stack of this project

## Future/Further Improvements
- Payment page to allow users to pay for their tickets  
- Currently the prices of tickets are hard coded as the third party API does not provide this information
- Given more time we would like to refactor and improve our REACT code structure
- Build a ticket validation system for the venues to verify the tickets  

## Authors/Credits
* [Ben Luke Smith-Gordon](https://github.com/Ben-893)
* [Daniel Lau](https://github.com/dct-lau17)
* [Fred H](https://github.com/archmagos)
* [Jeff Hung](https://github.com/jeff1108)
* [Nabil Far](https://github.com/bilfar)
