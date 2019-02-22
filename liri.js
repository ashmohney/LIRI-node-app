// set environment variables
require("dotenv").config();
// all that is required 
const inquirer = require('inquirer');
                                  // inquirer
                                  //   .prompt([
                                  //     /* Pass your questions in here */
                                  //   ])
                                  //   .then(answers => {
                                  //     // Use user feedback for... whatever!!
                                  //   });
const Spotify = require('node-spotify-api');
                                  // var spotify = new Spotify({
                                  //   id: <your spotify client id>,
                                  //   secret: <your spotify client secret>
                                  // });
                                   
                                  // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
                                  //   if (err) {
                                  //     return console.log('Error occurred: ' + err);
                                  //   }
                                   
                                  // console.log(data); 
                                  // });


var axios = require("axios");        
                                  // axios.get('/user', {
                                  //   params: {
                                  //     ID: 12345
                                  //   }
                                  // })
                                  // .then(function (response) {
                                  //   console.log(response);
                                  // })
                                  // .catch(function (error) {
                                  //   console.log(error);
                                  // });
const moment = require("moment");
const fs = require("fs");
const keys = require("./keys.js");

// setting variables as const_s
const omdbKey = keys.omdb.id;
      // console.log(keys.omdb.id);
const bandsKey = keys.bands.id;
      // console.log(keys.bands.id);
const spotify = new Spotify(keys.spotify);
      // console.log(keys.spotify);

// helps log.txt data more readable
const dashes = ("\n\n------------------------\n");

// appends date to log.txt
const appendData = function (data) {
  fs.appendFile("log.txt", JSON.stringify(data) + "\n", function (err) {
      if (err) {
          throw err;
      } 
      console.log("Updated: log.txt");
  });
}













// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


