# LIRI-node-app

## Overview

A command-line Language Interpretation and Recognition Interface node application. This application provides data about a given movie, concert, or song. 

## Technologies Used: 

* Node.js
* Axios
* dotENV  
* Inquirer
* Moment
* fs
* Node-Spotify-API
* Bands In Town API
* OMDB API

## Prerequisites

* API keys for Spotify (ID and Secret), Bands In Town, and OMDB
* A .env file containing your API keys. Please refer to ```keys.js``` 
* Install NPM packages with ```npm install``` in the command line

## How It Works

1. Load app: ```node liri.js```
    <img alt="Screenshot of node liri.js" src="/npmLoad.png">

2. Choose option from list: 
    <img alt="Screenshot of CLI list options" src="/cliList.png">

3. Enter in a movie title, band name, song title, or choose "Just don't know? Try this." and see results:
    <img alt="Screeshot of input" src="/movieOption.png">
    Movie Results:
    <img alt="Screenshot of movie results" src="/movieResults.png">
    Concert Results:
    <img alt="Screenshot of concert results" src="/concertResults.png">
    Song Results:
    <img alt="Screenshot of song results" src="/songResults.png">
    Just don't know? Try this:
    <img alt="Screenshot of just don't know option results" src="/dontKnowResults.png">

## Log.txt
This file keeps track of User choices and logs the results.
    <img alt="Screenshot of log.txt" src="/logResults.png">



    


