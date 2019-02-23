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
    ![Screenshot of node liri.js] (./npmLoad.png)

2. Choose option from list: 
    ![Screenshot of CLI list options] (./cliList.png)

3. Enter in a movie title, band name, song title, or choose "Just don't know? Try this." and see results:
    ![Screeshot of input] (./movieOption.png)
    ![Screenshot of movie results] (./movieResults.png)
    ![Screenshot of concert results] (./concertResults.png)
    ![Screenshot of song results] (./songResults.png)
    ![Screenshot of just don't know option results] (./dontKnowResults.png)

## Log.txt
This file keeps track of User choices and logs the results.
    ![Screenshot of log.txt] (https://github.com/ashmohney/LIRI-node-app/blob/master/logResults.png)



    


